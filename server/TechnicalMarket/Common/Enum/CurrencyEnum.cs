using TechnicalMarket.Common.Attributes;

namespace TechnicalMarket.Common.Enum
{
    public enum CurrencyEnum
    {
        [EnumDescription("United states dollar")]
        USD,
        [EnumDescription("Euro")]
        EUR,
        [EnumDescription("Russian Ruble")]
        RUB,
        [EnumDescription("Ukrainian Hryvnia")]
        UAH
    }
}