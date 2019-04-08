using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using TechnicalMarket.Repositories;
using Unity;
using Unity.Lifetime;
using Newtonsoft.Json;
using TechnicalMarket.Services;

namespace TechnicalMarket
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            config.Formatters.JsonFormatter.UseDataContractJsonSerializer = false;

            var container = new UnityContainer();
            container.RegisterType<IShopRepository, ShopRepository>();
            container.RegisterType<IShopService, ShopService>();
            config.DependencyResolver = new UnityResolver(container);
        }
    }
}
