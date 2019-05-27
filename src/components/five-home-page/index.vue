<template>
  <div class="bodycol">
      <div class="banner-five">
        <img :src="api+Yuebaner">
      </div>
    <div class="container">
      <el-row class="padding ks" :gutter="20">
        <el-col :span="19" class="background-colorw margin-t-30">
          <div>
            <img :src="api+YueConet" alt="">
          </div>
        </el-col>
        <!--侧边-->
        <el-col class="padding" :span="5">
          <div class="grid-content bg-purple">
          <Cebians></Cebians>
        </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import {api} from 'api/index'
import {yesbanner, yesbcont} from 'api/ctx'
import Cebians from './comcebian/index.vue'
export default {
  data () {
    return {
      Yuebaner: [],
      YueConet: [],
      api
    }
  },
  components: {
    Cebians
  },
  mounted () {
    yesbanner((data) => {
      this.Yuebaner = data.paddress
      console.log('育儿嫂')
      console.log(this.Yuebaner)
    })
    yesbcont((data) => {
      this.YueConet = data.paddress
      console.log('育儿嫂图片')
      console.log(this.YueConet)
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
