<style type="text/css">
.error-box{
  margin: 0 auto;
  max-width: 500px;
  padding: 20px;
  border-radius: 3px;
  background: rgba(255,255,255, 0.93);
  box-shadow: 7px 8px 0 0px rgba(0, 0, 0, 0.06);
}
.error-text-404{
  font-size: 6rem;
  font-family: 'line-font';
  font-style: normal;
  font-weight: lighter;
  color: #DE4036;
  margin: 0px;
}
.error-info-cn,
.error-info-en{
  font-size: 1.3rem;
  font-style: normal;
  font-weight: lighter;
  color: #333;
  margin: 5px;
}
.error-info-en{
  font-size: 1rem;
  color: #888;
}
.error-btn{
  padding: 6px 20px;
  margin-top: 30px;
  border-radius: 40px;
}
</style>
<template>
  <table-center-layout>
    <div class="error-box">
      <h1 class="error-text-404">404</h1>
      <p class="error-info-cn">对不起，该页面没找到</p>
      <p class="error-info-en">Sorry, the page is not found.</p>
      <a href="/" class="error-btn btn btn-info">返回首页</a>

      <footer class="footer" style="margin-top: 40px">
        <p class="copyright"><img src="../../assets/imgs/logo.png" class="logo" alt="">&copy;微社区版权所有&nbsp;make by <a href="https://mengdu.github.io" target="_blank">@lanyue</a></p>
      </footer>
    </div>
  </table-center-layout>
</template>

<script type="text/javascript">
import tableCenterLayout from '@/components/table-center-layout'
export default {
  name: 'error404',
  components: {
    tableCenterLayout
  }
}
</script>
