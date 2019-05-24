<template>
  <div class="container">
    <div class="text-align-c background-colorw margin-b-50">
        <div class="t-f-40 f-weight-600">特色服务</div>
        <div class="t-f-18 margin-t-20 t-f-24">专业 优质 贴心 温馨</div>
        <div class="disp-block margin-t-10"><img src="../../../../static/images/index-bg.png" alt=""></div>
        <ul class="margin-t-50 characteristic-ul">
            <li v-for="(item2, index) in lists" :key="index" class="shades">
              <img src="../../../../static/images/one-spe-serv1.png" alt="">
              <div class="t-f-20 margin-t-20">{{item2.gname}}</div>
            </li>
            <!--<li class="shades">-->
              <!--<img src="../../../../static/images/one-spe-serv2.png" alt="">-->
              <!--<div class="t-f-20 margin-t-20">保姆</div>-->
            <!--</li>-->
            <!--<li class="shades">-->
              <!--<img src="../../../../static/images/one-spe-serv3.png" alt="">-->
              <!--<div class="t-f-20 margin-t-20">育儿嫂</div>-->
            <!--</li>-->
            <!--<li class="shades">-->
              <!--<img src="../../../../static/images/one-spe-serv4.png" alt="">-->
              <!--<div class="t-f-20 margin-t-20">催乳师</div>-->
            <!--</li>-->
        </ul>
    </div>
    <div class="text-align-c background-colorw margin-t-50">
        <div class="t-f-40 f-weight-600">e家政视频</div>
        <div class="margin-t-20 t-f-24">让您随时随地了解e家政</div>
        <div class="disp-block margin-t-5">
          <img src="../../../../static/images/index-bg.png" alt="">
        </div>
        <ul class="characteristic-ul2 clearfix margin-t-50 disp-block w-space">
          <li class="">
            <img src="../../../../static/images/one-characteristic-tp1.png" alt=""><div class="characteristic-ul2-div1">
            <span class="icon-one-bf icon-one-bf1"></span>
          </div>
            <div class="t-f-22 sp-top">e家政企业宣传片</div>
          </li>
          <li class="margin-l-50">
            <img src="../../../../static/images/one-characteristic-tp2.jpg" alt="">
            <div class="characteristic-ul2-div1">
              <span class="icon-one-bf icon-one-bf1 "></span>
            </div>
            <div class="t-f-22 sp-top">厨艺培训-酸汤肥牛</div>
          </li>
          <li class="margin-l-50">
            <img src="../../../../static/images/one-characteristic-tp3.jpg" alt="">
            <div class="characteristic-ul2-div1">
              <span class="icon-one-bf icon-one-bf1"></span>
            </div>
            <div class="t-f-22 sp-top">e家政厨艺培训-松子玉米炒元宵</div>
          </li>
        </ul>
        <a class="btn characteristic-btn margin-t-50 margin-b-50">More</a>
    </div>
    <!--行业资讯-->
    <div class="margin-b-30 characteristic-eeeee">
        <div class="text-align-c">
          <div class="t-f-40 f-weight-600">行业资讯</div>
          <div class="margin-t-20 t-f-24">让您随时随地了解e家政</div>
          <div class="disp-block margin-t-5">
            <img src="../../../../static/images/index-bg.png" alt="">
          </div>
        </div>
        <ul class="characteristic-u3 clearfix margin-t-50">
            <li>
              <img class="wh" src="../../../../static/images/one-char-tp1.jpg" alt="">
              <div class="margin-t-20">
                <span class="t-f-22 margin-l-10 f-weight-600 fl">行业新闻</span>
                <span class="fr btn characteristic-btn-2 chara-ul-li-s">More</span>
              </div>
              <ul class="characteristic-u3-1 margin-t-50">
                <li>“贴心”保姆感动雇主</li>
                <li>保姆与雇主能否成为“一家人”</li>
                <li>应该如何和保姆融洽相处</li>
              </ul>
            </li>
            <li class="">
              <img class="wh" src="../../../../static/images/one-char-tp1.jpg" alt="">
              <div class="margin-t-20">
                <span class="t-f-22 margin-l-10 f-weight-600 fl ">行业新闻</span>
                <span class="fr btn characteristic-btn-2 chara-ul-li-s">More</span>
              </div>
              <ul class="characteristic-u3-1 margin-t-50">
                <li>“贴心”保姆感动雇主</li>
                <li>保姆与雇主能否成为“一家人”</li>
                <li>应该如何和保姆融洽相处</li>
              </ul>
            </li>
            <li>
              <img class="wh" src="../../../../static/images/one-char-tp1.jpg" alt="">
              <div class="margin-t-20">
                <span class="t-f-22 margin-l-10 f-weight-600 fl">行业新闻</span>
                <span class="fr btn characteristic-btn-2 chara-ul-li-s">More</span>
              </div>
              <ul class="characteristic-u3-1 margin-t-50">
                <li>“贴心”保姆感动雇主</li>
                <li>保姆与雇主能否成为“一家人”</li>
                <li>应该如何和保姆融洽相处</li>
              </ul>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import {indexlList} from 'api/request'
export default {
  data () {
    return {
      lists: []
    }
  },
  mounted () {

  }
}
</script>
<style lang="less" scoped>
  @import "../../../../static/css/commonality";
  .characteristic-ul{
    display: inline-block;
  }
  .characteristic-ul li{
    float: left;
    border-radius: 50%;
    margin: 0 62px;
  }
  .characteristic-ul li img{
    width: 128px;
    height: 128px;
  }
  .characteristic-ul2 {
    position: relative;
    width: 100%;
  }
  .characteristic-ul2 li{
    float: left;
  }
  .characteristic-ul2 li img{
    width: 350px;
    height: 200px;
    -webkit-transition: 0.4s all;
    -moz-transition: 0.4s all;
    -ms-transition: 0.4s all;
    -o-transition: 0.4s all;
    transition: 0.4s all;
    &:hover{
      box-shadow: 0px 0px 5px #A9A9A9;
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
    }
  }
  .characteristic-ul2-div1 {
    position: relative;
    top: -60px;
    width: 58px;
  }
  .characteristic-btn{
    font-size: 18px;
    color: #ffffff;
    background: #ff7225;
    width: 158px;
    height: 44px;
    line-height: 44px;
    border-radius: 20px;
  }
  /*家政视频内容top负距离*/
  .sp-top{
    margin-top: -30px;
  }
  .characteristic-u3 {
    display: flex;
  }
  .characteristic-u3>li{
    width: 32%;
    float: left;
    margin: 0px 53px 0px 0px;
    border:15px solid #f6f6f6;
    background: #f6f6f6;
    box-shadow: 0px 0px 5px #9A9A9A;
    -webkit-transition: 0.4s all;
    -moz-transition: 0.4s all;
    -ms-transition: 0.4s all;
    -o-transition: 0.4s all;
    transition: 0.4s all;
    &:hover{
      transform: translateY(-10px);
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
  }
  .characteristic-u3-1{
    width: 100%;
    margin-top: 60px;
  }
  .characteristic-u3-1 li{
      &:hover{
        color: #FF7124;
      }
  }
  .characteristic-btn-2{
    width: 66px;
    background: #ff7225 none repeat scroll 0 0;
    border-radius: 20px;
    color: #ffffff;
    cursor: pointer;
    display: block;
    font-size: 14px;
  }
  .chara-ul-li-s {
    position: relative;
    right: 17px;
  }
  .characteristic-eeeee {
    height: 750px;
  }
</style>
