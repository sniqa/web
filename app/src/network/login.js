import { request } from './index.js'

export function login(cfg) {
    return request({
        data: {login: cfg}
    })
}