<template>
    <div class="container margin-b-50">
      <div class="classification-div1">
          <div class="clearfix">
            <div>
                <div class="fr margin-t-20 margin-r-15 cursor">
                  <router-link to="/one/sort">
                    <img src="../../../../static/images/one-index_btn1.gif" alt="">
                  </router-link>
                </div>
                <div class="margin-l-20 ">
                  <img src="../../../../static/images/one-index_sort_title.gif" alt="">
                </div>
                </div>
                <div class="classification-img ">
                  <img class="" src="../../../../static/images/one-index_sort_bg.gif" alt="">
                </div>
            </div>
            <div class="classification-div2">
                <ul class="classification-ul clearfix">
                    <li>
                        <div class="">
                          <img src="../../../../static/images/one-index_sort_1.jpg" alt="">
                        </div>
                      <div class="classification-ul-li-tp2">
                        <img src="../../../../static/images/one-index_sort_1b.jpg" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="">
                        <img src="../../../../static/images/one-index_sort_2.jpg" alt="">
                      </div>
                      <div class="classification-ul-li-tp2">
                        <img src="../../../../static/images/one-index_sort_2b.jpg" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="">
                        <img src="../../../../static/images/one-index_sort_3.jpg" alt="">
                      </div>
                      <div class="classification-ul-li-tp2">
                        <img src="../../../../static/images/one-index_sort_3b.jpg" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="">
                        <img src="../../../../static/images/one-index_sort_4.jpg" alt="">
                      </div>
                      <div class="classification-ul-li-tp2">
                        <img src="../../../../static/images/one-index_sort_4b.jpg" alt="">
                      </div>
                    </li>
                </ul>
                <ul class="classification-ul2">
                    <li>
                      <div class="">
                        <img src="../../../../static/images/one-index_sort_7.jpg" alt="">
                      </div>
                      <div class="classification-ul-li-tp2">
                        <img src="../../../../static/images/one-index_sort_7b.jpg" alt="">
                      </div>
                    </li>
                  <li>
                    <div class="">
                      <img src="../../../../static/images/one-index_sort_10.jpg" alt="">
                    </div>
                    <div class="classification-ul-li-tp2">
                      <img src="../../../../static/images/one-index_sort_10b.jpg" alt="">
                    </div>
                  </li>
                </ul>
            </div>
      </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
  @import "../../../../static/css/commonality";
  .classification-div1 {
    position: relative;
    width: 100%;
    height: 730px;
    background: white;
    border:1px solid darkgrey;
  }
  .classification-img {
    margin: 0 30px 0 100px;
  }
  .classification-div2 {
    position: absolute;
    top: 150px;
    left: 180px;
  }
  .classification-ul li{
    width: 260px;
    height: 140px;
    overflow: hidden;
    float: left;
    margin: 10px 0 10px 10px;
    &:hover{
      .classification-ul-li-tp2{
        margin: -144px 0;
      }
    }
  }
  .classification-ul2 {
    position: relative;
    top: 180px;
    left: -273px;
  }
  .classification-ul2 li{
    width: 190px;
    height: 140px;
    overflow: hidden;
    float: left;
    margin: 10px 0 10px 10px;
    &:hover{
      .classification-ul-li-tp2{
        margin: -144px 0;
      }
    }
    }
</style>
