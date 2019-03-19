using System.Collections.Generic;
using System.Linq;
using TechnicalMarket.Models;

namespace TechnicalMarket.Repositories
{
    public class ShopRepository: IShopRepository
    {

        public IEnumerable<Shop> GetShops()
        {
            using (MarketContext db = new MarketContext())
            {
                return db.Shops.AsNoTracking().ToArray();
            }
        }

        public Shop GetShop(int id)
        {
            using (MarketContext db = new MarketContext())
            {
                return db.Shops.Find(id);
            }
        }

        public int AddShop(Shop shop)
        {
            using (MarketContext db = new MarketContext())
            {
                Shop entity = db.Shops.Add(shop);
                db.SaveChanges();

                return entity.ShopId;
            }
        }

        public void DeleteShop(int id)
        {
            using (MarketContext db = new MarketContext())
            {
                var shop = db.Shops.Find(id);

                if (shop == null) return;

                db.Shops.Remove(shop);
                db.SaveChanges();
            }
        }
    }
}