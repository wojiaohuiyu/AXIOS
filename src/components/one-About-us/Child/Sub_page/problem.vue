<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="19">
        <div class="grid-content bg-purple">
          <div class="text-align-c margin-t-50">
            <p class="t-f-24 hsff-7124 margin-t-10">常见问题</p>
            <p class="hs-666 margin-t-10">CONTACT INFORMATION</p>
            <div class="margin-t-15"><img src="../../../../static/images/index-bg.png" alt=""></div>
          </div>
          <ul class="journalism-ul margin-t-50">
            <li>
              <div class="text-align-c">
                <div class="t-f-36 hsff-7124">13</div>
                <div class="margin-t-10">Mar ,2018</div>
                <div class="margin-t-20"><img src="../../../../static/images/one-jun_icon.png" alt=""></div>
              </div>
              <div class="journalism-ul-li-u margin-l-20">
                <img src="../../../../static/images/one-zzbrand_03.jpg" alt="">
              </div>
              <div class="width-55 margin-l-10">
                <p class="ff71 t-f-24">“贴心”保姆感动雇主</p>
                <p class="margin-t-5">1月19日晨，纷飞的雪花中，40多岁的郭小英疾步走向农贸市场，接连跑了几家，才买到新鲜的鲫鱼。回到家中，她在厨房忙碌起来……</p>
              </div>
            </li>
            <li>
              <div class="text-align-c">
                <div class="t-f-36 hsff-7124">13</div>
                <div class="margin-t-10">Mar ,2018</div>
                <div class="margin-t-20"><img src="../../../../static/images/one-jun_icon.png" alt=""></div>
              </div>
              <div class="journalism-ul-li-u margin-l-20">
                <img src="../../../../static/images/one-xw-2.gif" alt="">
              </div>
              <div class="width-55 margin-l-10">
                <p class="ff71 t-f-24">“贴心”保姆感动雇主</p>
                <p class="margin-t-5">1月19日晨，纷飞的雪花中，40多岁的郭小英疾步走向农贸市场，接连跑了几家，才买到新鲜的鲫鱼。回到家中，她在厨房忙碌起来……</p>
              </div>
            </li>
            <li>
              <div class="text-align-c">
                <div class="t-f-36 hsff-7124">13</div>
                <div class="margin-t-10">Mar ,2018</div>
                <div class="margin-t-20"><img src="../../../../static/images/one-jun_icon.png" alt=""></div>
              </div>
              <div class="journalism-ul-li-u margin-l-20">
                <img src="../../../../static/images/one-xw-3.gif" alt="">
              </div>
              <div class="width-55 margin-l-10">
                <p class="ff71 t-f-24">“贴心”保姆感动雇主</p>
                <p class="margin-t-5">1月19日晨，纷飞的雪花中，40多岁的郭小英疾步走向农贸市场，接连跑了几家，才买到新鲜的鲫鱼。回到家中，她在厨房忙碌起来……</p>
              </div>
            </li>
            <li>
              <div class="text-align-c">
                <div class="t-f-36 hsff-7124">13</div>
                <div class="margin-t-10">Mar ,2018</div>
                <div class="margin-t-20"><img src="../../../../static/images/one-jun_icon.png" alt=""></div>
              </div>
              <div class="journalism-ul-li-u margin-l-20">
                <img src="../../../../static/images/one-xw-4.gif" alt="">
              </div>
              <div class="width-55 margin-l-10">
                <p class="ff71 t-f-24">“贴心”保姆感动雇主</p>
                <p class="margin-t-5">1月19日晨，纷飞的雪花中，40多岁的郭小英疾步走向农贸市场，接连跑了几家，才买到新鲜的鲫鱼。回到家中，她在厨房忙碌起来……</p>
              </div>
            </li>
            <li>
              <div class="text-align-c">
                <div class="t-f-36 hsff-7124">13</div>
                <div class="margin-t-10">Mar ,2018</div>
                <div class="margin-t-20"><img src="../../../../static/images/one-jun_icon.png" alt=""></div>
              </div>
              <div class="journalism-ul-li-u margin-l-20">
                <img src="../../../../static/images/one-xw-2.gif" alt="">
              </div>
              <div class="width-55 margin-l-10">
                <p class="ff71 t-f-24">“贴心”保姆感动雇主</p>
                <p class="margin-t-5">1月19日晨，纷飞的雪花中，40多岁的郭小英疾步走向农贸市场，接连跑了几家，才买到新鲜的鲫鱼。回到家中，她在厨房忙碌起来……</p>
              </div>
            </li>
          </ul>
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
  .width-55{
    width: 55%;
  }
  .journalism-ul li{
    padding: 25px;
    background-color: #f9f9f9;
    margin-bottom: 30px;
    border: 1px solid transparent;
    width: 90%;
    height: 200px;
  }
  .journalism-ul li:hover {
    border: 1px solid #FF7124;
  }
  .journalism-ul li>div{
    float: left;
  }
  .journalism-ul-li-u  img{
    width: 240px;
    height: 165px;
  }
  .ff71:hover{
    color: #ff7124;
  }
</style>
