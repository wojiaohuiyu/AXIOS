import Vue from 'vue'
// 路由
import Router from 'vue-router'
import one from '../components/one-About-us/index.vue'// 首页
import two from '../components/two-Child-parenting/index.vue'// 家政
import three from '../components/three-Contact-us/index.vue'// 月嫂
import four from '../components/four-home-economics/index.vue'// 催乳师
import five from '../components/five-home-page/index.vue'// 育儿嫂
import six from '../components/seven-Maternity-matron/index.vue'// 保姆
import seven from '../components/Eight-Nanny/index.vue'// 城市合伙
import eight from '../components/nine-Safety-guarantee/index.vue'// 个人中心
import Sixz from '../components/six-Lactation-Division/index.vue'// 预约
import onminty from '../components/onminty/index.vue'// 登录
// 首页子路由
import Sort from '../components/one-About-us/Child/Sort.vue'
import About from '../components/one-About-us/Child/About.vue'
// 惠宇 子路由
import Page from '../components/two-Child-parenting/four-home-economics/index.vue'
import Econmics from '../components/two-Child-parenting/five-home-page/index.vue'
import Matron from '../components/two-Child-parenting/seven-Maternity-matron/index.vue'
import Division from '../components/two-Child-parenting/six-Lactation-Division/index.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    components: {
      default: one
    }
  }, {
    path: '/two',
    components: {
      default: two
    }
  }, {
    path: '/three',
    components: {
      default: three
    }
  }, {
    path: '/four',
    components: {
      default: four
    }
  }, {
    path: '/five',
    components: {
      default: five
    }
  }, {
    path: '/six',
    components: {
      default: six
    }
  }, {
    path: '/seven',
    components: {
      default: seven
    }
  }, {
    path: '/eight',
    components: {
      default: eight
    }
  }, {
    path: '/sixz',
    components: {
      default: Sixz
    }
  }, {
    path: '/onminty',
    components: {
      default: onminty
    }
  },{
    path: '/one/sort',
    components: {
      default: Sort
    }
  }, {
    path: '/one/about',
    components: {
      default: About
    }
  }, {
    path: '/two/page',
    components: {
      default: Page
    }
  }, {
    path: '/two/econmics',
    components: {
      default: Econmics
    }
  }, {
    path: '/three/matron',
    components: {
      default: Matron
    }
  }, {
    path: '/two/Division',
    components: {
      default: Division
    }
  }]
})
