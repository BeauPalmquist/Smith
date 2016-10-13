using HomeDepot.Platform.Web;
using Microsoft.Extensions.PlatformAbstractions;
using System;
using HomeDepot.Platform.Core.Hosting;

namespace HomeDepot.Platform.UI.Smith
{
    public class Program
    {
        public static void Main(string[] args)
        {
            new ForgeHostBuilder(args)
                .UseMicroserviceRouting()
                .Run();
        }
    }
}
