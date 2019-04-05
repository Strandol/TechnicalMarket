
import {
    GET_SHOPS_LOADED,
    GET_SHOPS_REQUEST,
    GET_SHOPS_REQUEST_ERROR
} from '../action-types'

export const DEFAULT_STATE = {
    list: [],
    error: undefined,
    loading: undefined,
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case GET_SHOPS_REQUEST:
            return { ...state, loading: true }

        case GET_SHOPS_LOADED:
            const { list } = action
            return { ...state, list, loading: false }

        case GET_SHOPS_REQUEST_ERROR:
            const { error } = action
            return { ...state, error, loading: false }

        default:
            return state
    }
}
