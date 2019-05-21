<template>
  <div class="epe">
    <el-row :gutter="20">
      <el-col :span="19">
        <div class="grid-content bg-purple">
          <div class="epe1">
              <div class="margin-b-5 margin-t-10">
                <span class="t-f-26 hsff-7124">企业简介</span>
                <span class="t-f-20 hs-666">Introduction</span>
              </div>
              <div class="epe-2">
                  <div class="fl epe-2-2 margin-t-10 t-f-18">
                    <p class="margin-t-10">e家政是江苏洁瑞达信息科技有限公司依托中国软件谷、南京大数据产业基地投资打造的互联网居家生活服务垂直平台。</p>
                    <p class="margin-t-10">自主研发一整套管理系统、培训体系，已通过国家质量管理体系( GB/T19001-2016/IS9001:2015标准)认证，可提供全屋保洁、家电清洗、开荒保洁等28种居家生活服务，用户可通过官网、微信、APP、 电商团购、400热线等预约各项服务。</p>
                    <p class="margin-t-10">服务区域已覆盖北京、上海、广州、深圳、南京、杭州、武汉等全国60+大中型城市。</p>
                  </div>
                  <div class="fr epe-2-3 margin-t-10">
                    <img src="../../../../static/images/one-z5-qyejs_logo.jpg" alt="">
                  </div>
              </div>
            </div>
          <div class="epe2">
            <div class="margin-b-5 margin-t-10">
              <span class="t-f-26 hsff-7124">品牌文化</span>
              <span class="t-f-20 hs-666">Brand culture</span>
            </div>
            <div class="epe-2">
              <div class="fl epe-2-2 margin-t-10 t-f-18">
                <p class="margin-t-10">“用心服务好每一位客户”是e家政秉承的服务宗旨。坚持“客户即家人”的理念。</p>
                <p class="margin-t-10">品质居家服务缔造者</p>
              </div>
              <div class="fr epe-2-3 margin-t-10">
                <img src="../../../../static/images/one-z6qyejs_cypx01.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="epe2">
            <div class="margin-b-5 margin-t-10">
              <span class="t-f-26 hsff-7124">品牌文化</span>
              <span class="t-f-20 hs-666">Brand culture</span>
            </div>
            <div class="epe-2">
              <div class="fl epe-2-2 margin-t-10 t-f-18">
                <p class="margin-t-10">e家政严格把控岗前筛选和服务质量。对服务人员进行身份证、健康证、从业资格证三证认证；上岗前进行服务技能培训，合格后签订服务协议；提供三方家政保险，保障用户、服务人员的合法权益；同时还配备统一装备，提高工作效率；公开价格，统一收费；通过各电商平台，用户可以真实评价反馈。</p>
              </div>
              <div class="fr epe-2-3 margin-t-10">
                <img src="../../../../static/images/one-z8-qyjs_gsys.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="epe2">
            <div class="margin-b-5 margin-t-10">
              <span class="t-f-26 hsff-7124">发展历程</span>
              <span class="t-f-20 hs-666">History</span>
            </div>
            <div class="epe-2">
              <div class="fl epe-2-2 margin-t-10 t-f-18">
                <p class="margin-t-20">2015.03  e家政品牌成立</p>
                <p  class="margin-t-10">2015.12  e家政首次众筹</p>
                <p  class="margin-t-10"><b>2016年</b></p>
                <p  class="margin-t-10">2016.04  亿家政职业培训学校成立</p>
                <p  class="margin-t-10">2016.10  南京月嫂服务中心正式成立</p>
                <p  class="margin-t-10">2017.08  苏州、青岛分公司正式落地</p>
                <p class="margin-t-10">2017.10  上海分公司正式落地</p>
                <p class="margin-t-10">2017.12  无锡、杭州、合肥分公司正式落地</p>
                <p  class="margin-t-10"><b>2016年</b></p>
                <p  class="margin-t-10">2016.04  亿家政职业培训学校成立</p>
                <p  class="margin-t-10">2016.10  南京月嫂服务中心正式成立</p>
                <p  class="margin-t-10">2017.08  苏州、青岛分公司正式落地</p>
                <p class="margin-t-10">2017.10  上海分公司正式落地</p>
                <p class="margin-t-10">2017.12  无锡、杭州、合肥分公司正式落地</p>
              </div>
              <div class="fr epe-2-3 margin-t-10">
                <img src="../../../../static/images/one-z4-qyejs_ckzx.jpg" alt="">
              </div>
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
import Rightsidebar from './Rightsidebar/Rightsidebar'
export default {
  components: {
    Rightsidebar
  }
}
</script>
<style>
  .epe {
    width: 100%;
    height: 1600px;
    position: relative;
  }
  .about-2 {
    height: 1553px;
  }
  .epe1 {
    height: 370px;
  }
  .epe2 {
    height: 200px;
  }
  .epe-2 {
    border-top: 1px solid darkgrey;
  }
  .epe-2-2 {
    width: 60%;
  }
  .epe-2-3 {
    width: 35%;
  }
  .epe-2-3 img{
    width: 100%;
  }
</style>
