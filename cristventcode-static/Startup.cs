using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(cristventcode_static.Startup))]
namespace cristventcode_static
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
