<template>
  <div class="bakgcol">
    <!--大图 家政服务 我们的优势-->
      <Content/>
    <!--特色服务 e家政视频 行业资讯-->
      <Characteristic/>
  </div>
</template>
<script>
import Content from './content.vue'
import Characteristic from './Characteristic/Characteristic.vue'
import Classification from './Classification/classification.vue'
export default {
  components: {
    Content,
    Characteristic,
    Classification
  }
}
</script>
<style lang="less" scoped>
  /*主题的背景颜色*/
  .bakgcol{
    background-color: #f6f6f6;
  }
</style>
