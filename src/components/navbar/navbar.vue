<style>
.m-navbar{
  min-height: 50px;
  background-color: #fff;
  padding: 0 15px;
}
.m-navbar::before,
.m-navbar::after{
  content: "";
  display: table;
  clear: both;
}
</style>
<template>
<div class="m-navbar"><slot></slot></div>
</template>

<script>
export default {
  name: 'MNavbar'
}
</script>
