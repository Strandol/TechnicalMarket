import { applyMiddleware, createStore, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = (dev = false) => {
    const list = dev
        ? [sagaMiddleware, logger]
        : [sagaMiddleware]

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

    sagaMiddleware.run(rootSaga)

    return store
}
