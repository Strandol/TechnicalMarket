using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TechnicalMarket.Models
{
    public class Shop
    {
        [Required]
        public int ShopId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]
        public double Budget { get; set; }

        public int Currency { get; set; }
    }
}