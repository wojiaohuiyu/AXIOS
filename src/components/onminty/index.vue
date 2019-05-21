<template>
  <div class="folower">
    <div class="header">
      <div class="logo-con w clearfix">
        <a href="#" class="logo "></a>
        <div class="logo-title">欢迎登录</div>
      </div>
    </div>
    <div class="pages">
      <el-row type="flex" justify="center" class="over">
        <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px" >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="user.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input v-model="user.pass" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          if (this.user.name === '123' && this.user.pass === '123') {
            this.$notify({
              type: 'success',
              message: '欢迎你,' + this.user.name + '!',
              duration: 3000
            })
            this.$router.replace('/eight')
          } else {
            this.$message({
              type: 'error',
              message: '用户名或密码错误',
              showClose: true
            })
          }
        }
        else {
          return false
        }
      })
    }
  },
  data () {
    return {
      user: {},
      rules: {
        name: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        pass: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ]
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .header{
    height: 150px;
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
</style>
