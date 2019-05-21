<!--月嫂-->
<template>
<div class="cotton">
  <!--走马灯-->
  <el-carousel height="480px">
    <el-carousel-item v-for="(item, index) in imglist" :key="index">
      <img :src="item" style="width: 100%;height: 100%; display: block;"/>
    </el-carousel-item>
  </el-carousel>
  <div class="container">
    <!--左侧-->
    <div class="caruser">
      <div class="fllor1">
        <ul>
          <li class="li1">
            <p>
              面试严格<br>系统培训 <br>标准化服务
            </p>
          </li>
          <li class="li2">
            <p>
              月嫂保险 <br>人身体检 <br>规范性工作
            </p>
          </li>
          <li class="li3">
            <p>
              持证上岗 <br>权威认证 <br>专业化保障
            </p>
          </li>
        </ul>
        <h6>带您了解月嫂</h6>
        <p>月嫂是母婴护理师的俗称，主要是专业护理产妇与新生儿，服务的内容以月子
          护理为主，新生儿的护理占80%，产妇的护理占20%。月嫂属于高级家政人员，不
          同于一般的家政护理员。</p>
      </div>
      <div class="fllor2">
        <div class="title1">
          <h2>服务介绍</h2>
          <i></i>
          <p>专业月嫂，呵护宝宝</p>
        </div>
        <ul class="contents">
          <li>
            <i>01</i>
            <h6>新生儿生活护理</h6>
            <p>指导正确哺乳 <br>喂养、呵护、洗澡 <br>穿衣、换洗尿布 <br>物品消毒</p>
          </li>
          <li>
            <i style="background-color: rgb(255, 115, 92);">02</i>
            <h6 style="color: rgb(255, 115, 92);">新生儿专业护理</h6>
            <p>婴儿洗澡、抚触 <br>按摩，大小便观察 <br>口腔、黄疸 <br>脐部护理等</p>
          </li>
          <li>
            <i>03</i>
            <h6>产妇生活护理</h6>
            <p>产妇营养餐制作 <br>营养膳食搭配 <br>协助产妇擦浴等</p>
          </li>
          <li>
            <i style="background-color: rgb(255, 115, 92);">04</i>
            <h6 style="color: rgb(255, 115, 92);">产妇专业护理</h6>
            <p>产褥期观察、护理 <br>产后恢复指导 <br>协助母乳喂养 <br>健康护理</p>
          </li>
          <li>
            <i>05</i>
            <h6>日常服务</h6>
            <p>为产妇及婴儿 <br>清洗衣物 <br>打扫母婴卧室卫生等</p>
          </li>
        </ul>
        <p>温馨提示：每月26天工作时间，如遇国家规定假日上班的，除正常工资外，加付正常工资的3倍计算</p>
      </div>
      <div class="fllor3">
        <div class="title1">
          <h2>服务价格</h2>
          <i></i>
          <p>价格透明，品质保证</p>
        </div>
        <ul class="content">
          <li>
            <b><img src="./imgaes/6.jpg" width="135" height="114"></b>
            <div>
              <b>8800/月</b>
              <h6>初级(一星)月嫂</h6>
              <p>资历：工作2年以上</p>
              <p>经验：有护理10个以上宝宝经验</p>
            </div>
          </li>
          <li>
            <b><img src="./imgaes/7.jpg" width="135" height="114"></b>
            <div>
              <b>9800/月</b>
              <h6>中级(二星)月嫂</h6>
              <p>资历：工作3年以上</p>
              <p>经验：有护理15个以上宝宝经验</p>
            </div>
          </li>
          <li>
            <b><img src="./imgaes/8.jpg" width="135" height="114"></b>
            <div>
              <b>10800/月</b>
              <h6>高级(三星)月嫂</h6>
              <p>资历：工作4年以上</p>
              <p>经验：有护理20个以上宝宝经验</p>
            </div>
          </li>
          <li>
            <b><img src="./imgaes/9.jpg" width="135" height="114"></b>
            <div>
              <b>11800/月</b>
              <h6>特级(四星)月嫂</h6>
              <p>资历：工作5年以上</p>
              <p>经验：有护理10个以上宝宝经验</p>
            </div>
          </li>
          <li>
            <b><img src="./imgaes/10.jpg" width="135" height="114"></b>
            <div>
              <b>13800/月</b>
              <h6>金牌(五星)月嫂</h6>
              <p>资历：工作5年以上</p>
              <p>经验：有护理30个以上宝宝经验</p>
            </div>
          </li>
          <li>
            <b><img src="./imgaes/11.jpg" width="135" height="114"></b>
            <div>
              <b>16800/月</b>
              <h6>金牌月嫂</h6>
              <p>资历：工作6年以上</p>
              <p>经验：有护理30个以上宝宝经验</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="fllor4">
        <div class="title1">
          <h2>服务流程</h2>
          <i></i>
          <p>快速预约，准时服务</p>
        </div>
        <div>
          <img src="./imgaes/12.jpg">
        </div>
      </div>
      <div class="fllor5">
        <div class="title1">
          <h2>月嫂风采</h2>
          <i></i>
          <p>服务标准化，专业化</p>
        </div>
        <ul>
          <li>
            <div class="pic1">
              <a href="#">
                <router-link to="/three/matron">
                  <img src="./imgaes/14.png" width="140" height="176">
                </router-link>
              </a>
            </div>
            <div class="content">
              <p>刘阿姨</p>
              <b>五星级月嫂</b>
              <p>51岁/江苏/9年月嫂经验</p>
              <hr>
              <p>刘姨性格温和随和，比较容易相处，她在宝宝喂养方面较有经验，善于观察宝宝的状态，判断哭闹原因。在照顾方面不正确的做法，她能给予意见和纠正，很感谢！</p>
            </div>
          </li>
          <li>
            <div class="pic2">
              <a href="#">
                <router-link to="/three/matron">
                  <img src="./imgaes/14.png" width="140" height="176">
                </router-link>
              </a>
            </div>
            <div class="content">
              <p>韩阿姨</p>
              <b>五星级月嫂</b>
              <p>42岁/江苏/7年月嫂经验</p>
              <hr>
              <p>在这26天里，韩姨很有责任心，专业的护理知识，工作热情，相处融洽，以后有朋友请月嫂我会推荐韩姨的，感谢韩姨的细心照顾！</p>
            </div>
          </li>
          <li>
            <div class="pic3">
              <a href="#">
                <router-link to="/three/matron">
                  <img src="./imgaes/14.png" width="140" height="176">
                </router-link>
                </a>
            </div>
            <div class="content">
              <p>朱阿姨</p>
              <b>五星级月嫂</b>
              <p>41岁/江苏/8年月嫂经验</p>
              <hr>
              <p>朱姐做事非常认真负责，对宝宝更是无微不至，我们非常放心，同时也从朱姐那里学习很多东西，现在宝宝非常健康聪明，感谢朱姐的付出和辛苦，祝她今后更加顺利！</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
   <!--右侧-->
    <aside class="el-aside">
      <div id="searchBar" class="fixed">
        <div class="ipoy">
          <div class="WeChat">
          <span>
            <img src="./imgaes/20.jpg">
          </span>
          </div>
          <div class="Hotline">
          <span>
          <img src="./imgaes/19.jpg">
          </span>
          </div>
        </div>
      </div>
    </aside>
  </div>
</div>
</template>
<script>
import sursore1 from './imgaes/17.jpg'
import sursore2 from './imgaes/18.jpg'
export default {
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var offsetTop = document.querySelector('#searchBar').offsetTop;
      if(scrollTop <= 600){
        offsetTop = 600 - Number(scrollTop);
        document.querySelector('#searchBar').style.top = offsetTop + 'px';
      }else{
        document.querySelector('#searchBar').style.top = '0px';
      }
    },
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  data () {
    return {
      imglist: [sursore1, sursore2]
    }
  },
}
</script>
<style lang="less" scoped>
.cotton{
  margin: 0px auto 20px;
  position: relative;
  width: 100%;
  overflow: hidden;
  zoom: 1;
  background-color: #F0F0F0;
}
.el-carousel{
  margin-bottom: 20px;
}
.container{
  width: 1200px;
  margin: auto;
  position: relative;
}
.caruser{
  float: left;
  width: 950px;
  position: relative;
}
/*开始fllor1*/
.fllor1{
  padding: 45px 13px;
  margin-bottom: 30px;
  background-color: #fff;
}
.caruser .fllor1 ul{
  margin-bottom: 50px;
  overflow: hidden;
}
.caruser .fllor1 ul li {
  width: 198px;
  height: 198px;
  float: left;
  margin: 0 55px;
  padding: 20px;
}
.caruser .fllor1 ul .li1 {
  background: url(./imgaes/1.jpg) no-repeat center;
}
.caruser .fllor1 ul .li2 {
  background: url(./imgaes/2.jpg) no-repeat center;
}
.caruser .fllor1 ul .li3 {
  background: url(./imgaes/3.jpg) no-repeat center;
}
.caruser .fllor1 > h6 {
  width: 200px;
  height: 35px;
  background-color: #E95513;
  color: #fff;
  text-align: center;
  line-height: 35px;
  font-size: 18px;
  margin: 0 auto 30px;
  font-weight: normal;
}
.caruser .fllor1 > p {
  text-align: center;
  width: 661px;
  margin: auto;
  font-size: 16px;
}
.caruser .fllor1 ul li p {
  background-color: #E95513;
  color: #fff;
  width: 160px;
  height: 160px;
  font-size: 16px;
  line-height: 25px;
  padding: 35px 35px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  display: none;
}
.caruser .fllor1 ul .li1:hover p{
  display: block;
}
.caruser .fllor1 ul .li2:hover p{
  display: block;
}
.caruser .fllor1 ul .li3:hover p{
  display: block;
}
/*开始fllor2*/
.fllor2{
  margin-bottom: 30px;
}
.caruser .fllor2 .title1 {
  margin-bottom: 15px;
  padding: 20px 0;
  background-color: #fff;
  text-align: center;
}
.title1 h2{
  color: #E95513;
  font-size: 24px;
  margin-bottom: 10px;
}
.title1 i{
  display: block;
  background: url("./imgaes/4.png") no-repeat center;
  width: 244px;
  height: 12px;
  margin: 0 auto 10px;
}
.title1 p{
  font-size: 18px;
  color: #666666;
}
.contents{
  margin-bottom: 15px;
  overflow: hidden;
}
.caruser .fllor2 .contents li:first-child {
  margin-left: 0;
  height: 291px;
}
.caruser .fllor2 .contents li i {
  font-family: MV Boli;
  font-size: 40px;
  font-style: normal;
  border-radius: 50%;
  display: block;
  width: 82px;
  height: 82px;
  line-height: 82px;
  color: #fff;
  margin: 0 auto 30px;
  background-color: rgb(85, 185, 255);
}
.caruser .fllor2 .contents li {
  margin-left: 15px;
  background-color: #fff;
  padding-top: 30px;
  width: 178px;
  float: left;
  text-align: center;
  height: 291px;
}
.caruser .fllor2 .contents li h6{
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: normal;
  color: rgb(3, 148, 243);
}
.caruser .fllor2 .contents li p{
  line-height: 22px;
  color: #999;
  font-size: 14px;
}
.caruser .fllor2 > p {
  font-size: 12px;
  color: #999;
  line-height: 30px;
  padding-left: 30px;
  background: #fff url(./imgaes/5.png) no-repeat 13px center;
}
/*开始fllor3*/
.caruser .fllor3 {
  background-color: #fff;
  margin-bottom: 30px;
}
.caruser .fllor3 .title1 {
  padding: 20px 0 35px;
  text-align: center;
}
.caruser .fllor3 .content {
  padding: 0 40px;
  overflow: hidden;
}
.caruser .fllor3 .content li {
  float: left;
  margin: 0 30px 15px;
  border: 1px solid #E0DFDF;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  padding: 10px;
  width: 375px;
}
.caruser .fllor3 .content li b {
  float: left;
  margin-top: 10px;
}
.caruser .fllor3 .content li b img{
  vertical-align: bottom;
}
.caruser .fllor3 .content li div {
  float: left;
  margin-left: 12px;
  width: 204px;
}
.caruser .fllor3 .content li div b{
  float: right;
  color: #E95513;
  font-size: 16px;
}
.caruser .fllor3 .content li div h6{
  font-size: 16px;
  margin: 20px 0 10px;
}
.caruser .fllor3 .content li div p{
  font-size: 12px;
  color: #666666;
  line-height: 20px;
}
/*开始fllor4*/
.caruser .fllor4 {
  background-color: #fff;
  margin-bottom: 30px;
  padding-bottom: 35px;
}
.caruser .fllor4 .title1 {
  padding: 20px 0 35px;
  text-align: center;
}
.caruser .fllor4 .title1 + div {
  text-align: center;
}
.caruser .fllor4 img {
  border: 0;
  max-width: 100%;
  vertical-align:middle;
}
/*开始fllor5*/
.caruser .fllor5 {
  background-color: #fff;
  margin-bottom: 30px;
  padding-bottom: 35px;
}
.caruser .fllor5 .title1 {
  padding: 20px 0 35px;
  text-align: center;
}
.caruser .fllor5 ul {
  overflow: hidden;
  margin: auto;
  width: 860px;
}
.caruser .fllor5 ul li:first-child {
  margin-left: 0;
}
.caruser .fllor5 ul li {
  float: left;
  padding-top: 100px;
  width: 270px;
  position: relative;
}
.caruser .fllor5 ul li .pic1{
   background-size: 100%;
   background-position: center;
   width: 140px;
   height: 176px;
   position: absolute;
   top: -8px;
   z-index: 50;
   left: 65px;
  background-image: url("./imgaes/13.png");
 }
.caruser .fllor5 ul li .pic2{
  background-size: 100%;
  background-position: center;
  width: 140px;
  height: 176px;
  position: absolute;
  top: -8px;
  z-index: 50;
  left: 65px;
  background-image: url("./imgaes/15.png");
}
.caruser .fllor5 ul li .pic3{
  background-size: 100%;
  background-position: center;
  width: 140px;
  height: 176px;
  position: absolute;
  top: -8px;
  z-index: 50;
  left: 65px;
  background-image: url("./imgaes/16.png");
}
.caruser .fllor5 ul li .content {
  border: 1px solid #E0DFDF;
  padding: 64px 10px 34px;
  text-align: center;
  background-color: #F5F5F5;
}
.caruser .fllor5 ul li .content p {
  color: #666;
}
.caruser .fllor5 ul li .content hr {
  border-style: dashed;
  color: #D0D0D0;
}
.caruser .fllor5 ul li .content b {
  color: #E95513;
  font-weight: normal;
}
.caruser .fllor5 ul li .content hr + p {
  font-size: 12px;
  width: 248px;
  height: 48px;
  overflow: hidden;
}
.caruser .fllor5 ul li {
  float: left;
  padding-top: 100px;
  width: 270px;
  margin-left: 25px;
  position: relative;
}
/*侧边*/
.fixed {
  position: fixed;
  top: 600px;
  right: 75px;
  box-sizing: border-box;
  z-index: 2;
  width: 230px;
  height: 800px;
}
.ipoy .WeChat {
  text-align: center;
  background-color: #fff;
}
.ipoy .WeChat span {
  display: block;
  padding: 33px 0 20px;
  border-bottom: 1px solid #eeeeee;
}
.WeChat img{
  max-width: 100%;
  vertical-align: middle;
}
.ipoy .Hotline {
  padding: 60px 0 80px;
  text-align: center;
  background: #FFFFFF;
}
</style>
