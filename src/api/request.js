// 存放请求发送的方法
import sendaxios from './axios'
// 城市数据
let postList = function (callback) {
  sendaxios('post', 'jsopnctiy_queryAllcity.action').then((res) => {
    callback(res)
    console.log('1已经用回调函数callback')
  })
}
// 顶部导航
let viewList = function (callback) {
  sendaxios('post', 'jsopngen_querySy.action', {
    bid: 6
  }).then((res) => {
    callback(res)
    console.log('2已经用回调函数callback')
  })
}
// 家政内容
let paddList = function (callback) {
  sendaxios('post', 'House_query.action').then((res) => {
    callback(res)
    console.log('3已经用回调函数callback')
  })
}
// 家政二级
let rightList = function (callback) {
  sendaxios('post', 'jsopnpic_queryID.action?hid=1').then((res) => {
    callback(res)
    console.log('4已经用回调函数callback')
  })
}
// 注册
let leftList = function (data, callback) {
  sendaxios('post', 'user_phonyzaction.action', data).then((res) => {
    callback(res)
    console.log('5已经用回调函数callback')
  })
}
export {
  postList,
  viewList,
  paddList,
  rightList,
  leftList
}
