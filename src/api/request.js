// 存放请求发送的方法
import sendaxios from './axios'
// 城市数据
let postList = function (callback) {
  sendaxios('post', 'jsopnctiy_queryAllcity.action').then((res) => {
    callback(res)
    // console.log('已经用回调函数callback')
  })
}
// 家政二级
let rightedList = function (callback) {
  sendaxios('post', 'jsopnpic_queryID.action?hid=1').then((res) => {
    callback(res)
    console.log('4已经用回调函数callback')
  })
}
// 顶部导航
let viewList = function (callback) {
  sendaxios('post', 'jsopngen_querySy.action', {
    bid: 6
  }).then((res) => {
    callback(res)
    // console.log('已经用回调函数callback')
  })
}
export {
  postList,
  viewList
  viewList}
