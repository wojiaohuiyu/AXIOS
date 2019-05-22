// 存放请求发送的方法
import sendaxios from './axios'
let postList = function (callback) {
  sendaxios('post', 'jsopnctiy_queryAllcity.action').then((res) => {
    callback(res)
    console.log('已经用回调函数callback')
  })
}
export {
  postList
}
