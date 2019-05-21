<template>
  <div>
    <!--大图 家政服务 我们的优势-->
      <Content/>
    <!--分类 十大工种-->
      <Classification/>
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
<style>
</style>
