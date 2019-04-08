import { GET_SHOPS_REQUEST, REGISTER_SHOP_REQUEST } from '../action-types'

export const loadShops = () => ({ type: GET_SHOPS_REQUEST })

export const registerShop = (shop) => ({ type: REGISTER_SHOP_REQUEST, shop })
