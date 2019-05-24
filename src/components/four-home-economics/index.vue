<template>
  <div class="bodycol">
    <div class="banner-four">
    <!--<img src="~im/cuiru-banner.jpg">-->
    <img :src="api+listbaner">
    </div>
      <div class="question background-colorwhite margin-b-60 colordeep">
        <h3 class="f-weight-700">您是否对催乳师感到疑惑？</h3>
        <p>{{listconent[3].ppriority}}</p>
        <span class="ban-ic"></span>
      </div>
    <div class="container clearfix">
    <el-row :gutter="20" class="margin-t-40">
      <el-col class="margin-b-50 background-colorw" :span="18"><div class="grid-content bg-purple">
        <img :src="api+listimg">
        <div class="content-box">
          <h2 class="text-align-c hr">
            <span>服务内容</span>
          </h2>
        </div>
        <!--element切换-->
        <el-tabs v-model="activeName">
          <el-tab-pane label="母乳哺育" name="first">
            <ul class="clearfix" name="nav" data-herf='1'>
              <li class="one">
                <div class="ul-boxContent">
                  <b>01</b>
                  <p>开奶</p>
                  <span >催乳师通过专业知识和技能帮助产妇建立泌乳反射的过程。</span>
                  <i></i>
                  <em></em>
                  <div class="border-bot"></div>
                </div>
              </li>
              <li class="one">
                <div class="ul-boxContent">
                  <b>01</b>
                  <p>开奶</p>
                  <span >催乳师通过专业知识和技能帮助产妇建立泌乳反射的过程。</span>
                  <i></i>
                  <em></em>
                  <div class="border-bot"></div>
                </div>
              </li>
              <li class="one">
                <div class="ul-boxContent">
                  <b>01</b>
                  <p>开奶</p>
                  <span >催乳师通过专业知识和技能帮助产妇建立泌乳反射的过程。</span>
                  <i></i>
                  <em></em>
                  <div class="border-bot"></div>
                </div>
              </li>
              <li class="one">
                <div class="ul-boxContent">
                  <b>01</b>
                  <p>开奶</p>
                  <span >催乳师通过专业知识和技能帮助产妇建立泌乳反射的过程。</span>
                  <i></i>
                  <em></em>
                  <div class="border-bot"></div>
                </div>
              </li>
              <li class="one">
                <div class="ul-boxContent">
                  <b>01</b>
                  <p>开奶</p>
                  <span >催乳师通过专业知识和技能帮助产妇建立泌乳反射的过程。</span>
                  <i></i>
                  <em></em>
                  <div class="border-bot"></div>
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="乳腺护理" name="second">
            <!--影藏-->
            <ul class="clearfix ul-two" name="nav" data-herf='2'>
              <li class="one">
                <div class="ul-boxContent">
                  <b>01</b>
                  <p>科学无痛回奶</p>
                  <span >通过催乳师无痛回奶手法和饮食指导使婴儿断奶后让乳房不再分泌乳汁，使乳房更加健康。</span>
                  <i></i>
                  <em></em>
                  <div class="border-bot"></div>
                </div>
              </li>
              <li class="one">
                <div class="ul-boxContent">
                  <b>02</b>
                  <p>哺乳期乳腺养护</p>
                  <span >通过催乳师无痛回奶手法和饮食指导使婴儿断奶后让乳房不再分泌乳汁，使乳房更加健康。</span>
                  <i></i>
                  <em></em>
                  <div class="border-bot"></div>
                </div>
              </li>
              <li class="one">
                <div class="ul-boxContent">
                  <b>03</b>
                  <p>哺乳期小叶增生调理</p>
                  <span >通过催乳师相应的手法操作及哺乳科学知识指导最大限度的解决哺乳期小叶增生问题。。</span>
                  <i></i>
                  <em></em>
                  <div class="border-bot"></div>
                </div>
              </li>
              <li class="one">
                <div class="ul-boxContent">
                  <b>04</b>
                  <p>开奶</p>
                  <span >催乳师通过专业知识和技能帮助产妇建立泌乳反射的过程。</span>
                  <i></i>
                  <em></em>
                  <div class="border-bot"></div>
                </div>
              </li>
              <li class="one">
                <div class="ul-boxContent">
                  <b>05</b>
                  <p>开奶</p>
                  <span >催乳师通过专业知识和技能帮助产妇建立泌乳反射的过程。</span>
                  <i></i>
                  <em></em>
                  <div class="border-bot"></div>
                </div>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div></el-col>
      <!--侧边导航-->
      <el-col :span="5"><div class="grid-content bg-purple">
        <Cebiian></Cebiian>
      </div></el-col>
      <el-col class="background-colorw" :span="18"><div class="grid-content bg-purple margin-b-50">
        <div class="content-box">
          <h2 class="text-align-c hr">
            <span>服务价格</span>
          </h2>
        </div>
            <table class="table" cellpadding="0" cellspacing="0">
              <table class="table" cellpadding="0" cellspacing="0">
                <tr class="colordeep tr-hrd text-align-c">
                  <td class="trs trbor"></td>
                  <td>类型</td>
                  <td>价格</td>
                  <td>套餐</td>
                  <td class="trw">赠送项目</td>
                </tr>
              </table>
              <table class="table">
                <tr class="colordeep text-align-c">
                  <td class="trs trbor">催乳</td>
                  <td class="trts">单次</td>
                  <td class="rd_bg">600元/次</td>
                  <td class="trs">1200元/3次<br>1500元/5次</td>
                  <td class="trw rd_bg"></td>
                </tr>
                <tr class="colordeep text-align-c">
                  <td class="trs trbor">开奶</td>
                  <td>单次</td>
                  <td class="rd_bg">600元/次</td>
                  <td class="trs">1200元/3次
                    <br>1500元/5次</td>
                  <td class="trw rd_bg"></td>
                </tr>
                <tr class="colordeep text-align-c">
                  <td class="trs trbor">少奶</td>
                  <td>套餐</td>
                  <td class="rd_bg"><p>第一疗程</p><p>第一疗程</p><p>第一疗程</p></td>
                  <td class="trs"><p>1200元/3次</p><p>1200元/3次</p><p>1200元/3次</p></td>
                  <td class="trw rd_bg">
                  <div>做满两个疗程：减100并赠送乳腺养护1次</div>
                  <div>做满三个疗程：减200并赠送乳腺养护1次</div>
                </td>
                </tr>
                <tr class="colordeep text-align-c">
                  <td rowspan="2" class="trs trbor">乳房肿胀</td>
                  <td>类型</td>
                  <td class="rd_bg">价格</td>
                  <td class="trs">1200元/3次<br>1500元/5次</td>
                  <td class="trw rd_bg"></td>
                </tr>
                <tr class="colordeep text-align-c">
                  <td>类型</td>
                  <td class="rd_bg">价格</td>
                  <td class="trs">1200元/3次<br>1500元/5次</td>
                  <td class="trw rd_bg">
                    <p>做满两个疗程：减100并赠送乳腺养护1次</p>
                  </td>
                </tr>
                <tr class="colordeep text-align-c">
                  <td rowspan="2" class="trs trbor">乳房肿胀</td>
                  <td>类型</td>
                  <td class="rd_bg">价格</td>
                  <td class="trs">1200元/3次<br>1500元/5次</td>
                  <td class="trw rd_bg"></td>
                </tr>
                <tr class="colordeep text-align-c">
                  <td>类型</td>
                  <td class="rd_bg">价格</td>
                  <td class="trs">1200元/3次<br>1500元/5次</td>
                  <td class="trw rd_bg">
                    <p>做满两个疗程：减100并赠送乳腺养护1次</p>
                  </td>
                </tr>
                <!--多格-->
                <tr class="colordeep text-align-c">
                  <td class="trs trbor">哺乳期乳腺养护<hr>哺乳期小叶增生<br>调理<hr>哺乳期乳房外形<br>调整<hr>深度乳腺管疏通</td>
                  <td class="trts">单次</td>
                  <td class="rd_bg">600元/次</td>
                  <td class="trs">1200元/3次<br>1500元/5次</td>
                  <td class="trw rd_bg"></td>
                </tr>
                <tr class="colordeep text-align-c">
                  <td class="trss trbor">催乳</td>
                  <td class="trts">单次</td>
                  <td class="rd_bg">600元/次</td>
                  <td class="trs">1200元/3次<br>1500元/5次</td>
                  <td class="trw rd_bg"></td>
                </tr>
              </table>
            </table>
    </div></el-col>
      <el-col class="margin-t-40 background-colorw" :span="18"><div class="grid-content bg-purple margin-b-50">
        <div class="content-box">
          <h2 class="text-align-c hr">
            <span>服务价格</span>
          </h2>
        </div>
        <ul class="clearfix main-content">
          <li class="li1">
            <a href="javascript:void(0)"></a>
            <p>在线预约</p>
          </li>
          <li class="li1">
            <a href="javascript:void(0)"></a>
            <p>体验服务</p>
          </li>
          <li class="li1">
            <a href="javascript:void(0)"></a>
            <p>定制套餐</p>
          </li>
          <li class="li1">
            <a href="javascript:void(0)"></a>
            <p>平台派单</p>
          </li>
          <li class="li1">
            <a href="javascript:void(0)"></a>
            <p>完成服务</p>
          </li>
          <li class="li1">
            <a href="javascript:void(0)"></a>
            <p>客户回访</p>
          </li>
        </ul>
      </div></el-col>
      <!--底部-->
      <el-col class="margin-b-30 margin-t-40 background-colorw" :span="18"><div class="grid-content bg-purple">
        <div class="content-box">
          <h2 class="text-align-c hr">
            <span>催乳师风采</span>
          </h2>
        </div>
        <ul class="main-bm">
          <li>
            <span class="main-hrds">
              <p>吴老师38岁 <img src="~im/rcbj-list-star.png"><img src="~im/rcbj-list-star.png"><img src="~im/rcbj-list-star.png"><img src="~im/rcbj-list-star.png"><img src="~im/rcbj-list-star.png"></p>
              <p class="margin-t-10">7年工作经验</p>
              <p>
                可以上岗    已上保险</p>
            </span>
            <p class="pic-span">
              <a class="ic-box" href="javascript:;">
                <router-link to="/three/matron">
                  <img src="~im/pic(1).png">
                </router-link>
              </a>
              <a class="yuyue" href="javascript:;">
                立即预约
              </a>
            </p>
          </li>
          <li>
            <span class="main-hrds">
              <p>吴老师38岁 <img src="~im/rcbj-list-star.png"><img src="~im/rcbj-list-star.png"><img src="~im/rcbj-list-star.png"><img src="~im/rcbj-list-star.png"><img src="~im/rcbj-list-star.png"></p>
              <p class="margin-t-10">7年工作经验</p>
              <p>
                可以上岗    已上保险</p>
            </span>
            <p class="pic-span">
              <a class="ic-box" href="javascript:;">
                <router-link to="/three/matron">
                  <img src="~im/pic(1).png">
                </router-link>
              </a>
              <a class="yuyue" href="javascript:;">
                立即预约
              </a>
            </p>
          </li>
          <li>
            <span class="main-hrds">
              <p>吴老师38岁 <img src="~im/rcbj-list-star.png"><img src="~im/rcbj-list-star.png"><img src="~im/rcbj-list-star.png"><img src="~im/rcbj-list-star.png"><img src="~im/rcbj-list-star.png"></p>
              <p class="margin-t-10">7年工作经验</p>
              <p>
                可以上岗    已上保险</p>
            </span>
            <p class="pic-span">
              <a class="ic-box" href="javascript:;">
                <router-link to="/three/matron">
                  <img src="~im/pic(1).png">
                </router-link>
              </a>
              <a class="yuyue" href="javascript:;">
                立即预约
              </a>
            </p>
          </li>
        </ul>
      </div></el-col>
    </el-row>
  </div>
  </div>
</template>
<script>
import {api} from 'api/index'
import {Cuir, Cuirbaner} from 'api/request'
import Cebiian from './cebian/index.vue'
export default {
  data () {
    return {
      activeName: 'first',
      listimg: [],
      listbaner: [],
      listconent: [],
      api
    }
  },
  components: {
    Cebiian
  },
  mounted () {
    Cuir((data) => {
      this.listimg = data.paddress
      // console.log(data)
    })
    Cuirbaner((data) => {
      this.listbaner = data.paddress
      this.listconent = data.data
    })
  }

}
</script>
<style lang="less" scoped>
  .bodycol{
    background-color: #F0F0F0;
  }
  .banner-four{
    width: 100%;
    height: 490px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .question{
    padding: 30px 0 50px 80px;
    line-height: 35px;
    background: #fff;
    .ban-ic{
      display: block;
      position: absolute;
      left: 80px;
      width: 68px;
      height: 68px;
      margin-top: 16px;
      background: url("~im/cuiru-icon.png");
    }
  }
  .WeChat{
    padding: 0px !important;
  }
  .hr{
    color: #E95513;
    font-size: 24px;
    height: 34px;
    margin-bottom: 40px;
    background: url("~im/cuiru-bg.png") no-repeat center;
  }
  .content-but{
    text-align: center;
  }
  .content-but a{

  }
  .content-box{
    margin: 40px 50px;
  }
 .content-box p a{
   display: inline-block;
   width: 103px;
   height: 33px;
   line-height: 33px;
   font-size: 16px;
   color: #666;
 }
  .content-box p a.bt-on{
    background-color: #E95513;
    color: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
  }
  ul .one{
    width: 240px;
    height: 206px;
    float: left;
    margin: 0 25px 50px;
    color: #E95513;
  }
   ul div{
     position: absolute;
   }
   /*elelment服务内容的data样式*/
  /deep/.el-tabs__nav-scroll {
    overflow: hidden;
    margin-left: 370px;
   }
  /deep/.el-tabs__item.is-active {
    color: #E95513;
    /deep/&:hover{
      color: #E95513;
    }
  }
  /deep/.el-tabs__active-bar{
    background-color: #E95513;
  }
  .ul-boxContent{
    width: 240px;
    height: 208px;
    background: url("~im/cuiru-bg2.jpg");
    b{
      display: block;
      font-size: 36px;
      margin-bottom: 7px;
      text-align: center;
      font-weight: 700;
      margin-top: 25px;
    }
    p{
      display: block;
      font-size: 16px;
      margin-bottom: 20px;
      text-align: center;
    }
    span{
      font-size: 12px;
      line-height: 20px;
      display: inline-block;
      width: 210px;
      margin-left: 20px;
    }
    i{
      position: absolute;
      background: url("~im/cuiru-bg3.png") no-repeat center;
      width: 26px;
      height: 23px;
      top: 40px;
      right: 96px;
      display: inline-block;
    }
    em{
      position: absolute;
      width: 40px;
      height: 3px;
      background-color: #ffffff;
      top: 63px;
      left: 0;
      right: 0;
      margin: auto;
    }
    .border-bot{
      position: absolute;
      display: block;
      bottom: 3px;
      right: 3px;
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 6px;
      border-color: transparent #fff #fff transparent;
    }
  }
  ul .one :hover{
    background: #E95513;
    color: #fff;
  }
  ul .one :hover i{
    display: none;
  }
  /*服务价格*/
  .table{
    width: 100%;
    .trs{
      width: 150px;
    }
    .trw{
      width: 330px;
    }
    tr .trts{
      width: 140px;
    }
    tr td{
      padding: 15px 0px;
      border-top: 1px dashed #808080;
    }
    tr td hr{
      border-top: 1px dashed #E95513;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    .tr-hrd td{
      border-top: 2px solid #E95513;
      color: #E95513;
      font-size: 16px;
    }
    tr .trbor{
      border-top: 2px solid #E95513;
      color: #E95513;
      font-size: 16px;
    }
    tr .rd_bg{
      background-color: #FEEFE8;
    }
    tr .trss{
      border-bottom: 2px solid #E95513;
      border-top: 2px solid #E95513;
    }
  }
  .main-content li{
    text-align: center;
    float: left;
    margin-left: 43px;
  }
  .main-content .li1 a{
    display: block;
    width: 100px;
    height: 100px;
    background-image: url("~im/cuiru-liu.png");
    margin-bottom: 23px;
    &:hover{
      background-position: 0px 100px;
    }
  }
  .main-content .li1 a:hover + P{
    color: #E95513;
    font-weight: 600;
  }
  .main-content{
    background: url("~im/cuiru2.png") no-repeat center bottom;
    height: 199px;
  }
  .main-bm li{
    float: left;
    margin-left: 70px;
  }
  .main-bm li .main-hrds{
    display: inline-block;
    width: 210px;
    border: 1px solid #E0DFDF;
    padding: 50px 15px 0;
    height: 142px;
    background-color: #F5F5F5;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .pic-span{
    display:block;
    width: 210px;
    height: 255px;
    background: url("~im/cuiru4.png");
    background-position: 20px;
    text-align: center;
  }
  .pic-span .ic-box{
     display: inline-block;
     width: 150px;
     height: 120px;
    border-radius: 50%;
    overflow:hidden;
    margin-top: 30px;
   }
  .pic-span .yuyue{
    display: block;
    font-size: 16px;
    border-radius: 15px;
    width: 140px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: auto;
    color: #E95513;
    background: #EFEFEF;
    margin-top: 30px;
    &:hover{
      color: #ffffff;
      background: #E95513;
    }
  }
  .pic-span img{
    width: 100%;
    margin-top: -15px;
  }
  .rightone{
    display: block;
    padding: 33px 0 20px;
    border-bottom: 1px solid
  }
</style>
