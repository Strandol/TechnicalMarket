using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace TechnicalMarket.Models
{
    public class MarketContext: DbContext
    {
        public MarketContext(): base()
        {
            Database.SetInitializer<MarketContext>(new CreateDatabaseIfNotExists<MarketContext>());
        }

        public DbSet<Shop> Shops { get; set; }
    }
}