import { applyMiddleware, createStore, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

const middlewares = (dev = false) => {
    const list = dev
        ? [logger]
        : []

    return applyMiddleware(...list)
}

export const createProdStore = (reducer, state) =>
    createStore(reducer, state, compose(middlewares()))

export const createDevStore = (reducer, state) => {
    const withMonitor = [middlewares(true)]
    const withDevTools = composeWithDevTools(...withMonitor)

    return createStore(reducer, state, withDevTools)
}

export default (reducer, state = {}) => {
    const isDev = process.env.NODE_ENV === 'development'
        || process.env.REACT_APP_ENV_TYPE === 'dev'

    const create = isDev
        ? createDevStore
        : createProdStore

    const store = create(reducer, state)

    return store
}
