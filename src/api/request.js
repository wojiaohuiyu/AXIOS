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
let indexList = function (callback) {
  sendaxios('post', 'jsopnhouse_query.action').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
// 首页我们的优势
let indaiList = function (callback) {
  sendaxios('post', 'jsopnadv_query.action').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
// 首页特色服务
let indexlList = function (callback) {
  sendaxios('post', 'jsopngen_queryTs.action').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
// 首页行业资讯
let indexhysj = function (callback) {
  sendaxios('post', 'jsopnart_query.action').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
// 月嫂
let viewysList = function (callback) {
  sendaxios('post', 'PI_yuesaoPage.action?general_id=3').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
// 月嫂内容
let yslrList = function (callback) {
  sendaxios('post', 'PI_yuesaoServe.action?yuesao_id=1').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
// 月嫂员工信息
let ysxxList = function (callback) {
  sendaxios('post', 'PI_yuesaoEmp.action?employee_gid=3').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
// 保姆
let bmList = function (callback) {
  sendaxios('post', 'frnanny_Navigation.action?general_id=6').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
// 保姆内容
let bmlrList = function (callback) {
  sendaxios('post', 'frnanny_Content.action?nanny_id=2').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
export {
  postList,
  viewList,
  indexList,
  indaiList,
  indexlList,
  indexhysj,
  viewysList,
  yslrList,
  ysxxList,
  bmList,
  bmlrList
}
