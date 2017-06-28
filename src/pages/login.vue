<style type="text/css">
  .list-item-input{
      width: 100%;
      line-height: 2.5;
      padding: 0 10px;
      border: none;
      outline: none;
      box-sizing: border-box;
  }
  .list-item-input:active{

  }
  .m-form{
      margin: 0 auto;
      display: block;
      width: auto;
      margin-bottom: 20px;
  }
  .m-form .logo{
    max-width: 128px;
    margin-bottom: 10px;
  }
  .m-form-user-img{
    width: 128px;
    height: 128px;
    border-radius: 128px;
    border: solid 3px rgba(255, 255, 255, 0.13);
    box-shadow: 0 1px 3px rgba(4, 4, 4, 0.05);
    margin-bottom: 10px;
  }
  .m-form .m-form-title{
      margin-top: 20px;
      font-size: 2em;
  }
  .m-form .m-form-text-info{
      padding: 10px  0;
      color: #95A1BA;
  }
  .m-form .m-form-msg{
      padding: 10px 0;
      color: #f54848;
  }
  .m-form .btn{register
      border-radius: 3px;
      border: none;
  }
  .text-align-center{
      text-align: center;
  }
  .list-group-item{
      padding: 6px 10px;
      border: solid 1px #E7ECEE;
  }
  .m-form .btn{
      border-radius: 3px;
  }
  .m-form .submit{

  }
  @media (max-width: 768px) {
    .m-form-user-img{
        width: 64px;
        height: 64px;
    }
  }
  @media (min-width: 960px) {
      .m-form{
          width: 330px;
      }
  }
</style>
<template>

<stick-footer-layout>
  <table-center-layout style="position: absolute; height:calc(100% - 50px)">
  <form class="m-form" action="#">
    <div class="text-align-center">
        <a href="/" title="返回首页"><img src="../assets/imgs/logo.png" alt="" class="logo"></a>
    </div>
    <!-- <div class="text-align-center">
        <img src="imgs/user1-128x128.jpg" alt="" class="m-form-user-img">
    </div> -->
    <p class="m-form-text-info text-align-center" style="margin-bottom: 50px">你好，管理员；请输入登录凭证</p>
    <div class="list-group">
        <div class="list-group-item">
            <input type="text" class="list-item-input" autocomplete="off" name="tel" placeholder="手机号/用户名/邮箱" required="">
        </div>
        <div class="list-group-item">
            <input type="password" class="list-item-input"  autocomplete="off" name="pwd" placeholder="密码" required="">
        </div>
    </div>
    <!-- <p class="m-form-msg">请填写正确的账号信息</p> -->
    <!-- <div class="checkbox">
        <label class="i-checks">
          <input type="checkbox">记住账号
        </label>
    </div> -->
    <button type="submit" @click.stop="handleLogin" class="btn btn-lg btn-info btn-block submit">登录</button>
    <p class="m-form-text-info">
    <a href="reset.html" class="f-left">忘记密码？</a>
    <a href="register.html" class="f-right">还没有账号？</a>
    </p>
  </form>
  </table-center-layout> 
  <template slot="footer">
    <footer class="footer" style="margin-top: 10px">
      <p class="copyright"><img src="../assets/imgs/logo.png" class="logo" alt="">&copy;微社区版权所有&nbsp;make by <a href="https://mengdu.github.io" target="_blank">@lanyue</a></p>
    </footer>
  </template>
</stick-footer-layout>
  

</template>

<script type="text/javascript">
import stickFooterLayout from '@/components/stick-footer-layout'
import tableCenterLayout from '@/components/table-center-layout'
export default {
  name: 'login',
  components: {
    stickFooterLayout,
    tableCenterLayout
  },
  methods: {
    handleLogin () {
      console.log('login')
      window.sessionStorage.setItem('token', '{}')
      this.$router.push({path: '/'})
    }
  }
}
</script>
