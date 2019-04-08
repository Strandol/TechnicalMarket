import { call, all, put, takeEvery } from 'redux-saga/effects'
import {
    GET_SHOPS_LOADED,
    GET_SHOPS_REQUEST,
    GET_SHOPS_REQUEST_ERROR,

    REGISTER_SHOP_ERROR,
    REGISTER_SHOP_REQUEST,
    REGISTER_SHOP_SUCCESS
} from '../action-types'
import { get, post } from '../../common/action';

export function* registerShopSaga(action) {
    try {
        const body = action.shop
        const isRegistered = yield call(post, '/shop', { body })
        yield put({ type: REGISTER_SHOP_SUCCESS, isRegistered })
    } catch (error) {
        yield put({ type: REGISTER_SHOP_ERROR, error })
    }
}

export function* loadShopsSaga() {
    try {
        const list = yield call(get, '/shop')
        yield put({ type: GET_SHOPS_LOADED, list })
    } catch (error) {
        yield put({ type: GET_SHOPS_REQUEST_ERROR, error })
    }
}

export default function* shopsSaga() {
    yield all([
        takeEvery(GET_SHOPS_REQUEST, loadShopsSaga),
        takeEvery(REGISTER_SHOP_REQUEST, registerShopSaga)
    ])
}
