export const Currency = {
    USD: 1,
    EUR: 2,
    RUB: 3,
    UAH: 4
}

export const getCurrencyKey = id =>
    Object.keys(Currency).find(k => Currency[k] === id)

