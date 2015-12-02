using System;
using HomeDepot.Platform.Web;
using Microsoft.Extensions.PlatformAbstractions;

namespace HomeDepot.Platform.UI.Smith
{
    public class Program
    {
        public Program(IServiceProvider serviceProvider, IApplicationEnvironment environment)
        {
            this.serviceProvider = serviceProvider;
            this.environment = environment;
        }

        public void Main(string[] args)
        {
            PlatformWebServices.StartWebHost(serviceProvider, environment, args);
        }

        private IServiceProvider serviceProvider;
        private IApplicationEnvironment environment;
    }
}
