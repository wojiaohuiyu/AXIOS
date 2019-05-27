import sendaxios from './axios'

// 家政内容
let paddList = function (callback) {
  sendaxios('post', 'House_query.action').then((res) => {
    callback(res)
    console.log('3已经用回调函数callback')
  })
}
export {
  paddList
}
