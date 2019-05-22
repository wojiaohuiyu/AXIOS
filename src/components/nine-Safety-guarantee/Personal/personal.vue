<template>
  <div class="container margin-t-50 margin-b-50">
    <el-tabs :tab-position="tabPosition" style="height: 850px;">
      <el-tab-pane label="我的账户">
        <div class="personal-l-200 f-weight-400">
          <div class="margin-l-30 t-f-40">我的账户</div>
          <div class="margin-t-40 hs-666">
            <div class="t-f-26">
              <span >婴婴婴</span>
              <span>您好</span>
            </div>
            <div class="margin-t-10 margin-l-5">您好 您可在我的账户中追踪订单信息，修改我的账户信息，管理配送地址信息以及咨询心愿清单中的表款信息。</div>
          </div>
          <div class="margin-t-40 clearfix">
            <div class="personal-3 t-f-18 f-weight-600">账户信息</div>
            <div class="margin-l-50 margin-t-30">
              <div class="t-f-18 f-weight-600">婴婴婴</div>
              <div class="t-f-16">d11ed29381f9c262@longines.cn</div>
            </div>
            <div class="fr margin-r-50"><a class="cursor">编辑信息</a></div>
          </div>
          <div class="margin-t-50 clearfix">
            <div class="personal-3 t-f-18 f-weight-600">配送地址</div>
            <div class="margin-l-50 margin-t-30">
              <div>您还没有设置地址信息.
              </div>
            </div>
            <div class="fr margin-r-50"><a class="cursor">新的配送地址</a></div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我的订单">
        <div class="personal-l-200 f-weight-400">
          <div class="margin-l-30 t-f-40">我的订单</div>
          <div class="personal-2 margin-t-40">
            <span class="personal-span margin-r-10">!</span>
            您没有订单</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配送地址薄">
        <div class="personal-l-200 f-weight-400 personal-pc">
          <div class="margin-l-30 t-f-40">配送地址薄</div>
          <div class="personal-3 margin-t-40">新的配送地址</div>
          <div class="clearfix margin-t-50 personal-inpt">
           <div class="width-100">
             <div class="fl">
               <div>*姓名</div>
               <input type="text" pattern="万灰">
             </div>
             <div class="fl">
               <div>*电话</div>
               <input type="text" pattern="万灰">
             </div>
           </div>
            <div class="width-100">
              <div class="fl">
                <div>*省</div>
                <div class="control">
                  <select id="region_id" name="region_id" title="省" class="validate-select required-entry" style="display:block;" data-validate="{required:true}" aria-required="true" defaultvalue="0">
                    <option value="">选择</option>
                    <option value="515">福建省</option>
                    <option value="516">江西省</option>
                    <option value="517">北京</option>
                    <option value="518">河北省</option>
                    <option value="519">黑龙江省</option>
                    <option value="520">吉林省</option>
                    <option value="521">辽宁省</option>
                    <option value="522">内蒙古自治区</option>
                    <option value="523">山东省</option>
                    <option value="524">山西省</option>
                    <option value="525">天津</option>
                    <option value="526">江苏省</option>
                    <option value="527">上海</option>
                    <option value="528">浙江省</option>
                    <option value="529">广东省</option>
                    <option value="530">广西壮族自治区</option>
                    <option value="531">海南省</option>
                    <option value="532">甘肃省</option>
                    <option value="533">贵州省</option>
                    <option value="534">宁夏回族自治区</option>
                    <option value="535">青海省</option>
                    <option value="536">陕西省</option>
                    <option value="537">四川省</option>
                    <option value="538">西藏自治区</option>
                    <option value="539">新疆维吾尔自治区</option>
                    <option value="540">云南省</option>
                    <option value="541">重庆</option>
                    <option value="542">安徽省</option>
                    <option value="543">河南省</option>
                    <option value="544">湖北省</option>
                    <option value="545">湖南省</option>
                  </select>
                  <input type="hidden" id="region" name="region" value="" title="省" class="input-text" aria-required="true">
                </div>
              </div>
              <div class="field city fl">
                <label class="label" for="city"><span>市</span></label>
                <div class="control">
                  <select id="city_id" name="city_id" title="市" class="" aria-required="true" defaultvalue="">
                    <option value="">----</option>
                    <option value="123">上海市</option></select>
                </div>
              </div>
            </div>
            <div class="width-100">
              <div class="field city fl">
                <label class="label" for="city"><span>区</span></label>
                <div class="control">
                  <select id="city_id1" name="city_id" title="区" class="" aria-required="true" defaultvalue="">
                    <option value="">----</option>
                    <option value="123">上海市</option></select>
                </div>
              </div>
              <div class="fl">
                <div>*地址</div>
                <input type="text" pattern="万灰">
              </div>
            </div>
            <div class="width-100">
              <div class="fl">
                <div>*邮政编码</div>
                <input type="text" pattern="">
              </div>
            </div>
            <button class="personal-but">保存</button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="账户信息">
        <div class="personal-l-200 f-weight-400 personal-zh">
          <div class="margin-l-30 t-f-40">账户信息</div>
          <div class="margin-t-50 personal-inpt">
            <div class="margin-b-5">*姓名</div>
            <input type="text">
          </div>
          <div class="margin-t-30 personal-inpt">
            <div class="margin-b-5">*电子邮箱</div>
            <input type="text">
          </div>
          <div class="margin-t-30">
            <div>
              <label class="" for="gender">
                <span>性别</span>
              </label>
            </div>
            <select id="gender" name="gender" title="性别" class="validate-select" data-validate="{required:true}" aria-required="true">
              <option value=""> </option>
              <option value="1" selected="selected">男</option>
              <option value="2">女</option>
              <option value="3">不公开</option>
            </select>
          </div>
          <div class="margin-t-30">
            <div>*生日</div>
            <div class="clearfix margin-t-5">
              <div class="block">
                <el-date-picker
                  v-model="value1"
                  type="datetime"
                  placeholder="选择日期时间">
                </el-date-picker>
              </div>
          </div>
          </div>
          <div class="margin-t-10 personal-inpt">
            <div class="field">
              <label class="label" for="mobile"><span>手机</span></label>
              <div class="control">
                <input type="text" name="mobile" id="mobile" autocomplete="mobile" value="" title="手机" class="input-text validation-failed" data-validate="{ messages:{'validate-phone':'请输入正确的手机号'}}"></div>
            </div>
            <div class="field code margin-t-20">
            <label class="label " for="mobile"><span>手机验证码</span></label>
            <div class="control margin-t-5">
              <input type="text" name="verify_code" id="verify_code" value="" title="手机验证码" class="input-text" data-validate="{required:function(){
                    if($('#mobile').val()!==''){
                        return true;
                    } else{
                        return false;
                    }
                }}">
              <a class="perl-btn cursor" onclick="getVerifyCode('edit_mobile','')">获取验证码</a>
            </div>
          </div>
          </div>
          <div class="margin-t-10">
            <input type="checkbox" name="is_subscribed" title="我愿意订阅浪琴品牌电子期刊" value="1" id="is_subscribed" class="checkbox">
            <label for="is_subscribed" class="label">
              <span>我愿意订阅浪琴品牌电子期刊</span>
            </label>
          </div>
          <button class="perl-btn cursor">保存我的账号</button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我的心愿清单">
        <div class="personal-l-200 f-weight-400">
          <div class="margin-l-30 t-f-40">我的心愿清单</div>
          <div class="personal-2 margin-t-40">
            <span class="personal-span margin-r-10">!</span>
            当前心愿清单为空</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="退货">
        <div class="personal-l-200 f-weight-400">
          <div class="margin-l-30 t-f-40">退货</div>
          <div class="margin-l-30 hs-666">查看退货政策</div>
          <div class="margin-t-40">
            <div class="t-f-26">最新订单</div>
            <div class="personal-2 margin-t-10">
              <div>
                <span class="personal-span margin-r-10">!</span>
                <span>您没有订单</span>
              </div>
              <div class="margin-t-10">
                <span class="personal-span margin-r-10">!</span>
                <span>您没有退货</span>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我的评价">
        <div class="personal-l-200 f-weight-400">
          <div class="margin-l-30 t-f-40">我的评价</div>
          <div class="personal-2 margin-t-40">
            <span class="personal-span margin-r-10">!</span>
            <span>您没有提交评价</span>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="退出"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabPosition: 'left',
      pickerOptions1: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
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
  }
}
</script>
<style lang="less">
  @import "../../../static/css/commonality";
  .width-100{
    width: 100%;
    height: 100px;
  }
  .el-tabs__item {
    border: 1px solid transparent;
  }
  .el-tabs__item {
    width: 190px;
    height: 50px;
    line-height: 50px;
    text-align: left;
    margin-top: 2px;
  }
  .el-tabs--left .el-tabs__item.is-left {
    text-align: left;
  }
  .el-tabs__item:hover {
    background: #003150;
    color: white;
  }
  .el-tabs__item.is-active {
    background: #003150;
    color: white;
    padding-right: 100px;
  }
  .el-tabs__active-bar {
    background-color: transparent;
  }
  .el-tabs__nav-wrap::after {
    background-color: #1c2e53;
    border-right: #1c2e53;
  }
  .el-tabs__nav-wrap {
    overflow: visible;
  }
  .el-tabs--left .el-tabs__nav-wrap.is-left::after, .el-tabs--left .el-tabs__nav-wrap.is-right::after, .el-tabs--right .el-tabs__nav-wrap.is-left::after, .el-tabs--right .el-tabs__nav-wrap.is-right::after{
    margin-right: -70px;
    margin-top: 45px;
  }
  .personal-l-200 {
    margin-left: 200px;
    margin-top: 35px;
  }
  .personal-2 {
    background: #7e97ab;
    color: #fff;
    width: 80%;
    padding: 20px 20px 20px 20px;
  }
  .personal-3 {
    background: #e6eaed;
    width: 80%;
    padding: 20px 20px 20px 50px;
  }
  .personal-inpt input{
    display: inline-block;
    width: 350px;
    height: 45px;
    line-height: 50px;
    padding: 8px 20px;
    font-size: 14px;
    margin-right: 20px;
  }
 .personal-pc select {
    height: 50px;
    font-size: 13px;
    padding: 8px 34px 8px 20px;
    background-position: center right 15px;
    width: 350px;
    margin-right: 20px;
  }
  .personal-zh select {
    height: 50px;
    font-size: 13px;
    padding: 8px 34px 8px 20px;
    background-position: center right 15px;
    width: 200px;
    margin-right: 20px;
  }
  .personal-but {
    width: 100px;
    height: 70px;
    line-height: 68px;
    text-align: center;
    font-size: 20px;
  }
  .personal-span {
    width: 16px;
    height: 16px;
    background: white;
    display: inline-block;
    color: #000;
    border-radius: 20px;
    text-align: center;
    font-size: 13px;
    margin: 0;
    padding: 0;
  }
  .perl-btn{
    background: #003150;
    padding: 15px 30px 15px 30px;
    color: white;
    margin-top: 20px;
  }
</style>
