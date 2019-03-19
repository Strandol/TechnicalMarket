using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TechnicalMarket.Models;

namespace TechnicalMarket.Repositories
{
    public interface IShopRepository
    {
        void Create(Shop shop);
        void Delete(int id);
    }
}