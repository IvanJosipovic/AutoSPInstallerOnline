using System.Web;
using System.Web.Optimization;

namespace AutoSPInstallerOnline
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/javascript").Include(
                        "~/bower_components/jsonix/dist/Jsonix-min.js",
                        "~/bower_components/vkBeautify-wrapper/dist/vkbeautify.0.99.00.beta.js",
                        "~/Scripts/App.js",
                        "~/Scripts/Models/*.js",
                        "~/Scripts/Directives/*.js",
                        "~/Scripts/Services/*.js",
                        "~/Scripts/Controllers/*.js",
                        "~/Scripts/Config.js",
                        "~/Scripts/ConfigModel*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            BundleTable.EnableOptimizations = false;
        }
    }
}
