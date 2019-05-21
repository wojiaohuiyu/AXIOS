<!--家政服务-->
<template>
<!--banner-->
  <div class="commeny">
    <!--走马灯-->
    <el-carousel height="480px">
      <el-carousel-item v-for="(item, index) in imglist" :key="index">
        <img :src="item" style="width: 100%;height: 100%; display: block;"/>
      </el-carousel-item>
    </el-carousel>
    <!--底部-->
    <section class="el-container is-vertical">
      <!--头部-->
      <header class="el-header">
        <dl>
          <a href="#">首页</a>/<span>家政服务</span>
        </dl>
      </header>
      <!--底部-->
      <section class="el-container">
        <!--左侧-->
      <aside class="el-aside">
        <div class="fixed" id="searchBar">
          <div class="ipoy">
            <div class="WeChat">
              <span><img src="./images/2.jpg"></span>
            </div>
            <div class="Hotline">
              <span><img src="./images/3.jpg"></span>
            </div>
          </div>
        </div>
      </aside>
        <!--右侧-->
      <div class="el-copy">
        <ul>
          <li class="list1 fl">
            <div class="bg">
              <i></i>
              <h6>
                <router-link to="/two/page">日常保洁</router-link>
              </h6>
              <a href="#"><p>
                钟点工/小时工/清洁护理</p></a>
              <a href="#" class="url uli"></a>
            </div>
          </li>
          <li class="list2 fr">
            <div class="bg">
              <i></i>
              <h6>
                <router-link to="/two/econmics">开荒保洁</router-link>
                </h6>
              <a href="#"><p>新居开荒  装修硬装结束第一次保洁</p></a>
              <a href="#" class="url uli"></a>
            </div>
          </li>
          <li class="list3 fl">
            <div class="bg">
              <i></i>
              <h6>
              <router-link to="/two/Division">大扫除</router-link>
              </h6>
              <a href="#"><p>
                清除顽洉  适用长期未住、未彻底清洁房屋</p></a>
              <a href="#" class="url uli"></a>
            </div>
          </li>
          <li class="list4 fr">
            <div class="bg">
              <i></i>
              <a href="#"><h6>家电清洗</h6></a>
              <a href="#"><p>全面清洗  去污防病菌</p></a>
              <a href="#" class="url uli"></a>
            </div>
          </li>
          <li class="list5 fl">
            <div class="bg">
              <i></i>
              <a href="#"><h6>擦玻璃</h6></a>
              <a href="#"><p>
                专业清洗，明亮窗外色</p></a>
              <a href="#" class="url uli"></a>
            </div>
          </li>
          <li class="list6 fr">
            <div class="bg">
              <i></i>
              <a href="#"><h6>搬家</h6></a>
              <a href="#"><p>优质服务  还您一个温馨的家</p></a>
              <a href="#" class="url uli"></a>
            </div>
          </li>
        </ul>
      </div>
      </section>
    </section>
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
      if(scrollTop <= 656){
        offsetTop = 656 - Number(scrollTop);
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
      imglist: [sursore1, sursore2, sursore3]
    }
  }
}
</script>
<style lang="less" scoped>
.fixed {
  position: fixed;
  top: 656px;/*开始处于距离顶部300px的位置，之后随着滚动条滚动top值改变，然后在top==100时停止*/
  left: 75px;
  box-sizing: border-box;
  z-index: 2;
  width: 230px;
}
.commeny{
  background-color: #F0F0F0;
  margin-bottom: 30px;
  padding-bottom: 100px;
}
.menu{
  max-width: 1200px;
  margin: 0 auto;
}
.el-header{
  background-color: white;
  width: 1200px;
  border-bottom: 15px solid #F0F0F0;
  padding:0;
}
.el-header dl{
  line-height: 60px;
  background: url(./images/11.gif) no-repeat 17px center;
  padding: 0px 20px 0px 40px;
}
.el-header dl a{
  font-size: 19px;
  padding: 0 10px 0 0;
  color: black;
}
.el-header dl span{
  font-size: 16px;
  padding: 0 10px;
}
.el-container{
  margin: 0 auto;
  width: 1200px;
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
.el-copy{
  width: 950px;
  background-color: #fff;
  float: right;
  position: relative;
  padding: 70px 0;
}
.el-copy ul {
  overflow: hidden;
  margin-left: 70px;
  margin-right: 80px;
}
.el-aside{
  width: 250px;
}
.list1{
  background: url("./images/4.png") no-repeat center;
}
.list2{
   background: url("./images/7.png") no-repeat center;
 }
.list3{
  background: url("./images/8.png") no-repeat center;
}
.list5{
   background: url("./images/9.png") no-repeat center;
 }
.list6{
    background: url("./images/10.png") no-repeat center;
  }
.el-copy li{
  width: 365px;
  padding-left: 35px;
  position: relative;
  &:hover{
    background-color: #f2f2f2;
  }
}
.bg{
  width: 315px;
  padding: 50px 20px 40px;
  position: relative;
  z-index: 100;
  overflow: hidden;
  white-space: nowrap;
}
.el-copy ul li i {
  display: block;
  width: 45px;
  height: 2px;
  background-color: #FF7124;
  margin-bottom: 10px;
}
.el-copy ul li h6 {
  color: #FF7124;
  font-size: 20px;
  margin-bottom: 10px;
}
.el-copy ul li p {
  color: #555;
  font-size: 16px;
  margin-bottom: 20px;
}
.url{
  background: url("./images/5.png");
  display: inline-block;
}
.uli{
  height: 41px;
  width: 41px;
  &:hover{
    background:url("./images/6.png");
  }
}
</style>
