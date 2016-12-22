using Forge.Core.Hosting;
using Forge.Web;

namespace Forge.Smith
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
