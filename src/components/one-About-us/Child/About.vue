<template>
  <div>
    <div class="about-1 margin-t-10">
      <img src="../../../static/images/one-z-brandtp1.jpg" alt="">
    </div>
    <div class="container about-2">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane name="first">
          <span slot="label">企业介绍</span>
          <Enterprise/>
        </el-tab-pane>
        <el-tab-pane label="团队介绍" name="second">
          <Team/>
        </el-tab-pane>
        <el-tab-pane label="企业动态" name="third"><Dynamic/></el-tab-pane>
        <el-tab-pane label="行业新闻" name="fourth"><Journalism/></el-tab-pane>
        <el-tab-pane label="常见问题" name="first1"><problem/></el-tab-pane>
        <el-tab-pane label="e家政视频" name="second2"><Video/></el-tab-pane>
        <el-tab-pane label="联系方式" name="third3"><Contact/></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Enterprise from './Sub_page/enterprise.vue'
import Team from './Sub_page/team.vue'
import Dynamic from './Sub_page/dynamic.vue'
import Journalism from './Sub_page/journalism.vue'
import problem from './Sub_page/problem.vue'
import Video from './Sub_page/video.vue'
import Contact from './Sub_page/contact.vue'
export default {
  data () {
    return {
      activeName2: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  components: {
    Enterprise,
    Team,
    Dynamic,
    Journalism,
    problem,
    Video,
    Contact
  }
}
</script>
<style>
  .about-1 {
    width: 100%;
    height: 600px;
  }
  .about-1 img{
    width: 100%;
    height: 500px;
  }
  .about-2 {
    height: 500px;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    color: white;
    background: #ff7e00;
  }
  .el-tabs__item {
    color: #ff7e00;
    border: 1px solid #ff7e00;
    margin: 0 15px;
    font-size: 15px;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item {
    border: 1px solid #ff7e00;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item:first-child {
    border-left: 1px solid;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    border-bottom-color: #ff7e00;
    border-radius: 50px;
  }
  .el-tabs__nav is-top .el-tabs__item {
    font-size: 20px;
  }
  .el-tabs__item is-top is-active {
    font-size: 20px;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: 1px solid transparent;
  }
  .el-tabs--card>.el-tabs__header {
    border-bottom: 1px solid transparent;
  }
</style>
