// 存放请求发送的方法
import sendaxios from './axios'
let postList = function (callback) {
  sendaxios('post', 'jsopnctiy_queryAllcity.action').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
let viewList = function (callback) {
  sendaxios('post', 'jsopngen_querySy.action', {
    bid: 6
  }).then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
// 首页banner
let bannerList = function (callback) {
  sendaxios('post', 'jsopnhouse_query.action').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
let indexList = function (callback) {
  sendaxios('post', 'jsopnhouse_query.action').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
// 我们的优势
let indaiList = function (callback) {
  sendaxios('post', 'jsopnadv_query.action').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
// 特色服务
let indexlList = function (callback) {
  sendaxios('post', 'jsopngen_queryTs.action').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
export {
  postList,
  viewList,
  bannerList,
  indexList,
  indaiList,
  indexlList
}
