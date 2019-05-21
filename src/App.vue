<template>
  <div id="app">
      <Topnav/>     <!--//导航-->
    <router-view></router-view>     <!--//挂载内容-->
      <Footer/>     <!--//底部-->
  </div>
</template>
<script>
import Topnav from './components/one-About-us/MainNan/MainNan.vue'// 导航
import Footer from './components/one-About-us/Footer/footer.vue'// 底部
export default {
  components: {
    Topnav,
    Footer
  }
}
</script>

<style>

</style>
