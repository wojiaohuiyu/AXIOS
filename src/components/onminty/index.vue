<template>
  <div class="folower">
    <div class="header">
      <div class="logo-con w clearfix">
        <a href="#" class="logo "></a>
        <div class="logo-title">欢迎登录</div>
      </div>
    </div>
    <div class="over">
      <div class="login">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="手机" prop="phone">
            <el-input v-model="ruleForm.phone" placeholder="手机号登录"></el-input>
          </el-form-item>
          <el-form-item label="密码"  prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码"></el-input>
          </el-form-item>
          <div class="msg">
            <div>{{ruleForm.msg}}</div>
          </div>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
        <!--<router-link to="/sixz">快去注册吧！</router-link>-->
      </div>
    </div>
  </div>
</template>
<script>
  import {beefList} from 'api/request_hy'
  export default {
    data () {
      var phone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号错误'))
        } else {
          var reg = /^1[34578]\d{9}$/
          if (reg.test(value) === false) {
            return callback(new Error('请输入正确的账号'))
          } else {
            callback()
          }
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      return {
        ruleForm: {
          msg: '',
          pass: '',
          phone: ''
        },
        activeName: 'second',
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          phone: [
            { validator: phone, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (ruleForm) {
        // 手机
        // let phone = this.ruleForm.phone
        // 密码
        // let pwd = this.ruleForm.pass
        // if (phone !== '' && pwd !== '' && pic === '验证成功') {
        //   console.log(111)
        // }
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            beefList({
              'useruphone': this.ruleForm.phone,
              'userupassword': this.ruleForm.pass
            }, (res) => {
              console.log(res)
              alert(res.message)
              window.localStorage.setItem('token',res.success)
              window.localStorage.setItem('user',JSON.stringify(res.telphone))
              // 跳转到首页
              if (res.success === true) {
                this.$router.push({path: '/eight'})
              }
            })
          } else {
            return false
          }
        })
      },
      onSuccess () {
        this.ruleForm.msg = '验证成功'
      },
      onFail () {
        this.ruleForm.msg = '验证失败，请重新验证'
      },
      onRefresh () {
        this.ruleForm.msg = '已刷新'
      }
    }
  }
</script>
<style lang="less" scoped>
  .header{
    height: 150px;
  }
  .login{
    width: 300px;
    margin: 0 auto;
  }
  .w{
    width: 1200px;
    margin: 0 auto;
  }
  .header .logo{
    background: url(./images/2.png);
  }
  .header .logo-title{
    float: left;
    height: 34px;
    line-height: 125px;
    font-size: 24px;
    color: #333;
    margin-top: 34px;
  }
  .header .logo {
    width: 140px;
    height: 140px;
    float: left;
    margin-top: 24px;
  }
  .pages{
    height: 470px;
  }
  .folower{
    background-image: url("./images/1.jpg");
    background-size: 100% 100%;
  }
  .over{
    margin: 0 auto;
    width: 1200px;
    padding: 10% 0 10% 0;
  }
  .cojjef{
    max-width: 1200px;
    margin: 0 auto;
    height: 100px;
  }
  .banner{
    background-image: url("./images/1.jpg");
    width: 100%;
    height: 600px;
  }
  .banner-row{
    max-width: 1200px;
    margin: 0 auto;
  }
  .cofe{
    width: 20%;
    height: 100%;
  }
  .cofe .bdhome{
    float: left;
    font-size: 16px;
  }
  .u_menu_item{
    padding: 4px 11px 7px;
  }
  .u_menu_item a{
    color: white;
    &:hover{
      color: #E95513;
    }
  }
  .pyte{
    width: 202px;
  }
  .logined{
    margin-top: 10px;
    font-size: 14px;
    line-height: 22px;
    color: #1ab2ff;
    cursor: pointer;
    text-align: right;
    text-indent: 8px;
  }
</style>
