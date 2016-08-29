using HomeDepot.Platform.Web;
using Microsoft.Extensions.PlatformAbstractions;
using System;

namespace HomeDepot.Platform.UI.Smith
{
    public class Program
    {
        public static void Main(string[] args)
        {
            PlatformWebServices.StartWebHost(args);
        }
    }
}
