<template>
  <div>
    <!--大图 前所未有的市场机遇-->
    <partnership/>
    <!--e家政可以给你带来什么？ 加入e家政 e家政如何全程帮扶创业？-->
    <housekeeping/>
    <!--全品类热销服务 加盟e家政后 3步盈利-->
    <Selling/>
    <!--基础项目收益测算 增值项目盈利测算-->
    <Calculation/>
    <!--现在申请e家政城市合伙人 战略合作伙伴-->
    <Partner/>
  </div>
</template>
<script>
import partnership from './Partnership/partnership.vue' //
import housekeeping from './Housekeeping/housekeeping.vue'
import Selling from './Selling/selling .vue'
import Calculation from './Calculation/calculation.vue'
import Partner from './Partner/partner.vue' //
export default {
  components: {
    partnership,
    housekeeping,
    Selling,
    Calculation,
    Partner
  }
}
</script>
<style>
</style>
