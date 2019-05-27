import sendaxios from './axios'

// 登录
let beefList = function (data, callback) {
  sendaxios('post', 'user_userLogin.action', data).then((res) => {
    callback(res)
    console.log('7已经用回调函数callback')
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
// 家政服务
let indexList = function (callback) {
  sendaxios('post', 'jsopnhouse_query.action').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
export {
  paddList,
  rightList,
  leftList,
  indexList,
  beefList
}
