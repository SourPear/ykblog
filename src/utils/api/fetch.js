import request from "./request";

export function getBlogList() {
  return request({
    method: "post",
    url: '/getBlogList'
  })
}

export function createBlog(params) {
  return request({
    method: 'post',
    url: '/createBlog',
    data: params,
  })
}

export function sendCode(params) {
  return request({
    method: 'post',
    url: '/sendCode',
    data: params,
  })
}

export function phoneLogin(params) {
  return request({
    method: 'post',
    url: '/phoneLogin',
    data: params
  })
}

export function submit(params) {
  return request({
    method: 'POST',
    url: '/submit',
    data: params
  })
}