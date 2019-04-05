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

namespace TechnicalMarket
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var jsonFormatterCamel = new JsonMediaTypeFormatter();
            jsonFormatterCamel.SupportedMediaTypes.Clear();
            MediaTypeHeaderValue mt = new MediaTypeHeaderValue("application/json");
            jsonFormatterCamel.SupportedMediaTypes.Add(mt);

            var settings = jsonFormatterCamel.SerializerSettings;
            settings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            config.Formatters.Add(jsonFormatterCamel);

            // config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            // config.Formatters.JsonFormatter.UseDataContractJsonSerializer = false;

            var container = new UnityContainer();
            container.RegisterType<IShopRepository, ShopRepository>(new HierarchicalLifetimeManager());
            config.DependencyResolver = new UnityResolver(container);
        }
    }
}
