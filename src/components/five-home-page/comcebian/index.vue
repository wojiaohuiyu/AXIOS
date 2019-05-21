<template>
  <div id="searchBar" class="fixes padding-25">
    <div class="text-align-c rightone">
      <p class="rightone"><img src="~im/right_img.jpg"></p>
      <p class="margin-t-30"><img src="~im/right_img2.jpg"></p>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let offsetTop = document.querySelector('#searchBar').offsetTop
      if (scrollTop <= 623) {
        offsetTop = 623 - Number(scrollTop)
        document.querySelector('#searchBar').style.top = offsetTop + 'px'
      } else {
        document.querySelector('#searchBar').style.top = '0px'
      }
    }
  }
}
</script>
<style lang="less">
  /*侧边导航*/
  .fixes{
    /*margin-top: 98px;*/
    position: fixed;
    top: 623px;
    /*top: 750px; !*开始处于距离顶部300px的位置，之后随着滚动条滚动top值改变，然后在top==100时停止*!*/
    /*left: 75px;*/
    /*margin-top: 102px;*/
    box-sizing: border-box;
    z-index: 2;
    width: 230px;
    background-color: #fff;
  }
</style>
