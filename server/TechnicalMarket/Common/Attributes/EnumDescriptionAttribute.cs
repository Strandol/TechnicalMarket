using System;

namespace TechnicalMarket.Common.Attributes
{
    public class EnumDescriptionAttribute : Attribute
    {
        public EnumDescriptionAttribute(string description)
        {
            this.Description = description;
        }

        public string Description { get; set; }
    }
}