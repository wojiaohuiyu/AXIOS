// 存放请求发送的方法
import sendaxios from './axios'
let postList = function (callback) {
  sendaxios('post', 'jsopnctiy_queryAllcity.action').then((res) => {
    callback(res)
    // console.log('已经用回调函数callback')
  })
}
let viewList = function (callback) {
  sendaxios('post', 'jsopngen_querySy.action', {
    bid: 6
  }).then((res) => {
    callback(res)
    // console.log('已经用回调函数callback')
  })
}

let indexList = function (callback) {
  sendaxios('post', 'jsopnhouse_query.action').then((res) => {
    callback(res)
    // console.log('已经用回调函数callback')
  })
}
// 我们的优势
let indaiList = function (callback) {
  sendaxios('post', 'jsopnadv_query.action').then((res) => {
    callback(res)
    // console.log('已经用回调函数callback')
  })
}
// 特色服务
let indexlList = function (callback) {
  sendaxios('post', 'jsopngen_queryTs.action').then((res) => {
    callback(res)
    // console.log('已经用回调函数callback')
  })
}
//  催乳师 lactagogue {'cuirushi.id': 2}
let Cuir = function (callback) {
  sendaxios('post', 'CUI_cuirushiServe.action', {'cuirushi.id': 1}).then((res) => {
    callback(res)
    // console.log('已经用回调函数callback')
  })
}
//  催乳师baner大图
let Cuirbaner = function (callback) {
  sendaxios('post', 'CUI_cuirushiPage.action', {'general.id': 4}).then((res) => {
    callback(res)
  })
}
// 育儿嫂
let Yuer = function (callback) {
  sendaxios('post', 'reyuersao_Navigation.action', {'general.id': 5}).then((res) => {
    callback(res)
  })
}
// 育儿嫂图片
let Yuerbaner = function (callback) {
  sendaxios('post', 'reyuersao_Content.action', {'yuersao.id': 1}).then((res) => {
    callback(res)
  })
}
export {
  postList,
  viewList,
  indexList,
  indaiList,
  indexlList,
  Cuir,
  Cuirbaner,
  Yuer,
  Yuerbaner
}
