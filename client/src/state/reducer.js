import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import shops from './shops/reducer'

const appReducer = combineReducers({
    shops,
    form
})

export default appReducer
