using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TechnicalMarket.Models;

namespace TechnicalMarket.Repositories
{
    public interface IShopRepository
    {
        IEnumerable<Shop> GetShops();
        Shop GetShop(int id);
        int AddShop(Shop shop);
        void DeleteShop(int id);
    }
}