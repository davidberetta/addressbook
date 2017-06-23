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
            //Deny x-frame requests
            app.Use(async (context, next) =>
            {
                context.Response.Headers.Add("X-Frame-Options", "DENY");
                await next();
            });


            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration["TokenAuthentication:SecretKey"]));

			var tokenValidationParameters = new TokenValidationParameters
			{
				ValidateIssuerSigningKey = true,
				IssuerSigningKey = signingKey,
				ValidateIssuer = true,
				ValidIssuer = Configuration["TokenAuthentication:Issuer"],
				ValidateAudience = true,
				ValidAudience = Configuration["TokenAuthentication:Audience"],
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
