// 存放请求发送的方法
import sendaxios from './axios'
// 城市数据
let postList = function (callback) {
  sendaxios('post', 'jsopnctiy_queryAllcity.action').then((res) => {
    callback(res)
    console.log('1已经用回调函数callback')
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
    console.log('2已经用回调函数callback')
  })
}
// 家政服务
let indexList = function (callback) {
  sendaxios('post', 'jsopnhouse_query.action').then((res) => {
    callback(res)
    console.log('6已经用回调函数callback')
  })
}
// 首页我们的优势
let indaiList = function (callback) {
  sendaxios('post', 'jsopnadv_query.action').then((res) => {
    callback(res)
    console.log('7已经用回调函数callback')
  })
}
// 首页特色服务
let indexlList = function (callback) {
  sendaxios('post', 'jsopngen_queryTs.action').then((res) => {
    callback(res)
    console.log('8已经用回调函数callback')
  })
}
// 首页行业资讯
let indexhysj = function (callback) {
  sendaxios('post', 'jsopnart_query.action').then((res) => {
    callback(res)
    console.log('9已经用回调函数callback')
  })
}
// 月嫂
let viewysList = function (callback) {
  sendaxios('post', 'PI_yuesaoPage.action?general_id=3').then((res) => {
    callback(res)
    console.log('10已经用回调函数callback')
  })
}
// 月嫂内容
let yslrList = function (callback) {
  sendaxios('post', 'PI_yuesaoServe.action?yuesao_id=1').then((res) => {
    callback(res)
    console.log('11已经用回调函数callback')
  })
}
// 月嫂员工信息
let ysxxList = function (callback) {
  sendaxios('post', 'PI_yuesaoEmp.action?employee_gid=3').then((res) => {
    callback(res)
    console.log('12已经用回调函数callback')
  })
}
// 保姆
let bmList = function (callback) {
  sendaxios('post', 'frnanny_Navigation.action?general_id=6').then((res) => {
    callback(res)
    console.log('13已经用回调函数callback')
  })
}
// 保姆内容
let bmlrList = function (callback) {
  sendaxios('post', 'frnanny_Content.action?nanny_id=2').then((res) => {
    callback(res)
    console.log('14已经用回调函数callback')
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
  bmlrList,
  rightedList
}
