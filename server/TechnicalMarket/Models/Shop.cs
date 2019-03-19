using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TechnicalMarket.Models
{
    public class Shop
    {
        public int ShopId { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public double Budget { get; set; }
        public int Currency { get; set; }
    }
}