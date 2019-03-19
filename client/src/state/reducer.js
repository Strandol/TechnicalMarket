import { combineReducers } from 'redux'

import shops from './shops/reducer'

const appReducer = combineReducers({
    shops
})

export default appReducer
