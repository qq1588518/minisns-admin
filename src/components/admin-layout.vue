<style>
  html,
  body{
    height: 100%;
    width: 100%;
  }
</style>
<style scoped>
  .admin-box,
  .admin-header,
  .admin-sidebar,
  .admin-body,
  .admin-footer{
    box-sizing: border-box;
  }
  .admin-box{
    margin: 0 auto;
    width: 100%;
    /*width: 960px;*/
    position: relative;
    min-height: 100%;
    background: #ECF0F5;
    z-index: 0;
    padding-top: 50px;
  }
  .admin-box::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    display: block;
    width: inherit;
    background-color: inherit;
  }
  
  .admin-header{
    margin-left: 200px;
    /*width: 100%;*/
    left: 0;
    right: 0;
    position: absolute;
    top: 0;
    min-height: 50px;
    background-color: #16AAD8;
    z-index: 100;
  }
  .admin-sidebar-header{
    width: 200px;
    height: 50px;
    margin-top: -50px;
    float: left;
    background: #1199C4;
  }
  .admin-sidebar{
    width: 200px;
    float: left;
    background-color: #1C2B36;
  }
  .admin-sidebar::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    width: inherit;
    background: inherit;
    display: block;
  }
  .admin-body{
    padding: 15px;
    margin-left: 200px;
    padding-bottom: 50px;
    /*overflow: auto; 使.admin-body自沾满左边剩余位置 */
  }
  .admin-body:before,
  .admin-body:after{
    content: "";
    display: table;
  }
  .admin-body:after{
    clear: both;
  }
  .footer{
    margin-left: 200px;
    height: 50px;
    background: #ccc;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1005;
  }
  /* 设置 */
  .admin-box.admin-header-fixed .admin-header{
    position: fixed;
  }
  .admin-box.admin-sidebar-fixed .admin-sidebar{
    position: fixed;
    bottom: 0;
    top: 50px;
  }
  .admin-box.admin-sidebar-fixed .admin-sidebar-header{
    position: fixed;
    margin-top: 0;
    top: 0;
  }
</style>
<template>
<div class="admin-box" 
  :class="[{'admin-header-fixed': headFixed, 'admin-sidebar-fixed': sideFixed}, boxedLayout]"
  >
  
  <header class="admin-header" :class="[boxedLayout]">
    <slot name="header"></slot>
  </header>
  <div class="admin-sidebar-header"></div>
  <aside class="admin-sidebar">
    <slot name="sidebar"></slot>
  </aside>
  <section class="admin-body">
    <slot></slot>
  </section>
  <footer class="footer">footer</footer>
</div>
</template>


<script type="text/javascript">
export default {
  name: 'admin-layout',
  props: {
    'head-fixed': {
      type: Boolean,
      default: false
    },
    'side-fixed': {
      type: Boolean,
      default: false
    },
    'boxed-layout': {
      type: String,
      default: ''
    }
  },
  created () {
    console.log(this.$props)
  }
}
</script>
