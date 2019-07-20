<template>
  <div class="login-container">
    <el-card class="login-box">
      <img src="../../assets/images/logo_index.png" alt />
      <el-form ref="form" :model="loginForm" :rules="rules" status-icon>
        <el-form-item prop='moblie'>
          <el-input v-model="loginForm.moblie" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop='code'>
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:240px;margin-right:6px"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
            <el-checkbox v-model="loginForm.checked" style="float:left">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    var diy = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号码格式不正确'))
      }
    }
    return {
      loginForm: {
        moblie: '',
        code: '',
        checked: true
      },
      rules: {
        moblie: [ { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: diy, trigger: 'blur' } ],
        code: [ { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码必须为6位有效数字', trigger: 'blur' } ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  .login-box {
    width: 400px;
    height: 340px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      width: 200px;
      margin: 10px auto;
    }
  }
}
</style>
