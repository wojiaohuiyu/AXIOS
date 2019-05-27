// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import './static/css/commonality.less'// 公共样式
Vue.config.productionTip = false
Vue.use(ElementUi)
let vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
Vue.use(vm)
