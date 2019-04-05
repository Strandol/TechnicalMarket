import { call, all, put, takeEvery } from 'redux-saga/effects'
import {
    GET_SHOPS_LOADED,
    GET_SHOPS_REQUEST,
    GET_SHOPS_REQUEST_ERROR
} from '../action-types'
import { get } from '../../common/action';

export function* loadShopsSaga() {
    try {
        const shops = yield call(get, '/shops')
        yield put({ type: GET_SHOPS_LOADED, shops })
    } catch (error) {
        yield put({ type: GET_SHOPS_REQUEST_ERROR, error })
    }
}

export default function* shopsSaga() {
    yield all([
        takeEvery(GET_SHOPS_REQUEST, loadShopsSaga)
    ])
}
