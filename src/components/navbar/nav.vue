<style type="text/css">
.m-nav{
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  float: left;
}
.m-nav.right{
  float: right;
}
.m-nav::before,
.m-nav::after{
  content: "";
  display: table;
  clear: both;
}
.m-nav .m-nav-item{
  height: 100%;
  display: inline-block;
  line-height: 30px;
  float: left;
  color: #282C34;
}
.m-nav .m-nav-item>a:hover{
  background-color: rgba(0,0,0, 0.1);
}
.m-nav .m-nav-item>a{
  padding: 10px 15px;
  display: block;
  height: 100%;
  color: #282C34;
}
</style>
<template>
<ul class="m-nav"
  :class="[float]"
  ><slot></slot></ul>
</template>

<script>
export default {
  name: 'MNav',
  props: {
    float: {
      type: String,
      default: ''
    }
  }
}
</script>
