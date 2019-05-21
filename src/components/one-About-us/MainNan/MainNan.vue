<template>
  <header class="container clearfix mainnan-header">
    <div class="mainnan-logo">
      <router-link to="/">
        <img src="../../../static/images/index-logo.png" alt="">
      </router-link>
    </div>
    <ul class="mainnan container t-f-20 ">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/two">家政</router-link></li>
      <li><router-link to="/three">月嫂</router-link></li>
      <li><router-link to="/four">催乳师</router-link></li>
      <li><router-link to="/five">育儿嫂</router-link></li>
      <li><router-link to="/six">保姆</router-link></li>
      <li><router-link to="/seven">城市合伙</router-link></li>
      <li><router-link to="/eight">个人中心</router-link></li>
      <li><router-link to="/sixz">注册</router-link></li>
      <li><router-link to="/onminty">登录</router-link></li>
    </ul>
  </header>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
  @import "../../../static/css/commonality";
  .mainnan-header {
    height: 100px;
    position: relative;
    z-index: 9999;
  }
  .mainnan-logo {
    display: inline-block;
    position: absolute;
  }
  .mainnan {
    position: absolute;
    right: 0;
    min-width: 850px;
    top: 0px;
  }
  .mainnan li{
    float: left;
    padding: 39px 5px 5px;
    color: #000;
    border-top: 3px solid transparent;
    margin: 0 20px;
    overflow: hidden;
    display: inline-block;
    &:hover{
      color: red;
      border-top: 3px solid @colordeep;
    }
  }
  router-link {
    color: red;
  }
</style>
