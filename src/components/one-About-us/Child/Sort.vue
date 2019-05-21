<template>
  <div class="sort-a">
     <div class="container">
       <div class="personal-3">
         <div class="container cpike-page-div4 ">
           <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
             <el-tab-pane label="临时工" name="first">
               <div>
                 <el-steps :active="active" finish-status="success">
                   <el-step title="1 填写服务信息"></el-step>
                   <el-step title="2 预约订单信息确认"></el-step>
                 </el-steps>
                 <div class="basicInfo" v-if="active === 0">
                  <div>
                      <div>
                          <div class="t-f-22 ff7e text-align-c">育婴育儿</div>
                          <div class="hs-666 margin-l-5 0">
                              <div>服务对象：1个月以上的宝宝</div>
                              <div>市场价格：上海地区主要以4000-6000元/月为主</div>
                              <div>服务内容：3-36个月的宝宝专带，辅助家务</div>
                              <div>预订须知：帮助照顾稍大点的宝宝，带睡等，重大节假日可能上浮，拥有特殊技能可能会加价，需要阿姨确认是否接单</div>
                          </div>
                          <div class="sort-3-1">
                            <span class="">服务地址</span>
                            <div class="sort-5-1 margin-l-20">
                              <el-input
                                placeholder="请输入内容"
                                v-model="input10"
                                clearable>
                              </el-input>
                            </div>
                          </div>
                          <div class="sort-4-1">
                            <div class="block">
                              <span class="demonstration margin-r-20">服务时间</span>
                              <el-date-picker
                                v-model="value2"
                                align="right"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="pickerOptions1">
                              </el-date-picker>
                            </div>
                          </div>
                          <div class="sort-6-1 margin-t-50">
                            <span>服务内容</span>
                              <div class="sort-6-1-2">
                                <el-checkbox-group v-model="checkList">
                                  <div class="clearfix">
                                    <span class="sort-6-1-span">
                                      <el-checkbox label="复选框 u">
                                        <p class="margin-t-5">夜间照料</p>
                                        <p class="margin-t-10">夜间照料新生儿和喂奶等服务</p>
                                      </el-checkbox>
                                    </span>
                                    <span class="sort-6-1-span">
                                      <el-checkbox label="复选框 5">
                                        <p class="margin-t-5">夜间照料</p>
                                        <p class="margin-t-10">夜间照料新生儿和喂奶等服务</p>
                                      </el-checkbox>
                                    </span>
                                    <span class="sort-6-1-span">
                                      <el-checkbox label="复选框 o">
                                        <p class="margin-t-5">夜间照料</p>
                                        <p class="margin-t-10">夜间照料新生儿和喂奶等服务</p>
                                      </el-checkbox>
                                    </span>
                                  </div>
                                  <div class="clearfix">
                                    <span class="sort-6-1-span">
                                      <el-checkbox label="复选框 q">
                                        <p class="margin-t-5">夜间照料</p>
                                        <p class="margin-t-10">夜间照料新生儿和喂奶等服务</p>
                                      </el-checkbox>
                                    </span>
                                    <span class="sort-6-1-span">
                                      <el-checkbox label="复选框 C">
                                        <p class="margin-t-5">夜间照料</p>
                                        <p class="margin-t-10">夜间照料新生儿和喂奶等服务</p>
                                      </el-checkbox>
                                    </span>
                                  </div>
                                </el-checkbox-group>
                              </div>
                          </div>
                      </div>
                  </div>
                 </div>
                 <div class="basicInfo" v-if="active === 1">
                   <div>
                      <div class="ff7e t-f-24 margin-t-50 text-align-c">24小时内只能提交一个相同类型的预约，已经存在预约</div>
                      <div class="text-align-c margin-t-10 margin-b-20">请您的到 <a class="ff7e">会员中心</a> 随时注意您的订单情况</div>
                      <div class="sort-dd-1 ">
                          <div class="t-f-20 sort-dd-1-1 hs-666">订单信息</div>
                          <div class="margin-l-50">
                            <div class=" margin-t-20">
                              <div class="t-f-22">
                                订单状态：<a class="ff7e">订单关闭</a>   | <a>剩余</a>
                                <a class="ff7e">1天21时29分18秒</a>
                              </div>
                            </div>
                            <div class="margin-t-10">
                              <span>订单编号：95627430</span>
                              <span>所选门店：门店暂未接单</span>
                            </div>
                            <div class="margin-t-10">
                              <span>需求工种：临时工</span>
                              <span>联系门店：门店暂未接单</span>
                            </div>
                            <div class="margin-t-10">
                              <span>申请时间：2019/5/17 15:43:53</span>
                              <span>面试时间：2019-05-23</span>
                            </div>
                            <div class="margin-t-10 margin-b-30">
                              <span>服务地址：上海杨浦区eward</span>
                              <span>工作内容： 育婴育儿</span>
                            </div>
                          </div>
                      </div>
                      <div class="sort-dd-1 ">
                          <div class="margin-l-20">我的情况</div>
                          <div class="margin-t-20 margin-l-50">
                            <div>
                              <span>联系人：dsfadsfad</span>
                              <span>联系电话：18885666894</span>
                            </div>
                            <div class="margin-t-10 margin-b-20">
                              <span>需要支付：￥60元</span>
                              <span>服务时长 ：2小时</span>
                            </div>
                          </div>
                      </div>
                   </div>
                 </div>
                 <div class="sort-xyb margin-t-50">
                   <el-button @click="next" v-if="active ==0">
                     <a class="sort-btn">下一步</a>
                   </el-button>
                   <el-button v-if="active == 1">
                     <a class="sort-btn">快去会员中心查看订单</a>
                   </el-button>
                 </div>
               </div>
             </el-tab-pane>
             <el-tab-pane label="月嫂" name="second">
               <div>2</div>
             </el-tab-pane>
             <el-tab-pane label="育婴育儿" name="third">
               <div>3</div>
             </el-tab-pane>
             <el-tab-pane label="入户早教" name="fourth2">
               <div>4</div>
             </el-tab-pane>
             <el-tab-pane label="护理老人" name="fourth3">
               <div>5</div>
             </el-tab-pane>
             <el-tab-pane label="VIP服务" name="fourth4">
               <div>54</div>
             </el-tab-pane>
             <el-tab-pane label="固定钟点工" name="fourth5">
               <div>5wqe</div>
             </el-tab-pane>
             <el-tab-pane label="全日制家政" name="fourth6">
               <div>5dsf</div>
             </el-tab-pane>
             <el-tab-pane label="住家型家政" name="fourth7">
               <div>554</div>
             </el-tab-pane>
           </el-tabs>
         </div>
       </div>
     </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checkList: ['选中且禁用', '复选框 A'],
      input10: '',
      activeName2: 'first',
      active: 0,
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      value1: '',
      value2: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    prev () {
      --this.active
      if (this.active < 0) this.active = 0
    },
    next () {
      if (this.active++ > 1) this.active = 0
    },
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style>
  .width-100{
    width: 100%;
  }
  .sort-a {
    width: 100%;
    height: 700px;
    background: #f2eadf;
    margin-bottom: 50px;
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
  }
  .el-tabs__nav is-top .el-tabs__item {
    font-size: 20px;
  }
  .el-tabs__item is-top is-active {
    font-size: 20px;
  }
  .sort-4-1 {
    position: relative;
    top: 20px;
    width: 100%;
  }
  .ff7e {
    color: #ff7e00;
  }
  .sort-5-1 {
    margin-top: 50px;
    width: 500px;
    display: inline-block;
  }
  .sort-6-1-span {
    height: 70px;
    width: 208px;
    background-color: #f4f4f4;
    margin-top: 8px;
    cursor: pointer;
    margin-right: 8px;
    border:1px solid transparent;
    display: block;
    float: left;
  }
  .sort-6-1-2 {
    margin-left: 100px;
    width: 100%;
    height: 150px;
  }
  .sort-btn{
    width: 500px;
    height: 60px;
    line-height: 60px;
    background: #fd8b1b;
    text-align: center;
    color: white;
    display: block;
    padding: 0;
  }
  .el-button {
    padding: 0;
  }
  .sort-xyb {
    width: 100%;
    text-align: center;
  }
  .sort-dd-1 {
    width: 80%;
    border: 1px solid darkgrey;
    margin: auto;
    background: white;
  }
  .sort-dd-1 span{
    width: 300px;
    display: inline-block;
  }
  .sort-dd-1-1 {
    position: relative;
    left: 50px;
  }
  .width-200 {
    width: 200px;
  }
</style>
