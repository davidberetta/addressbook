using Microsoft.AspNetCore.Builder;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Text;

namespace Avnon.AddressBook.Api
{
    public partial class Startup
    {
        private void ConfigureAuth(IApplicationBuilder app)
        {           
			var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration.GetSection("TokenAuthentication:SecretKey").Value));

			var tokenValidationParameters = new TokenValidationParameters
			{
				ValidateIssuerSigningKey = true,
				IssuerSigningKey = signingKey,
				ValidateIssuer = true,
				ValidIssuer = Configuration.GetSection("TokenAuthentication:Issuer").Value,
				ValidateAudience = true,
				ValidAudience = Configuration.GetSection("TokenAuthentication:Audience").Value,
				ValidateLifetime = true,
				ClockSkew = TimeSpan.Zero
			};

			app.UseJwtBearerAuthentication(new JwtBearerOptions
			{
				AutomaticAuthenticate = true,
				AutomaticChallenge = true,
				TokenValidationParameters = tokenValidationParameters,
			});
        }
    }
}
