using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TechnicalMarket.Models;
using TechnicalMarket.Repositories;

namespace TechnicalMarket.Services
{
    public class ShopService : IShopService
    {
        IShopRepository shopRepository;

        public ShopService(IShopRepository shopRepository)
        {
            this.shopRepository = shopRepository;
        }

        public IEnumerable<Shop> GetShops()
        {
            IEnumerable<Shop> shops = shopRepository.GetShops();
            return shops;
        }

        public Shop GetShop(int id)
        {
            Shop shop = shopRepository.GetShop(id);
            return shop;
        }

        public int CreateShop(Shop shop)
        {
            int id = shopRepository.CreateShop(shop);
            return id;
        }

        public void DeleteShop(int id)
        {
            shopRepository.DeleteShop(id);
        }
    }
}