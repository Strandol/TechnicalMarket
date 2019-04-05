import { select, call } from 'redux-saga/effects'
import is from 'is_js'

import { isDev } from "./utils";

export const getServerPath = () => (isDev() ? 'http://localhost/TechnicalMarket' : process.env.PUBLIC_URL);

export const API_URL = '/api';

const createHeaders = (Token = '123', { isUpload }) => {
    const headers = new Headers({
        'Token': Token,
        'Accept': 'application/json'
    })
    if (!isUpload) headers.append('Content-Type', 'application/json')
    return headers
}

export const getUrl = url => getServerPath() + `${API_URL}${url}`;

export const getMethod = ({ method }) => is.string(method)
    ? method
    : 'GET'

export const getBody = ({ body, isUpload }) => {
    if (isUpload) return body

    if (!is.undefined(body) && !is.null(body)) return JSON.stringify(body)
}

export function fetchAPI (url, params, token) {
    const body = getBody(params)
    const headers = createHeaders(token, params)
    const credentials = 'include'

    const p = {...params, credentials, headers, body }
    const apiUrl = getUrl(url)

    return window.fetch(apiUrl, p)
        .then(response => {
            if (!response.ok) throw response
            return response.json()
        })
}

export function* fetchWrapper(url, params = {}) {
    const token = yield select(() => '123')
    const result = yield call(fetchAPI, url, params, token)
    return result
}

export function* get(url, params) {
    const result = yield call(fetchWrapper, url, {...params, method: 'GET'})
    return result
}

export function* post(url, params) {
    const result = yield call(fetchWrapper, url, {...params, method: 'POST'})
    return result
}

export function* put(url, params) {
    const result = yield call(fetchWrapper, url, {...params, method: 'PUT'})
    return result
}

export function* del(url, params) {
    const result = yield call(fetchWrapper, url, {...params, method: 'DELETE'})
    return result
}
