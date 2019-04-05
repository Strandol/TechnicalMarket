import { all } from 'redux-saga/effects'

import shopsSaga from './shops/saga'

export default function* rootSaga() {
    yield all([
        shopsSaga()
    ])
}
