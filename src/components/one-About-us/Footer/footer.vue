<template>
  <footer class="">
    <div class="container footer-t">
      <div class="footer-d text-align-c">
        <nav class="footer-d-nav clearfix">
          <a><router-link to="/">e家政首页</router-link></a>
          <em>|</em>
          <a><router-link to="/one/about">关于我们</router-link></a>
          <em>|</em>
          <a><router-link to="/one/about">服务承诺</router-link></a>
          <em>|</em>
          <a><router-link to="/one/about">安全保障</router-link></a>
          <em>|</em>
          <a><router-link to="/one/about">联系我们</router-link></a>
        </nav>
        <div class="footer-d-u margin-t-20">
          <li><span class="icon-f icon-f-class"></span></li>
          <li><span class="icon-f icon-f-class2"></span></li>
          <li><span class="icon-f icon-f-class3"></span></li>
        </div>
        <div class="margin-t-20">copyright © 2013-2016 www.51ejz.com All Rights Reserved. Support by chemguan.com</div>
        <div class="">版权所有：e家政隶属于江苏洁瑞达信息科技有限公司 备案号：苏ICP备16001034号-4 </div>
        <div class="w-space">e家政专注互联网家政平台,e家政提供日常保洁、开荒保洁、钟点工、御厨到家、搬家、甲醛检测治理、月嫂、催乳师、育儿嫂、保姆等家政服务,官方电话：400-666-4555/025-52375063
        </div>
      </div>
    </div>
    <div class="footer-fixe">
      <a href="#top" target="_self">
        <img src="../../../static/images/foot-fhtb.jpg" alt="">
      </a>
    </div>
    <div class="footer-tt padding-t-10"><img src="../../../static/images/one-21.gif" alt=""></div>
  </footer>
</template>
<script>
export default {}
</script>
<style>
  .footer-t {
    text-align: center;
    display: block;
    width: 100%;
    height: 200px;
  }
  .footer-d {
    width: 100%;
  }
  .footer-d-nav a{
    padding: 20px 10px 10px 10px;
  }
  .footer-d-nav em{
    color: #cbcbcb;
    padding: 0 24px;
    font-style: normal;
    line-height: 13px;
  }
  .footer-d-u {
    display: inline-block;
  }
  .footer-d-u li{
    float: left;
    margin: 0 5px;
  }
  .footer-tt{
    border-top:1px dashed #666;
  }
  .footer-fixe {
    position: fixed;
    right: 10px;
    top: 520px;
    z-index: 9999;
  }
  .footer-fixe img{
    width: 40px;
    height: 40px;
    border-radius: 60px;
  }
</style>
