using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TechnicalMarket.Models;

namespace TechnicalMarket.Services
{
    public interface IShopService
    {
        IEnumerable<Shop> GetShops();

        Shop GetShop(int id);

        int CreateShop(Shop shop);

        void DeleteShop(int id);
    }
}