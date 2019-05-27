<!--日常保洁-->
<template>
  <div class="oriflamme">
    <!--banner-->
    <el-carousel height="480px">
      <el-carousel-item v-for="(item, index) in imglist" :key="index">
        <img :src="item"/>
      </el-carousel-item>
    </el-carousel>
    <div class="Daily">
      <!--目录-->
      <div class="cleaning">
        <header class="header-clean">
          <dl>
            <a href="#">家政服务</a>/<span>日常保洁</span>
          </dl>
        </header>
      </div>
      <div class="MenuBox">
        <nav class="Menu LMenu" id="fixer">
          <ul>
            <li class="on">
              <a href="#">
                <i>服务<br>范围</i>
              </a>
            </li>
            <li class="">
              <a href="javascript:void(0)">
                <i>服务<br>价格</i>
              </a>
            </li>
            <li class="">
              <a href="javascript:void(0)">
                <i>参考<br>耗时</i>
              </a>
            </li>
            <li class="">
              <a href="javascript:void(0)">
                <i>服务<br>标准</i>
              </a>
            </li>
            <li class="">
              <a href="javascript:void(0)">
                <i>保洁师<br>风采</i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!--内容-->
      <div class="cleaned">
        <div class="cleared page">
          <div class="team repeat1" id="hy">
            <div class="infotxt">
              <ul class="leftd">
                <li>
                  <em><img :src="api + listsed"></em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--右侧-->
      <aside class="el-asider">
        <div id="searchBar" class="fixed">
          <div class="ipoy">
            <div class="WeChat">
          <span>
            <img src="./images/27.jpg">
          </span>
            </div>
            <div class="Hotline">
          <span>
          <img src="./images/26.jpg">
          </span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
<script>
import sursore1 from './images/1.jpg'
import sursore2 from './images/1.jpg'
import sursore3 from './images/1.jpg'
import {rightList} from 'api/request_hy'
import {api} from 'api/index'
export default {
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    rightList((img) => {
      this.listsed = img[0].img
      console.log(this.listsed)
    })
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var offsetTop = document.querySelector('#searchBar').offsetTop
      var offsetTop = document.querySelector('#fixer').offsetTop
      if (scrollTop <= 631) {
        offsetTop = 631 - Number(scrollTop)
        document.querySelector('#searchBar').style.top = offsetTop + 'px'
        document.querySelector('#fixer').style.top = offsetTop + 'px'
      } else {
        document.querySelector('#searchBar').style.top = '0px'
        document.querySelector('#fixer').style.top = '0px'
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  data () {
    return {
      imglist: [sursore1,sursore2,sursore3],
      listsed: [],
      api
    }
  }
}
</script>
<style lang="less" scoped>
/*左侧边*/
.MenuBox {
  width: 950px;
  position: relative;
}
.LMenu {
  left: -14px;
  position: fixed;
  top: 631px;
  z-index: 2;
  width: 75px;
  height: 405px;
}
.LMenu li.on a, .LMenu li a:hover {
  background: url(./images/28.png) no-repeat;
}
.LMenu li a {
  display: table;
  width: 75px;
  height: 75px;
  background: url(./images/28.png) no-repeat;
  line-height: 75px;
  text-align: center;
}
.LMenu li.on a i, .LMenu li a:hover i {
  color: #FFFFFF;
}
.LMenu li a i {
  font-style: normal;
  line-height: 17px;
  display: table-cell;
  color: #ff6b23;
  font-size: 14px;
  vertical-align: middle;
  text-align: center;
}
.LMenu li {
  list-style: none;
  width: 75px;
  height: 75px;
  margin-bottom: 6px;
}
.LMenu li a {
  display: table;
  width: 75px;
  height: 75px;
  background: url(./images/29.png) no-repeat;
  line-height: 75px;
  text-align: center;
}
/*走马灯*/
.clear {
  clear: both;
  height: 0px;
  overflow: hidden;
}
.oriflamme{
  background-color: #F0F0F0;
}
/*底部*/
.Daily{
  margin: 0 auto;
  width: 1200px;
  position: relative;
}
.cleaning{
  background-color: white;
  width: 1200px;
  border-bottom: 10px solid #F0F0F0;
}
.header-clean dl{
  line-height: 40px;
  padding: 0px 20px 0px 40px;
  background: url(./images/2.gif) no-repeat 17px center;
}
.header-clean dl a{
  font-size: 19px;
  padding: 0 10px 0 0;
  color: black;
}
.header-clean dl span {
  font-size: 16px;
  padding: 0 10px;
}
.cleaned{
 width: 950px;
 overflow: hidden;
}
.cleared{
  float: left;
  width: 950px;
  padding: 0 0 50px;
}
.cleared .team{
  margin-bottom: 30px;
  position: relative;
}
.page .repeat1{
  padding: 0 0 49px;
}
.page .repeat1 .infotxt {
  padding: 46px 41px 0 21px;
  height: 450px;
}
.cleared .team .title {
  height: 45px;
  background: url(./images/3.jpg) repeat-x left bottom;
  text-align: center;
}
.cleared .team .title span {
  color: #333333;
  font-size: 24px;
  display: inline-block;
  border: 1px solid #dadada;
  padding: 0 31px;
  height: 44px;
  line-height: 43px;
  position: relative;
  border-bottom: transparent;
}
.cleared .team .title span b {
  position: absolute;
  display: block;
  width: 28px;
  height: 22px;
  background: #ff6b23;
  left: -13px;
  top: 13px;
  z-index: 1;
}
.cleared .team .leftd{
  float: left;
  overflow: hidden;
  width: 950px;
}
.cleared .team .leftd li{
  list-style: none;
  float: left;
  width: 162px;
  text-align: center;
  margin-bottom: 32px;
}
.cleared .team .leftd li em{
display: block;
}
.cleared .team .leftd li span {
  display: block;
  line-height: 73px;
  color: #333333;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cleared .team .right img{
   width: 220px;
   height: 329px;
 }
.cleared .team .bot_icon {
  display: block;
  width: 43px;
  height: 38px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
  background: url(./images/13.jpg) no-repeat;
}
.cleared .team .infotxt {
  padding: 0 0 38px;
  text-align: center;
}
/*服务价格*/
.page .repeat2 {
  padding: 41px 0 49px;
}
.cleared .repeat2 .infotxt li {
  list-style: none;
  float: left;
  margin: 0 13px;
  width: 150px;
  height: 232px;
  border: 1px solid #f2f2f2;
  position: relative;
}
.cleared .repeat2 .infotxt li i {
  display: block;
  width: 75px;
  height: 75px;
  position: absolute;
  top: -38px;
  left: 35px;
  z-index: 1;
  -webkit-transition: transform 0.5s;
  &:hover {
  transform:rotate(180deg);
  }
}
.cleared .repeat2 .infotxt li i img {
  width: 75px;
  height: 75px;
}
.cleared .repeat2 .infotxt li h3 {
  color: #555555;
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  padding: 80px 0 0;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cleared .repeat2 .infotxt li p {
   line-height: 22px;
   color: #888888;
   font-size: 14px;
   margin: 0;
   display: block;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
 }
.cleared .repeat2 .infotxt li em {
  color: #555555;
  font-size: 16px;
  font-style: normal;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 15px 0;
}
.cleared .repeat2 .infotxt li em b {
  font-size: 26px;
}
.cleared .repeat2 .infotxt li span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cleared .repeat2 .infotxt li label {
  padding: 16px 12px;
  color: #888888;
  font-size: 14px;
  display: block;
  text-align: justify;
  word-wrap: break-word;
}
.Docy{
  padding-top: 10px;
  margin-right: 500px;
}
/*参考耗时*/
.page .repeat3{
  padding: 41px 0 49px;
}
.cleared .repeat3 .infotxt table {
  width: 100%;
  border: 1px solid #e1e1e1;
  width: 97%;
  margin: 24px auto 0;
}
.cleared .repeat3 .infotxt .td1 {
  background: #ff6b23;
  color: #FFFFFF;
}
.cleared .repeat3 .infotxt .td2 {
  background: #acacac;
  color: #FFFFFF;
}
.cleared .repeat3 .infotxt td {
  width: 16.6%;
  line-height: 58px;
  border: 1px solid #e1e1e1;
  border-width: 0 1px 1px 0;
  color: #555555;
  font-size: 16px;
}
/*服务标准*/
.cleared .repeat4 {
  padding: 41px 0 0;
}
.cleared .repeat4 .infotxt {
  padding: 40px 0 0;
  text-align: center;
}
/*保洁师风采*/
.cleared .repeat5 {
  padding: 41px 0 0;
}
.cleared .repeat5 .infotxt li {
  text-align: center;
  list-style: none;
  float: left;
  width: 221px;
  padding: 0 30px 10px;
  background: url(./images/25.jpg) no-repeat right 22px;
}
.cleared .repeat5 .infotxt em {
  display: block;
}
.cleared .repeat5 .infotxt em img {
  width: 161px;
  height: 194px;
}
.cleared .repeat5 .infotxt span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #666666;
  font-size: 16px;
  padding: 12px 0 7px;
}
.cleared .repeat5 .infotxt span b {
  color: #333333;
  font-size: 20px;
  font-weight: normal;
}
.cleared .repeat5 .infotxt i {
  display: block;
  color: #666666;
  font-size: 16px;
  font-style: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/*侧边*/
.fixed {
  position: fixed;
  top: 631px;
  right: 75px;
  box-sizing: border-box;
  z-index: 2;
  width: 240px;
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
