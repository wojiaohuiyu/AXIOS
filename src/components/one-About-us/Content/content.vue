<template>
  <div>
    <div class="background-colorw content-t">
      <div>
        <img  src="../../../static/images/content-tp1.jpg" class="content-t-td" alt="">
      </div>
      <div class="mainnan-dq">
        <div>
          <img src="../../../static/images/one-bj.png" alt="">
          <span class="mainnan-dq-sz">苏州市</span>
        </div>
        <div class="mainnan-dq-s">
          <p>请选择城市</p>
          <ul class="mainnan-dq-s-ul">
            <li v-for="(item,index) in list_city" :key="index"><a>{{item.cname}}</a></li>
          </ul>
        </div>
      </div>
      <div class="content-t-d">
        <img src="../../../static/images/index-erweima.jpg" alt="">
      </div>
    </div>
    <div class="background-colorw container positop clearfix">
      <div class="text-align-c t-f-40 f-weight-600">家政服务</div>
      <div class="text-align-c t-f-24 margin-t-20">全方位的服务 让您生活无忧</div>
      <div class="container-3 margin-t-10"><img src="../../../static/images/index-bg.png" alt=""></div>
      <ul class="container-ul4 margin-t-30 clearfix">
          <li class="shades" v-for="(ite, i) in jzfwlist" :key="i">
              <i class="container-ul4-i"></i>
              <div class="t-f-20 hsff-7124">{{ite.hname}}</div>
              <div class="t-f-16 margin-t-5">{{ite.hdescribe}}</div>
              <div>
                <span class="icon-c-v icon-c-v1 margin-t-5 cursor"></span>
              </div>
          </li>
      </ul>
    </div>
    <!--我们的优势-->
    <div class="background-colorw container text-align-c">
        <div class="t-f-40 f-weight-600">我们的优势</div>
        <div class="margin-t-20 t-f-24">实名认证 专业培训 家政保险 装备规范 价格透明 评价反馈</div>
        <div class="container-3 margin-t-10"><img src="../../../static/images/index-bg.png" alt=""></div>
        <ul class="container-ul5 margin-t-50 clearfix">
            <li v-for="(list, ia) in list" :key="ia" class="container-ul5-li1 text-align-c">
              <div>
                <img :src="api+list.address" alt="">
              </div>
              <div class="container-ul5-li1-d1">
                <div class="disp-block">
                  <img src="../../../static/images/one-3-1-1.png" alt="">
                </div>
                <div class="margin-t-10 t-f-26">{{list.title}}</div>
                <div class="hs-666">{{list.englishtitle}}</div>
                <div class="hsff-7124 margin-t-10 border-top-1-w padding-t-10">
                  {{list.describe}}
                </div>
                <div class="container-ul5-li1-d2">
                  <img src="../../../static/images/one-3-1-2.png" alt="">
                </div>
              </div>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import {api} from 'api/index'
import {postList} from 'api/request'
import {indexList, indaiList, viewysList} from 'api/ctx'
export default {
  data () {
    return {
      list_city: [],
      jzfwlist: [],
      list: [],
      banner: [],
      lind:[],
      api
    }
  },
  mounted () {
    postList((data) => {
      this.list_city = data[0].data
    })
    indexList((data) => {
      this.jzfwlist = data[0].data
    })
    indaiList((data) => {
      this.list = data.data
    })
    viewysList((data) => {
      this.lind = data.data
      console.log(data)
    })
  }
}
</script>
<style lang="less" scoped>
  @import "../../../static/css/commonality";
  /*改变家政服务的高度*/
  .positop{
    margin-top: -70px;
  }
  .border-top-1-w {
    border-top: 2px dashed white;
  }
  .content-t{
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 650px;
    background-size: 100%;
    margin-bottom: 100px;
  }
  .content-t-td {
    position: relative;
    width: 100%;
    top: -100px;
    left: 0px;
  }
  .content-t-d{
    width: 300px;
    position: absolute;
    top: 220px;
    margin-left: 250px;
    border: 1px solid white;
    padding: 10px 5px 10px 0;
    z-index: 9999;
  }
  .container-3 {
    display: block;
    text-align: center;
  }
  .container-ul4 {
    height: 200px;
  }
  .container-ul4 li{
    float: left;
    width: 200px;
    height: 140px;
    padding: 0 0 0 30px;
    margin: 0 20px;
    background: url("~im/home-working-bg1.png") no-repeat center;
    box-shadow: 0px 0px 5px #A9A9A9;
    -webkit-transition: 0.4s all;
    -moz-transition: 0.4s all;
    -ms-transition: 0.4s all;
    -o-transition: 0.4s all;
    transition: 0.4s all;
    &:hover{
      transform: translateX(10px);
      -webkit-transform: translateX(10px);
      -moz-transform: translateX(10px);
      -ms-transform: translateX(10px);
      -o-transform: translateX(10px);
    }
  }
  .container-ul4-i{
    display: block;
    width: 45px;
    height: 2px;
    background-color: #FF7124;
    margin-bottom: 10px;
  }
  .container-ul5 {
    height: 300px;
    overflow: hidden;
  }
  /*.container-ul5-li1{*/
    /*background: url("../../../static/images/one-3-1.jpg");*/
  /*}*/
  /*.container-ul5-li2 {*/
    /*background: url("../../../static/images/one-3-2.jpg") no-repeat;*/
  /*}*/
  .container-ul5 li{
    float: left;
    width: 244px;
    height: 300px;
    overflow: hidden;
    margin: 0 22px;
    .container-ul5-li1-d1 {
      position: relative;
      top: -668px;
      height: 330px;

      .container-ul5-li1-d2 {
        width: 100%;
        position: relative;
        right: -105px;
        bottom: -72px;
      }
    }
    &:hover{
      .container-ul5-li1-d1{
        top: -343px;
        transition: all 1s;
        background: rgba(235, 234, 234, 0.7);
        height: 100%;
      }
    }
  }
  .mainnan-dq {
    position: absolute;
    top: 0px;
    left: 100px;
  }
  .mainnan-dq img{
    width: 20px;
    height: 20px;
  }
  .mainnan-dq {
    width: 100px;
    height: 50px;
    .mainnan-dq-s{
      display: none;
    }
    &:hover {
      .mainnan-dq-s {
        animation: all 2s;
        display: block;
      }
    }
  }
  .mainnan-dq-s {
    margin-left: 70px;
    width: 360px;
    background: white;
    padding: 10px 10px;
  }
  .mainnan-dq-s-ul {
    width: 350px;
    height: 100px;
    background: white;
  }
  .mainnan-dq-s-ul li{
    float: left;
    margin: 5px 5px 0 11px;
    width: 20%;
  }
</style>
