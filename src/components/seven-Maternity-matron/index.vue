<template>
  <div class="bodycol">
    <div class="banersix">
        <img :src="api+bmbanner"/>
    </div>
    <div class="container">
      <el-row class="padding ks" :gutter="20">
        <el-col class="background-colorw margin-t-30" :span="19">
            <div class="grid-content bg-purple">
                <img :src="api+lrpoto" alt="">
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
import {bmList, bmlrList} from 'api/request'
import Cebians from '../five-home-page/comcebian/index'
export default {
  data () {
    return {
      bmbanner: [],
      lrpoto: [],
      api
    }
  },
  mounted () {
    bmList((data) => {
      this.bmbanner = data.paddress
      console.log(this.bmbanner)
    })
    bmlrList((data) => {
      this.lrpoto = data.img
      console.log(this.lrpoto)
    })
  },
  components: {
    Cebians
  }
}
</script>
<style lang="less" scoped>
  .bodycol{
    background-color: #F0F0F0;
  }
  .banersix img{
    width: 100%;
    height: 490px;
  }
  .value_list .title3{
    display: block;
    width: 182px;
    height: 15px;
    margin: -1px auto 0;
    background: url("../../static/img/baomu3.png") no-repeat center;
  }
  .value_list h2{
    border-bottom: 1px solid #D3D3D3;
  }
  .baomu{
    float: left;
    margin-left: 240px;
    margin-right: 20px;
    li{
      margin-top: 20px;
    }
  }
  /*侧边*/
  .rightone{
    display: block;
    padding: 33px 0 20px;
    border-bottom: 1px solid
  }
  .schedule{
    width: 16px;
    height: 268px;
    background: url("~im/baomu2.png") no-repeat center;
    margin-top: 20px;
  }
  .baomu-box{
    margin-right: 221px;
  }
  .baomuone{
    margin-left: 0px !important;
    margin-left: 20px !important;
  }
  .el-col{
    padding-bottom: 50px;
  }
  .main-content table{
    width: 100%;
    tr td{
      background-color: #F0F0F0;
      padding: 9px 0;
    }
  }
  /*质量保证*/
  .icon-cent ul{
    position: relative;
    li{
      position: absolute;
    }
    .li1{
      left: 130px;
      top: 15px;
      &:hover{
        top: 0px;
      }
    }
    .li2{
      top: 73px;
      left: 233px;
      &:hover{
        top: 63px;
        left: 243px;
      }
    }
    .li3{
      top: 241px;
      left: 233px;
      &:hover{
        top: 251px;
        left: 243px;
      }
    }
    .li4{
      top: 250px;
      left: 130px;
      &:hover{
        top: 265px;
      }
    }
    .li5{
      top: 241px;
      left: 22px;
      &:hover{
        top: 251px;
        left: 12px;
      }
    }
    .li6{
      top: 73px;
      left: 22px;
      &:hover{
        top: 63px;
        left: 12px;
      }
    }
  }
  /*流程*/
  .flow-box li{
    transition: 0.4s all;
    -webkit-transition:0.4s all;
    -moz-transition:0.4s all;
    -ms-transition:0.4s all;
    &:hover{
      border: 1px solid #cccccc;
      transform:translateY(-10px);
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
    }
  }
  .flow-box{
    /*overflow: hidden;*/
    text-align: center;
    margin: 25px 65px;
    li{
      width: 25%;
      float: left;
      border-bottom: 1px dashed #A7A7A7;
      height: 207px;
      margin-bottom: 83px;
      div{
        width: 145px;
        height: 145px;
        margin: auto;
        padding-top: 25px;
        background: #cccccc;
        color: white;
        em{
          display: block;
          margin-bottom: 25px;
          img:first-child+img{
            display: none;
          }
        }
        p{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
      }
      .flow-ico{
        display: block;
        width: 37px;
        height: 37px;
        line-height: 37px;
        text-align: center;
        font-style: normal;
        border-radius: 50%;
        background: url("~im/baomu15.png") no-repeat center;
        color: #fff;
        font-size: 18.67px;
        margin: 40px auto 0;
      }
    }
  }
  .flow-box li:hover div{
    color: red;
  }
  .flow-box li:hover i{
    color: red;
  }
  .flow-box li:hover em .img-two{
    display: none;
  }
  .flow-box li:hover em .img-one{
    display: block;
    margin: auto;
  }
</style>
