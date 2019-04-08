using System.Collections.Generic;
using System.Web.Http;
using TechnicalMarket.Models;
using TechnicalMarket.Services;

namespace TechnicalMarket.Controllers
{
    public class ShopController : ApiController
    {
        IShopService shopService;

        public ShopController(IShopService shopService)
        {
            this.shopService = shopService;
        }

        [HttpGet]
        public IEnumerable<Shop> GetShops()
        {
            return shopService.GetShops();
        }

        [HttpGet]
        public Shop GetShop(int id)
        {
            return shopService.GetShop(id);
        }

        [HttpPost]
        public int AddShop(Shop shop)
        {
            return shopService.CreateShop(shop);
        }

        [HttpDelete]
        public void DeleteShop(int id)
        {
            shopService.DeleteShop(id);
        }
    }
}