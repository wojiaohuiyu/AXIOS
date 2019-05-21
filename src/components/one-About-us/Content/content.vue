<template>
  <div>
    <div class="content-t">
      <div class="content-t-d">
        <img src="../../../static/images/index-erweima.jpg" alt="">
      </div>
    </div>
    <div class="container clearfix">
      <div class="text-align-c t-f-40">家政服务</div>
      <div class="text-align-c t-f-18 margin-t-20">全方位的服务 让您生活无忧</div>
      <div class="container-3 margin-t-10"><img src="../../../static/images/index-bg.png" alt=""></div>
      <ul class="container-ul4 margin-t-30 clearfix">
          <li>
              <i class="container-ul4-i"></i>
              <div class="t-f-20 hsff-7124">日常保洁</div>
              <div class="t-f-16 margin-t-5">钟点工/小时工/清洁护理</div>
              <div>
                <span class="icon-c-v icon-c-v1 margin-t-5 cursor"></span>
              </div>
          </li>
          <li>
            <i class="container-ul4-i"></i>
            <div class="t-f-20 hsff-7124">日常保洁</div>
            <div class="t-f-16 margin-t-5">钟点工/小时工/清洁护理</div>
            <div>
              <span class="icon-c-v icon-c-v1 margin-t-5 cursor"></span>
            </div>
          </li>
        <li>
          <i class="container-ul4-i"></i>
          <div class="t-f-20 hsff-7124">日常保洁</div>
          <div class="t-f-16 margin-t-5">钟点工/小时工/清洁护理</div>
          <div>
            <span class="icon-c-v icon-c-v1 margin-t-5 cursor"></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="container text-align-c">
        <div class="t-f-40">我们的优势</div>
        <div class="margin-t-20">实名认证 专业培训 家政保险 装备规范 价格透明 评价反馈</div>
        <div class="container-3 margin-t-10"><img src="../../../static/images/index-bg.png" alt=""></div>
        <ul class="container-ul5 margin-t-50 clearfix">
            <li class="container-ul5-li1 text-align-c">
              <div class="container-ul5-li1-d1">
                <div class="disp-block"><img src="../../../static/images/one-3-1-1.png" alt=""></div>
                <div class="margin-t-20 t-f-26">家政保险</div>
                <div class="margin-t-10">Domestic insurance</div>
                <p>提供人身保险及用户物品保障</p>
                <p>人身意外险、让服务全程无忧</p>
                <div class="container-ul5-li1-d2"><img src="../../../static/images/one-3-1-2.png" alt=""></div>
              </div>
            </li>
          <li class="container-ul5-li2 text-align-c">
            <div class="container-ul5-li1-d1">
              <div class="disp-block"><img src="../../../static/images/one-3-1-1.png" alt=""></div>
              <div class="margin-t-20 t-f-26">家政保险</div>
              <div class="margin-t-10">Domestic insurance</div>
              <p>提供人身保险及用户物品保障</p>
              <p>人身意外险、让服务全程无忧</p>
              <div class="container-ul5-li1-d2"><img src="../../../static/images/one-3-1-2.png" alt=""></div>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
  @import "../../../static/css/commonality";
  .content-t{
    position: relative;
    top: -100px;
    width: 100%;
    height: 650px;
    background: url("../../../static/images/content-tp1.jpg") no-repeat;
    background-size: 100%;
  }
  .content-t-d{
    width: 300px;
    position: relative;
    top: 250px;
    margin-left: 410px;
    border: 1px solid white;
    padding: 10px 5px 10px 0;
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
    padding: 0 0 0 50px;
    margin: 0 30px;
  }
  .container-ul4-i{
    display: block;
    width: 45px;
    height: 2px;
    background-color: #FF7124;
    margin-bottom: 10px;
  }
  .container-ul5 {
    height: 350px;
  }
  .container-ul5-li1{
    background: url("../../../static/images/one-3-1.jpg");
  }
  .container-ul5-li2 {
    background: url("../../../static/images/one-3-2.jpg") no-repeat;
  }
  .container-ul5 li{
    float: left;
    width: 236px;
    height: 300px;
    overflow: hidden;
    margin: 0 42px;
    .container-ul5-li1-d1 {
      position: relative;
      top: -320px;
      height: 100%;
      .container-ul5-li1-d2 {
        width: 100%;
        position: relative;
        right: -105px;
        bottom: -55px;
      }
    }
    &:hover{
      .container-ul5-li1-d1{
        top: 20px;
        transition: all 1s;
        background: rgba(235, 234, 234, 0.7);
        height: 100%;
      }
    }
  }

</style>
