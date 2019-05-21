<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="19">
        <div class="grid-content bg-purple">
          <div class="text-align-c margin-t-50">
            <div class="t-f-24 hsff-7124">企业动态</div>
            <div class="hs-666 margin-t-15">E HOUSEKEEPING NEWS</div>
            <div class="disp-block margin-t-20"><img src="../../../../static/images/index-bg.png" alt=""></div>
          </div>
          <ul class="dynamic-ul margin-t-50">
            <li class=" margin-l-20 clearfix height-260 border-b1-c">
              <div class="border-2-h width-30 fl ">
                <img src="../../../../static/images/one-char-tp1.jpg" alt="">
              </div>
              <div class="width-60 fr">
                <div class="border-b1-c padding-b-10 ff71">家电清洗限时特惠，最高立减31元，还有好礼相送哦！</div>
                <div class="margin-t-50"><a class="dynac-btn">查看详情</a></div>
              </div>
            </li>
            <li class=" margin-l-20 clearfix height-260 border-b1-c">
              <div class="border-2-h width-30 fl ">
                <img src="../../../../static/images/one-char-tp2.jpg" alt="">
              </div>
              <div class="width-60 fr">
                <div class="border-b1-c padding-b-10 ff71">家电清洗限时特惠，最高立减31元，还有好礼相送哦！</div>
                <div class="margin-t-50"><a class="dynac-btn">查看详情</a></div>
              </div>
            </li>
            <li class=" margin-l-20 clearfix height-260 border-b1-c">
              <div class="border-2-h width-30 fl ">
                <img src="../../../../static/images/one-char-tp3.jpg" alt="">
              </div>
              <div class="width-60 fr">
                <div class="border-b1-c padding-b-10 ff71">家电清洗限时特惠，最高立减31元，还有好礼相送哦！</div>
                <div class="margin-t-50"><a class="dynac-btn">查看详情</a></div>
              </div>
            </li>
            <li class=" margin-l-20 clearfix height-260">
              <div class="border-2-h width-30 fl ">
                <img src="../../../../static/images/one-characteristic-tp2.jpg" alt="">
              </div>
              <div class="width-60 fr">
                <div class="border-b1-c padding-b-10 ff71">家电清洗限时特惠，最高立减31元，还有好礼相送哦！</div>
                <div class="margin-t-50"><a class="dynac-btn">查看详情</a></div>
              </div>
            </li>
          </ul>
          <div class="dynac-5">
            <div class="block">
              <el-pagination
                layout="prev, pager, next"
                :total="100">
              </el-pagination>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple enterprise-2">
          <Rightsidebar/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Rightsidebar from './Rightsidebar/Rightsidebar.vue'
export default {
  components: {
    Rightsidebar
  }
}
</script>
<style>
  .width-60{
    width: 60%;
  }
  .height-260 {
    height: 260px;
    margin-bottom: 20px;
  }
  .width-30{
    width: 30%;
    height: 240px;
  }
  .border-b1-c{
    border-bottom:1px solid #D4D3D3;
  }
  .border-2-h{
    border:5px solid #ff7124;
  }
  .dynamic-ul img{
    width: 100%;
    height: 100%;
    position: relative;
    top: -10px;
    left: -10px;
  }
  .ff71:hover{
    color: #ff7124;
  }
  .dynac-btn{
    color: #BFBFBF;
    font-size: 14px;
    padding: 5px 20px;
    background-color: #e5e4e4;
  }
  .dynac-btn:hover {
    background-color: #ff7124;
    color: white;
  }
  .dynac-5 {
    position: relative;
    left: 50%;
  }
</style>
