<template>
  <div class="container">
    <div><el-row :gutter="20"></el-row></div>
    <!--轮播 个人信息-->
    <div class="user-to">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <div class="block">
              <el-carousel height="320px">
                <el-carousel-item v-for="(item, index) in imgjflist" :key="index">
                  <img :src="item">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="clearfix margin-t-50 margin-l-30">
              <div class="user-to-1-tx fl">
                <img class="personal-tx" src="../../../static/images/ga1.jpg" style="width: 150px" height="150px">
                <a class="修改头像"></a>
              </div>
              <div class="fl">
                <div class="t-f-18 f-weight-600">haidao123</div>
                <div class="red-ff t-f-12 margin-t-5 margin-b-5">欢迎回来</div>
                <div><span class="jfscicon jfscicon-rz margin-r-5 margin-t-5"></span><span class="t-f-14">注册用户</span></div>
                <div class="margin-t-5">
                  <el-progress :text-inside="true" :show-text="false" :stroke-width="12" :percentage="30" status="exception"></el-progress>
                </div>
                <div class="margin-t-5"><a class="btn cursor">签到</a></div>
              </div>
            </div>
            <div class="user-to-2 ">
              <div class="clearfix">
                <div class="fl jfscicon jfscicon-jf margin-t-5"></div>
                <div class="fl margin-b-5">
                  <div class="">我的积分: <span class="red-ff">0</span> 积分</div>
                  <div class="t-f-12 margin-t-5 hs-666">还差100积分，就可以升级为普通会员</div>
                </div>
              </div>
              <div class="user-to-2-2">
                <div class="clearfix ">
                  <div class="fl jfscicon jfscicon-yhj margin-t-20"></div>
                  <div class="fl">
                    <div class="">我的优惠卷:<span class="red-ff margin-l-10">0</span></div>
                    <div class="t-f-12 margin-t-5 hs-666">你还没有优惠卷，赶紧去兑换吧！</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!--Tab切换-->
    <div class="personal-3">
      <div class="container cpike-page-div4 ">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="个人详情" name="first">
            <div class="clearfix">
                <div class="fl">
                  <img class="personal-tx" src="../../../static/images/ga1.jpg" alt="">
                </div>
                <div class="personal-gr1 padding-l-20 fl">
                  <div >
                    <div class="t-f-18">个人信息</div>
                    <span class="width-200">
                      <span>姓名：</span>
                      <span>张三</span>
                    </span>
                    <span class=" width-200">
                      <span>性别：</span>
                      <span>男</span>
                    </span>
                    <span class="width-200">
                      <span>电话号码：</span>
                      <span>1558558877</span>
                    </span>
                  </div>
                  <div class="margin-t-20">
                    <div class="t-f-18">会员信息</div>
                    <span class="width-200">
                      <span>会员编号：</span>
                      <span>35433</span>
                    </span>
                    <span class="width-200">
                      <span>会员等级：</span>
                      <span>普通会员</span>
                    </span>
                  </div>
                  <div class="margin-t-20">
                      <div>我的积分</div>
                      <span class="width-200">
                          <span>积分:</span>
                          <span>0</span>
                      </span>
                      <span class="width-200">
                          <span>未充值</span>
                      </span>
                    <span class="width-200">
                          <span class="btn cursor">充值</span>
                      </span>
                  </div>
                </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="订单/预约" name="third">
            <div>2</div>
          </el-tab-pane>
          <el-tab-pane label="我的优惠券" name="second">
            <div>3</div>
          </el-tab-pane>
          <el-tab-pane label="家政服务" name="fourth2">
            <div>4</div>
          </el-tab-pane>
          <el-tab-pane label="充值系统" name="fourth">
            <div>5</div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
//  轮播图片
import cursorejf1 from '../../../static/images/nine-jz-tp3.jpg'
import cursorejf2 from '../../../static/images/nine-jz-tp4.jpg'
import cursorejf3 from '../../../static/images/nine-jz-tp.jpg'
export default {
  data () {
    return {
      imgjflist: [cursorejf1, cursorejf2, cursorejf3],
      activeName2: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="less">
  @import "../../../static/css/commonality";
  .user-to {
    width: 100%;
  }
  .user-to-1-tx {
    border-radius: 50px;
  }
  .user-to-2 {
    position: relative;
    top: 25px;
    padding: 0 75px;
  }
  .user-to-2 img{
    width: 50px;
    height: 50px;
  }
  .grid-content {
    width: 100%;
    margin-top: -2px;
  }
  .grid-content img{
    width: 100%;
    height: 100%;
  }
  .personal-3 {
    width: 100%;
    height: 500px;
    margin-right: 50px;
    color: #000;
  }
  .width-200{
    width: 200px;
    display: inline-block;
  }
  .personal-tx {
    width: 150px;
    height: 150px;
    border-right: 50%;
  }
  .cpike-page-div4 {
    position: relative;
    top: 30px;
  }
  .purchnav-main-ul2 li{
    width: 15%;
    border:1px solid #FF7F00;
    float: left;
    margin: 10px 0 0 25px;
    position: relative;
  }
  .purchnav-main-ul2 li img{
    width: 100%;
  }
  .personal-gr1 {
    border:1px solid goldenrod;
    width: 80%;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    color: white;
    background: #ff7e00;
  }
  .el-tabs__item {
    color: #ff7e00;
    border: 1px solid #ff7e00;
    margin: 0 15px;
    font-size: 15px;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item {
    border: 1px solid #ff7e00;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item:first-child {
    border-left: 1px solid;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    border-bottom-color: #ff7e00;
  }
  .el-tabs__nav is-top .el-tabs__item {
    font-size: 20px;
  }
  .el-tabs__item is-top is-active {
    font-size: 20px;
  }
</style>
