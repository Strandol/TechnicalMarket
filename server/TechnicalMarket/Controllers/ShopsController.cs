using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TechnicalMarket.Models;
using TechnicalMarket.Repositories;

namespace TechnicalMarket.Controllers
{
    public class ShopsController : ApiController
    {
        IShopRepository _rep;

        public ShopsController(IShopRepository rep)
        {
            _rep = rep;
        }

        // GET: api/Shops
        public IEnumerable<Shop> GetShops()
        {
            IEnumerable<Shop> shops =_rep.GetShops();
            return shops;
        }

        // GET: api/Shops/5
        public Shop GetShop(int id)
        {
            Shop shop = _rep.GetShop(id);
            return shop;
        }

        // POST: api/Shops
        public int AddShop(Shop shop)
        {
            int id = _rep.AddShop(shop);
            return id;
        }

        // DELETE: api/Shops/5
        public void DeleteShop(int id)
        {
            _rep.DeleteShop(id);
        }
    }
}