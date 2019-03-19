﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace TechnicalMarket.Models
{
    public class MarketContext: DbContext
    {
        public MarketContext(): base()
        { }

        public DbSet<Shop> Shops { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            Database.SetInitializer<MarketContext>(null);
            base.OnModelCreating(modelBuilder);
        }
    }
}