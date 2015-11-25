using HomeDepot.Platform.Web;
using Microsoft.AspNet.Builder;
using Microsoft.Dnx.Runtime;
using Microsoft.Framework.Configuration;
using Microsoft.Framework.DependencyInjection;

namespace HomeDepot.Platform.UI.Smith
{
    public class Startup
    {
        public Startup(IApplicationEnvironment environment)
        {
            this.environment = environment;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            var config = new ConfigurationBuilder().SetBasePath(environment.ApplicationBasePath).AddJsonFile("config.json");

            services.AddPlatformMicroservices(environment, config);
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UsePlatformMicroservices();
        }

        private IApplicationEnvironment environment;
    }
}
