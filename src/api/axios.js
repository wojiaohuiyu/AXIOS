// 再次封装ajax请求 使用promise再次封装
import {api} from './index'
import axios from 'axios'
// axios封装ajax请求
// params
// methods请求的类型
// url请求地址
// data发送的数据
function sendaxios(methods = 'post',url,data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      methods: methods,
      url: api + url,
      data: data
    }).then((res) => {
      // 表示请求成功
      if (res.status == 200) {
        resolve(res.data)
      } else {
        alert('请求失败')
      }
    }).catch((res) => {
      console.log('网络错误')
    })
  })
}
export default sendaxios
