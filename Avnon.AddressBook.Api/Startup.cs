using System.Data;
using System.Data.SqlClient;
using Avnon.AddressBook.Api.Business;
using Avnon.AddressBook.Api.Business.Interfaces;
using Avnon.AddressBook.Api.Repository;
using Avnon.AddressBook.Api.Repository.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Avnon.AddressBook.Api.Model;
using Microsoft.AspNetCore.Mvc;

namespace Avnon.AddressBook.Api
{
    public partial class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", a => a.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            });

            services.AddSingleton<IDbConnection>(new SqlConnection(Configuration.GetConnectionString("Avnon")));
            services.AddSingleton<IConfiguration>(Configuration);
            services.AddSingleton<IUserRepository, UserRepository>();
            services.AddSingleton<IRoleRepository, RoleRepository>();
            services.AddSingleton<IContactRepository, ContactRepository>();
            services.AddSingleton<ITagRepository, TagRepository>();
            services.AddSingleton<IUserStore<User>, UserStore>();
            services.AddSingleton<IRoleStore<Role>, RoleStore>();
            services.AddSingleton<IUserPasswordStore<User>, UserStore>();
            services.AddSingleton<IUserEmailStore<User>, UserStore>();
            services.AddSingleton<IUserLoginStore<User>, UserStore>();
            services.AddSingleton<IContactService, ContactService>();
            services.AddSingleton<ITagService, TagService>();

            services.AddIdentity<User, Role>();

            services.Configure<IdentityOptions>(o =>
            {
                o.Cookies.ApplicationCookie.AutomaticAuthenticate = false;
                o.Cookies.ApplicationCookie.AutomaticChallenge = false;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseCors("AllowAll");

            app.UseIdentity();

            ConfigureAuth(app);
    
            app.UseMvc();
        }
    }
}
