using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Avnon.AddressBook.Api.Business;
using Avnon.AddressBook.Api.Business.Interfaces;
using Avnon.AddressBook.Api.Repository;
using Avnon.AddressBook.Api.Repository.Interfaces;
using Microsoft.AspNetCore.Antiforgery.Internal;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Avnon.AddressBook.Api
{
    public class Startup
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
            services.AddSingleton<IContactService, ContactService>();
            services.AddSingleton<ITagService, TagService>();
            services.AddSingleton<IContactRepository, ContactRepository>();
            services.AddSingleton<ITagRepository, TagRepository>();
            services.AddSingleton<IDbConnection>(new SqlConnection(Configuration.GetConnectionString("Avnon")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseMvc();
        }
    }
}
