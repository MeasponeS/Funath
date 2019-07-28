import request from '../utils/request.js'

// 首页banner
export function banners(params) {
    return request({
        url: '/api/web/banners',
        method: 'get',
        params: params
    })
}

// 资讯年份集合
export function newYears(params) {
    return request({
        url: '/api/web/posts/years',
        method: 'get',
        params: params
    })
}
// 年份资讯集合
export function yearPosts(params) {
    return request({
        url: '/api/web/posts',
        method: 'get',
        params: params
    })
}
// 新闻资讯详情
export function postDetails(params,id) {
    return request({
        url: `/api/web/posts/${id}`,
        method: 'get',
        params: params
    })
}

// 案例类型
export function exampleTypes(params,id) {
    return request({
        url: '/api/web/project_cases/categories',
        method: 'get',
        params: params
    })
}
// 案例列表
export function exampleList(params) {
    return request({
        url: '/api/web/project_cases',
        method: 'get',
        params: params
    })
}
// 案例详情
export function exampleDetails(params,id) {
    return request({
        url: `/api/web/project_cases/${id}`,
        method: 'get',
        params: params
    })
}

// 产品
export function products(params) {
    return request({
        url: '/api/web/products/categories',
        method: 'get',
        params: params
    })
}
// 某一产品列表 category_id
export function productList(params) {
    return request({
        url: '/api/web/products',
        method: 'get',
        params: params
    })
}
// 产品详情
export function productDetails(params,id) {
    return request({
        url: `/api/web/products/${id}`,
        method: 'get',
        params: params
    })
}