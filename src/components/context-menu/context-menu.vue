<style lang="less">
  .app-context-menu{
    background: #fff;
    box-shadow: 0 1px 10px rgba(0,0,0,.29);
  }
  .context-menu{
    padding: 9px 0;
  }
  .context-menu .context-menu-item{

    &:hover{
      background: #F6F6F6;
    }
  }
  
</style>
<template>
<div class="app-context-menu">
  <ul class="context-menu">
    <li class="context-menu-item">关于</li>
    <li class="context-menu-item"><i class="fa fa-info-circle" aria-hidden="true"></i>关于</li>
  </ul>
</div>
</template>
<script type="text/javascript">
export default {
  name: 'context-menu'
}
</script>
