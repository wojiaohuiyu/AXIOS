<!--月嫂详情-->
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
            <a href="#">家政服务</a>/<span>大扫除</span>
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
              <a href="#">
                <i>服务<br>价格</i>
              </a>
            </li>
            <li class="">
              <a href="#">
                <i>服务<br>标准</i>
              </a>
            </li>
            <li class="">
              <a href="#">
                <i>保洁师<br>风采</i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!--内容-->
      <div class="cleaned">
        <div class="cleared page">
          <div class="team repeat1">
            <div class="title">
              <span>服务范围<b></b></span>
            </div>
            <div class="infotxt">
              <ul class="dscfw">
                <li class="dscfwl">
                  <b><img src="./images/4.jpg"></b>
                  <span>清洗擦拭</span>
                  <em>Cleaning wipes</em>
                  <p>玻璃镜面干净透亮洁<br>瓷砖光亮洁净</p>
                </li>
                <li class="dscfwl">
                  <b><img src="./images/5.jpg" alt=""></b>
                  <span>除胶除漆</span>
                  <em>SPECIAL CLEANING</em>
                  <p>地面墙面去除痕迹<br>胶点漆点专项清理</p>
                </li>
                <li class="dscfwl">
                  <b><img src="./images/6.png" alt=""></b>
                  <span>重点清洁</span>
                  <em>VACUUM CLEANING</em>
                  <p>全面吸尘超倍洁净<br>家具家电死角除尘</p>
                </li>
              </ul>
              <div class="clear"></div>
            </div>
            <i class="bot_icon"></i>
          </div>
          <div class="team repeat2">
            <div class="title">
              <span>服务价格<b></b></span>
            </div>
            <div class="infotxt">
              <table class="dsc">
                <tbody>
                <tr class="orgin">
                  <th>套餐类型</th>
                  <th colspan="3">面积</th>
                  <th>价格</th>
                  <th colspan="2">套餐内容</th>
                  <th colspan="2">备注说明</th>
                </tr>
                <tr>
                  <th rowspan="6">大扫除A</th>
                  <th colspan="3">60m<sup>2</sup>以下</th>
                  <th>¥600 <!--2017.11.25改动之前是&yen;500--></th>
                  <th colspan="2" rowspan="6">去污保洁+擦玻璃+全屋消杀</th>
                  <th colspan="2" rowspan="6">不包含阳光房玻璃面积，<br>阳光房玻璃面积可以根据现场测量收费<br>200m<sup>2</sup>以上现场报价收费</th>
                </tr>
                <tr>
                  <th colspan="3">61m<sup>2</sup>-90m<sup>2</sup></th>
                  <th>¥780<!--2017.11.25改动之前是&yen;680--></th>

                </tr>
                </tbody>
              </table>
              <div class="clear"></div>
            </div>
            <i class="bot_icon"></i>
          </div>
          <div class="team repeat4">
            <div class="title"><span>服务标准<b></b></span></div>
            <div class="infotxt">
              <img src="./images/30.jpg">
              <div class="clear"></div>
            </div>
            <i class="bot_icon"></i>
          </div>
          <div class="team repeat5">
            <div class="title"><span>保洁师风采<b></b></span></div>
            <div class="infotxt">
              <ul class="ImgList">
                <li>
                  <em><a href="#">
                    <img src="./images/21.jpg">
                  </a></em>
                  <span><b>赵家群|</b> 安徽</span>
                  <i>46岁&nbsp;10年工作经验</i>
                </li>
                <li>
                  <em><a href="#">
                    <img src="./images/22.jpg">
                  </a></em>
                  <span><b>徐金梅||</b> 安徽</span>
                  <i>47岁&nbsp;7年工作经验</i>
                </li>
                <li>
                  <em><a href="#">
                    <img src="./images/23.jpg">
                  </a></em>
                  <span><b>汪宗梅||</b>陕西</span>
                  <i>39岁&nbsp;6年工作经验</i>
                </li>
                <li>
                  <em><a href="#">
                    <img src="./images/24.jpg">
                  </a></em>
                  <span><b>史桂兰||</b>扬州</span>
                  <i>56岁&nbsp;7年工作经验</i>
                </li>
              </ul>
              <div class="clear"></div>
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
export default {
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var offsetTop = document.querySelector('#searchBar').offsetTop;
      var offsetTop = document.querySelector('#fixer').offsetTop;
      if(scrollTop <= 631){
        offsetTop = 631 - Number(scrollTop);
        document.querySelector('#searchBar').style.top = offsetTop + 'px'
        document.querySelector('#fixer').style.top = offsetTop + 'px';
      }else{
        document.querySelector('#searchBar').style.top = '0px';
        document.querySelector('#fixer').style.top = '0px';
      }
    },
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  data () {
    return {
      imglist: [sursore1,sursore2,sursore3]
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
    top: 552px;
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
    padding: 0 20px 0 40px;
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
    background: #ffffff;
    position: relative;
  }
  .page .repeat1{
    padding: 41px 0 49px;
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
    padding: 75px 30px 38px;
    text-align: center;
  }
  .cleared .team .infotxt li {
    list-style: none;
    float: left;
    width: 216px;
    padding: 0 21px;
  }
  .cleared .team .infotxt li b{
    display: block;
  }
  .cleared .team .infotxt li b img{
    display: block;
    width: 174px;
    height: 174px;
  }
  .cleared .team .infotxt li span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
    color: #333333;
    padding: 10px 0 2px;
  }
  .cleared .team .infotxt li em {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: "Helvetica";
    font-style: normal;
    font-size: 14px;
    color: #333333;
    text-transform: uppercase;
  }
  .cleared .team .infotxt li p {
    color: #333333;
    font-size: 14px;
    line-height: 26px;
    height: 104px;
    overflow: hidden;
    margin: 15px 0 10px;
  }
  .dscfw{
    width: 650px;
    margin: 0 auto;
  }
  /*服务价格*/
  .page .repeat2 {
    padding: 41px 0 49px;
  }
  .page .repeat2 .dsc {
    border-collapse: collapse;
    border-spacing: 0;
    border-left: 1px solid #d2d2d2;
    border-top: 1px solid #d2d2d2;
    font-weight: 300;
    margin-bottom: 30px;
    width: 95%;
  }
  .page .repeat2 .dsc .orgin th{
    color: #E95513;
  }
  .page .repeat2 .dsc th {
    color: black;
    font-size: 14px;
    font-weight: 300;
  }
  .page .repeat2 .dsc th, td {
    border-right: 1px solid #d2d2d2;
    border-bottom: 1px solid #d2d2d2;
    padding: 5px 15px;
    font-weight: 300;
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
