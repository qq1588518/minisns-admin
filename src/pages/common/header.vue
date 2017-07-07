<style>
   .m-navbar{
    background-color: inherit !important;
    color: inherit;
  } 
  .nav-logo{
    height: 32px;
    margin-top: 10px;
  }
  .m-navbar .m-nav .m-nav-item,
  .m-navbar .m-nav .m-nav-item .m-dropdown > a,
  .m-navbar .m-nav .m-nav-item > a{
    color: inherit;
  } 
</style>
<template>

<m-navbar>
  <m-nav-header>
    <a href="#" class="m-navbar-brand" slot="navbar-brand"><img src="../../assets/imgs/logo.png" class="nav-logo"></a>
    
  </m-nav-header>
  <m-nav>
    <m-nav-item active><a href="#">首页</a></m-nav-item>
    <m-nav-item><a href="#">产品</a></m-nav-item>
    <m-nav-item><a href="#">关于</a></m-nav-item>
    <m-nav-item><a href="#">登录</a></m-nav-item>
  </m-nav>
  <m-nav float="right">
    <m-nav-item><a href="#">首页</a></m-nav-item>
    <m-nav-item><a href="#">产品</a></m-nav-item>
    <m-nav-item><a href="#">关于</a></m-nav-item>
    <m-nav-item><a href="#">登录</a></m-nav-item>
    <m-nav-item>
      <m-dropdown menu-align="right">
        <a href="#" style="display: inline-block; padding: 10px;">用户中心 <span class="caret"></span></a>
        <m-dropdown-menu>
          <m-dropdown-item>用户中心</m-dropdown-item>
          <m-dropdown-item command="article">文章</m-dropdown-item>
          <m-dropdown-item @click.native.stop="test" disabled>收藏</m-dropdown-item>
          <div class="test-line"></div>
          <m-dropdown-item command="exit">退出</m-dropdown-item>
        </m-dropdown-menu>
      </m-dropdown>
    </m-nav-item>
    
  </m-nav>
</m-navbar>


</template>

<script>
export default {
  name: 'header'
}
</script>
