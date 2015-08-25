using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AutoSPInstallerOnline
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //routes.MapRoute(
            //    name: "API",
            //    url: "api/{controller}/{action}/{id}",
            //    defaults: new { controller = "Tasks", action = "Index", id = UrlParameter.Optional }
            //);

            routes.MapRoute(
                "Default", // Route name
                "{*catchall}", // URL with parameters
                new { controller = "Home", action = "Index" } // Parameter defaults
            );
        }
    }
}
