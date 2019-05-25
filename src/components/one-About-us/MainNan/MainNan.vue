<template>
  <header class="container clearfix mainnan-header">
    <div class="mainnan-logo">
      <router-link to="/">
        <img src="../../../static/images/index-logo.png" alt="">
      </router-link>
    </div>
    <ul class="mainnan container t-f-20 ">
      <li v-for="(link, index) in lind" :key="index">
        <router-link :to="{path: linkData[link.gname], query: {bid: link.id}}">{{link.gname}}
        </router-link></li>
      <li><router-link to="/eight">个人中心</router-link></li>
      <li><router-link to="/sixz">注册</router-link></li>
      <li><router-link to="/onminty">登录</router-link></li>
    </ul>
  </header>
</template>
<script>
import {viewList} from 'api/request'
import {linkData} from 'api/index'
export default {
  data () {
    return {
      lind: [],
      linkData,
      banner: []
    }
  },
  mounted () {
    viewList((data) => {
      this.lind = data[0].data
//      this.lind = data[0].data
//      console.log(data)
    })
  }
}
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
  .mainnan li::after {
    border-right: @colordeep;
  }
  router-link {
    color: red;
  }
  .router-link-exact-active .router-link-active{
    color: black;
  }
  .router-link-active{
    color: @colordeep;
    padding: 37px 0px 0px 0;
  }
</style>
