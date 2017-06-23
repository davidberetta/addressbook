using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Avnon.AddressBook.Api.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;
using System.Globalization;
using System.Net.Http;
using Newtonsoft.Json.Linq;

namespace Avnon.AddressBook.Api.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class AccountController : Controller
    {
        private readonly SignInManager<User> _signinManager;
        private readonly UserManager<User> _userManager;
        private readonly IConfiguration Configuration;

        public AccountController(IConfiguration config, SignInManager<User> signInManager, UserManager<User> userManager)
        {
            Configuration = config;
            _signinManager = signInManager;
            _userManager = userManager;
        }

        [AllowAnonymous]
        [HttpPost("Register")]
        public async Task<IActionResult> RegisterAsync([FromBody]UserDto userDto)
        {
            if (userDto == null)
                return BadRequest();

            var user = new User()
            {
                UserName = userDto.Username,
                Email = userDto.Email
            };

            var result = await _userManager.CreateAsync(user, userDto.Password);

            if (result.Errors.Any())
            {
                return BadRequest();
            }

            return Ok();
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<IActionResult> LoginAsync([FromBody]UserDto userDto)
        {
            if (userDto == null)
                return BadRequest();

            var result = await _signinManager.PasswordSignInAsync(userDto.Username, userDto.Password, true, false);

            var response = new ResponseDto();

            if (result.Succeeded)
            {
                response.Token = GenerateAccessToken(userDto.Username, 600);
                return Ok(response);
            }

            response.Errors.Add("Invalid login details");

            return Ok(response);
        }

        [AllowAnonymous]
        [HttpGet("LoginFacebook")]
        public async Task<IActionResult> LoginFacebookAsync(string providerKey, string accessToken)
        {
            var facebookOptions = new FacebookOptions()
            {
                AppId = Configuration["Facebook:AppId"],
                AppSecret = Configuration["Facebook:AppSecret"],
                Scope = { "email", "public_profile" },
            };

            var result = new ResponseDto();

            var queryStrings = new Dictionary<string, string>()
            {
                {"access_token", accessToken},
                {"appsecret_proof", GenerateAppSecretProof(accessToken, facebookOptions.AppSecret)},
                {"fields", string.Join(",", facebookOptions.Fields)},
            };

            var endpoint = QueryHelpers.AddQueryString(facebookOptions.UserInformationEndpoint, queryStrings);

            var fbResponse = await (new HttpClient().GetAsync(endpoint));

            if (!fbResponse.IsSuccessStatusCode)
            {
                result.Errors.Add("Facebook Authentication Failed");
                return Ok(result);
            }

            var fbContent = JObject.Parse(await fbResponse.Content.ReadAsStringAsync());

            var user = await _userManager.FindByLoginAsync("Facebook", providerKey);

            if (user == null)
            {
                var userEmail = fbContent["email"].Value<string>();
                //Find user by email
                user = await _userManager.FindByEmailAsync(userEmail);

                if (user == null)
                {
                    //Create user account
                    user = new User()
                    {
                        UserId = Guid.NewGuid().ToString(),
                        Email = userEmail,
                        UserName = userEmail,
                    };

                    await _userManager.CreateAsync(user);

                }

                //Link Facebook to account
                await _userManager.AddLoginAsync(user, new UserLoginInfo("Facebook", providerKey, null));
            }

            await _signinManager.SignInAsync(user, false, "Facebook");

            //result.Username = fbContent["name"].Value<string>(); ;
            result.Token = GenerateAccessToken(user.UserName, 600);

            return Ok(result);
        }

        private string GenerateAppSecretProof(string accessToken, string appSecret)
        {
            using (var algorithm = new HMACSHA256(Encoding.ASCII.GetBytes(appSecret)))
            {
                var hash = algorithm.ComputeHash(Encoding.ASCII.GetBytes(accessToken));
                var builder = new StringBuilder();
                for (int i = 0; i < hash.Length; i++)
                {
                    builder.Append(hash[i].ToString("x2", CultureInfo.InvariantCulture));
                }
                return builder.ToString();
            }
        }

        private string GenerateAccessToken(string username, int lifetime)
        {
            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration["TokenAuthentication:SecretKey"]));

            var handler = new JwtSecurityTokenHandler();
            var requestAt = DateTime.Now;
            var expiresAt = requestAt.AddSeconds(lifetime);

            var identity = new ClaimsIdentity(
                new GenericIdentity(username, "access_token"),
                new[]
                {
                    new Claim("username", username),
                    new Claim("pn_pub_key", Configuration["PubNub:PublishKey"]),
                    new Claim("pn_sub_key", Configuration["PubNub:SubscribeKey"]),
                }
            );

            var token = handler.CreateToken(new SecurityTokenDescriptor()
            {
                Issuer = Configuration["TokenAuthentication:Issuer"],
                Audience = Configuration["TokenAuthentication:Audience"],
                SigningCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256),
                Subject = identity,
                Expires = expiresAt,
                NotBefore = requestAt,
            });

            return handler.WriteToken(token);
        }

        public class UserDto
        {
            public string Username { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class ResponseDto
        {
            public ResponseDto()
            {
                Errors = new List<string>();
            }
            public string Token { get; set; }
            public IList<string> Errors { get; set; }
        }
    }
}



