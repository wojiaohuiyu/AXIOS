<template>
  <div class="bodycol">
      <div class="banner-five">
        <img src="~im/banner5.jpg">
      </div>
    <div class="container">
      <el-row class="padding ks" :gutter="20">
        <el-col :span="19" class="background-colorw margin-t-30"><div class="grid-content bg-purple">
            <div class="value_list">
              <h2>育儿嫂价值</h2>
            </div>
          <div class="parent_value">
            <div class="five-conet">专业育儿嫂，依托专业的辅助团队，不仅为用户提供婴幼儿日常料理、健康膳食、用品清洁等专业护理，还能提供潜能开发、学前教
              育和学前培养等成长服务。选择专业育儿嫂，帮助宝宝健康快乐成长。
            </div>
            <ul class="margin-t-40 clearfix">
              <li>
                <i>
                  <img src="~im/sh.png">
                </i>
                <div class="write">
                  <h3>生活照料</h3>
                  <p>根据宝宝生活规律照顾宝宝的饮食起居</p>
                </div>
              </li>
              <li>
                <i>
                  <img src="~im/sh.png">
                </i>
                <div class="write">
                  <h3>生活照料</h3>
                  <p>根据宝宝生活规律照顾宝宝的饮食起居</p>
                </div>
              </li>
              <li>
                <i>
                  <img src="~im/sh.png">
                </i>
                <div class="write">
                  <h3>生活照料</h3>
                  <p>根据宝宝生活规律照顾宝宝的饮食起居</p>
                </div>
              </li>
              <li>
                <i>
                  <img src="~im/sh.png">
                </i>
                <div class="write">
                  <h3>生活照料</h3>
                  <p>根据宝宝生活规律照顾宝宝的饮食起居</p>
                </div>
              </li>
              <li>
                <i>
                  <img src="~im/sh.png">
                </i>
                <div class="write">
                  <h3>生活照料</h3>
                  <p>根据宝宝生活规律照顾宝宝的饮食起居</p>
                </div>
              </li>
            </ul>
          </div>
        </div></el-col>
        <!--侧边-->
        <el-col class="padding" :span="5"><div class="grid-content bg-purple">
          <Cebians></Cebians>
        </div></el-col>
        <el-col :span="19" class="background-colorw"><div class="grid-content bg-purple">
          <div class="value_list">
            <h2>服务内容</h2>
          </div>
          <div class="content_list clearfix">
             <div class="fl shades">
               <img src="~im/girl.jpg">
             </div>
            <ul class="fr banef-ul">
              <li>
                <div class="cont">
                  <div class="cont-one">1、婴儿喂养、添加辅食、营养合理搭配婴儿喂养婴儿喂养婴儿喂养婴儿喂养婴儿喂养</div>
                  <p>2、口腔护理、臀部护理、尿布疹的预防及护理</p>
                  <p>3、婴儿衣服、奶具、餐具、玩具的清洗消毒</p>
                  <p>4、婴儿房间的整理保洁</p>
                </div>
              </li>
              <li>
                <div class="cont">
                  <div class="cont-one">1、婴儿喂养、添加辅食、营养合理搭配婴儿喂养婴儿喂养婴儿喂养婴儿喂养婴儿喂养</div>
                  <p>2、口腔护理、臀部护理、尿布疹的预防及护理</p>
                  <p>3、婴儿衣服、奶具、餐具、玩具的清洗消毒</p>
                  <p>4、婴儿房间的整理保洁</p>
                </div>
              </li>
              <li>
                <div class="cont">
                  <div class="cont-one">1、婴儿喂养、添加辅食、营养合理搭配婴儿喂养婴儿喂养婴儿喂养婴儿喂养婴儿喂养</div>
                  <p>2、口腔护理、臀部护理、尿布疹的预防及护理</p>
                  <p>3、婴儿衣服、奶具、餐具、玩具的清洗消毒</p>
                  <p>4、婴儿房间的整理保洁</p>
                </div>
              </li>
              <li>
                <div class="cont">
                  <div class="cont-one">1、婴儿喂养、添加辅食、营养合理搭配婴儿喂养婴儿喂养婴儿喂养婴儿喂养婴儿喂养</div>
                  <p>2、口腔护理、臀部护理、尿布疹的预防及护理</p>
                  <p>3、婴儿衣服、奶具、餐具、玩具的清洗消毒</p>
                  <p>4、婴儿房间的整理保洁</p>
                </div>
              </li>
            </ul>
          </div>
        </div></el-col>
        <el-col :span="19" class="background-colorw"><div class="grid-content bg-purple">
          <div class="value_list">
            <h2>服务价格</h2>
          </div>
          <div class="text-align-c margin-b-40">
            <img src="~im/prices.jpg">
          </div>
          <div class="main-content text-align-c">
            <table>
              <tr>
                <td style="width: 245px;">育婴师类别</td>
                <td>育婴师级别</td>
                <td>工资标准</td>
                <td rowspan="16" onclick="toZiXun()">月收费按照实际工作26天计算。<br>（逢国家法定假日费用按国家规定计算）</td>
              </tr>
              <tr>
                <td rowspan="7" onclick="toZiXun()">住家育婴师<sub>（26天）</sub></td>
              </tr>
              <tr>

                <td rowspan="1" onclick="toZiXun()">金牌育婴师</td>
                <td onclick="toZiXun()">10800元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">五星级育婴师</td>
                <td onclick="toZiXun()">8800元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">四星级育婴师</td>
                <td onclick="toZiXun()">7800元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">三星级育婴师</td>
                <td onclick="toZiXun()">6800元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">二星级育婴师</td>
                <td onclick="toZiXun()">6000元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">一星级育婴师</td>
                <td onclick="toZiXun()">5380元/月</td>
              </tr>

              <tr>
                <td rowspan="7" onclick="toZiXun()">非住家育婴师<sub>（26天）</sub></td>
              </tr>
              <tr>

                <td rowspan="1" onclick="toZiXun()">金牌育婴师</td>
                <td onclick="toZiXun()">10300元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">五星级育婴师</td>
                <td onclick="toZiXun()">8300元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">四星级育婴师</td>
                <td onclick="toZiXun()">7300元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">三星级育婴师</td>
                <td onclick="toZiXun()">6400元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">二星级育婴师</td>
                <td onclick="toZiXun()">5500元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">一星级育婴师</td>
                <td onclick="toZiXun()">4880元/月</td>
              </tr>
            </table>
          </div>
        </div></el-col>
        <!--品质保障-->
        <el-col :span="19" class="background-colorw margin-b-30"><div class="grid-content bg-purple">
          <div class="value_list">
            <h2>品质保障</h2>
          </div>
          <div class="product_list">
            <ul>
              <li>
                <div class="pre">
                  <em>
                    <img src="~im/product_01.jpg">
                  </em>
                  <h5>员工制：放心</h5>
                </div>
                <div class="explain text-align-c">
                  <p>为用户提供</p>
                  <p>100万人身＋物</p>
                  <p>品保障的服务机构</p>
                </div>
              </li>
              <li>
                <div class="pre">
                  <em>
                    <img src="~im/product_01.jpg">
                  </em>
                  <h5>员工制：放心</h5>
                </div>
                <div class="explain text-align-c">
                  <p>为用户提供</p>
                  <p>100万人身＋物</p>
                  <p>品保障的服务机构</p>
                </div>
              </li>
              <li>
                <div class="pre">
                  <em>
                    <img src="~im/product_01.jpg">
                  </em>
                  <h5>员工制：放心</h5>
                </div>
                <div class="explain text-align-c">
                  <p>为用户提供</p>
                  <p>100万人身＋物</p>
                  <p>品保障的服务机构</p>
                </div>
              </li>
              <li>
                <div class="pre">
                  <em>
                    <img src="~im/product_01.jpg">
                  </em>
                  <h5>员工制：放心</h5>
                </div>
                <div class="explain text-align-c">
                  <p>为用户提供</p>
                  <p>100万人身＋物</p>
                  <p>品保障的服务机构</p>
                </div>
              </li>
            </ul>
          </div>
        </div></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import {api} from 'api/index'
import {Yuer} from 'api/request'
import {Yuerbaner} from 'api/request'
import Cebians from './comcebian/index.vue'
export default {
  data () {
    return {
      YueConet: [],
      Yuebaner: [],
      api
    }
  },
  components: {
    Cebians
  },
  mounted () {
    Yuer((data) => {
      this.YueConet = data
      console.log('育儿嫂')
      console.log(data)
    })
    Yuerbaner((data) => {
      console.log('育儿嫂图片')
      console.log(data)
    })
  }
}
</script>
<style lang="less" scoped>
  .bodycol{
    background-color: #F0F0F0;
  }
  .banner-five img{
    width: 100%;
    height: 490px;
  }
  .value_list{
    text-align: center;
    margin: 20px auto 40px;
    background: url('~im/yuer_bg.jpg') no-repeat center;
    width: 950px;
    height: 45px;
  }
  .value_list h2{
    font-size: 28px;
    color: #333;
    font-weight: 700;
    padding-top: 5px;
  }
  .five-conet{
    text-indent: 2rem;
  }
  .parent_value ul li{
    width: 128px;
    height: 170px;
    text-align: center;
    float: left;
    margin-left: 50px;
    background: url('~im/yuer_bg_cont.png');
    -webkit-transition: 0.4s all;
    -moz-transition: 0.4s all;
    -ms-transition: 0.4s all;
    -o-transition: 0.4s all;
    transition: 0.4s all;
    &:hover{
      background: #E95513;
      color: #fff;
      transform: translateY(-10px);
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
  }
  .write p{
    font-size: 12px;
    padding: 5px 22px;
    text-align: left;
  }
  .el-col{
    padding-bottom:50px !important;
  }
  .content_list{
    width: 80%;
    margin: auto;
  }
  /*comcebian*/
  .rightone{
    display: block;
    padding: 33px 0 20px;
    border-bottom: 1px solid
  }
  .cont{
    background: url('~im/cont_01.png') no-repeat left top;
    padding-left: 70px;
    margin: 5px 50px;
  }
  .cont p,.cont .cont-one{
    font-size: 12px;
    line-height: 20px;
    color: #333;
  }
  .cont-one{
    text-align: -webkit-left;
  }
  .banef-ul{
    width: 63%;
  }
  .banef-ul li .cont{
    width: 100%;
  }
  .main-content table{
    width: 100%;
    tr td{
      background-color: #F0F0F0;
      padding: 9px 0;
    }
  }
  .product_list ul li{
    float: left;
    margin-left: 50px;
    -webkit-transition: 0.4s all;
    -moz-transition: 0.4s all;
    -ms-transition: 0.4s all;
    -o-transition: 0.4s all;
    transition: 0.4s all;
    &:hover{
      box-shadow: 0px 0px 5px #A9A9A9;
      transform: translateY(-10px);
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
  }
  .product_list ul li em{
    display: block;
    padding: 34px 0px 0px 0px;
  }
  .pre{
    padding: 10px 36px;
    text-align: center;
    border-top: 1px solid #f0f0f0;
    border-left: 1px solid #f0f0f0;
    border-right: 1px solid #f0f0f0;
  }
  .explain {
    background-color: #f0f0f0;
    padding: 24px 0px;
  }
  .explain p{
    font-size: 14px;
    color: black;
  }
</style>
