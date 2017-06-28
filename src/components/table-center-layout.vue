<!-- 
  垂直水平居中布局
-->
<template>
<div class="m-table-center-wrapper" :style="{position: position}">
    <div class="m-table-center-container">
        <slot></slot>
    </div>
</div>
</template> 
<style type="text/css">
.m-table-center-wrapper{
    width: 100%;
    height: 100%;
    display: table;
}
.m-table-center-container{
    text-align: center;
    display: table-cell;
    vertical-align: middle;
}
</style>
<script type="text/javascript">
export default {
  name: 'table-center-layout',
  props: {
    position: {
      type: String
    }
  }
}
</script>
