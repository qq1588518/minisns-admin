<template>
<div class="admin-box">
  <header class="admin-header">
    <slot name="header"></slot>
  </header>
  <div class="admin-sidebar-placeholder"></div>
  <aside class="admin-sidebar">
    <slot name="sidebar"></slot>
  </aside>
  <section class="admin-body">
    <slot></slot>
  </section>
</div>
</template>
<style scoped>
.admin-box{
  width: 100%;
  position: relative;
  min-height: 100vh;/*使侧边栏保持沾满窗口*/
  background: #ECF0F5;
}
.admin-header{
  min-height: 50px;
  background-color: #16AAD8;
}
/* 占位 */
.admin-sidebar-placeholder{
  height: 1px;
  float: left;
}
.admin-sidebar-placeholder,
.admin-sidebar{
  width: 230px;
}
.admin-sidebar{
  position: absolute;
  background-color: #1C2B36;
  bottom: 0;
  top: 50px;
}
.admin-body{
  padding: 15px;
  overflow: auto;/* 使.admin-body自沾满左边剩余位置 */
}
</style>



<script type="text/javascript">
export default {
  name: 'admin-layout',
  created () {
    console.log(this.$props)
  }
}
</script>
