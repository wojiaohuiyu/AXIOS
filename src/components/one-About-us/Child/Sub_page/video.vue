<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="19">
        <div class="grid-content bg-purple">
          <div>
            <ul class="video-ul clearfix">
                <li>
                  <em>
                    <a href="http://www.51ejz.com/e%E5%AE%B6%E6%94%BF1218.mp4" target="_blank">
                    <img src="http://www.51ejz.com/upimages/d3c3440f-2e98-4b09-a54c-7cedcaf88527.png" style="width:249px;  height:200px;"></a></em>
                    <p class="margin-t-10 t-f-18">e家政企业宣传片</p>
                </li>
                <li>
                  <a class="info" href="http://www.51ejz.com/e%E5%AE%B6%E6%94%BF1218.mp4" target="_blank">
                    <img src="../../../../static/images/one-v-2.jpg" style="width:249px;  height:200px;">
                    <span></span>
                    <p class="margin-t-10 t-f-18">厨艺培训-酸汤肥牛</p>
                  </a>
                </li>
                <li>
                  <a class="info" href="http://oiexvr112.bkt.clouddn.com/%E9%85%B8%E6%B1%A4%E8%82%A5%E7%89%9B.mp4" target="_blank">
                    <img src="../../../../static/images/one-v-1.jpg" style="width:249px;  height:200px;">
                    <span></span>
                    <p class="margin-t-10 t-f-18">e家政厨艺培训-松子玉米炒元宵</p>
                  </a>
                </li>
              <li>
                <a class="info" href="http://www.51ejz.com/video/chuyi.mp4" target="_blank">
                  <img src="../../../../static/images/one-v-3.jpg" style="width:249px;  height:200px;">
                  <span></span>
                  <p class="margin-t-10 t-f-18">掌上一键预约家政服务</p>
                </a>
              </li>
              <li>
                <a class="info" href="http://www.51ejz.com/video/xuanchuan.mp4" target="_blank">
                  <img src="../../../../static/images/one-v-4.jpg" style="width:249px;  height:200px;">
                  <span></span>
                  <p class="margin-t-10 t-f-18">e家政母婴-微课堂</p>
                </a>
              </li>
              <li>
                <a class="info" href="http://www.51ejz.com/video/muying.mp4" target="_blank">
                  <img src="../../../../static/images/one-v-3.jpg" style="width:249px;  height:200px;">
                  <span></span>
                  <p class="margin-t-10 t-f-18">掌上一键预约家政服务</p>
                </a>
              </li>
            </ul>
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
 .video-ul li{
   float: left;
   margin-left: 50px;
   margin-bottom: 50px;
 }
</style>
