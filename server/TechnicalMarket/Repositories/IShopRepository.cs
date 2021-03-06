﻿using System.Collections.Generic;
using TechnicalMarket.Models;

namespace TechnicalMarket.Repositories
{
    public interface IShopRepository
    {
        IEnumerable<Shop> GetShops();

        Shop GetShop(int id);

        int CreateShop(Shop shop);

        void DeleteShop(int id);
    }
}