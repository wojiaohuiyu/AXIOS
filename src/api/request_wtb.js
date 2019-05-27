import sendaxios from './axios'

let Cuir = function (callback) {
  sendaxios('post', 'CUI_cuirushiServe.action', {'cuirushi_id': 2}).then((res) => {
    callback(res)
    // console.log('已经用回调函数callback')
  })
}
//  催乳师baner大图
let Cuirbaner = function (callback) {
  sendaxios('post', 'CUI_cuirushiPage.action', {'general_id': 4}).then((res) => {
    callback(res)
  })
}
export {
  paddList,
  Cuir,
  Cuirbaner
}
