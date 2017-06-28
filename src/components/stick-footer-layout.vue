<!-- 
底部自动黏贴布局，当内容高度大于当前视窗时，底部自动留在底部而不是黏贴
-->
<template>
    <div class="m-stick-footer-wrapper">
        <div class="m-stick-footer-container" :style="{minHeight: 'calc(100% - ' + footerHeight +')'}">
            <slot></slot>
        </div>
        <div class="m-stick-footer" :style="{background: bgColor, height: footerHeight}">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<style type="text/css">
.m-stick-footer-wrapper{
    padding: 0;
    margin: 0;
    position: absolute;
    height: 100%;
    width: 100%;
}
.m-stick-footer-container{
    width: 100%;
    min-height: calc(100% - 50px);
    box-sizing: border-box;
    overflow: hidden;
}
.m-stick-footer{
    height: 50px;
    background: #F5F7FF;
    overflow: hidden;
}
</style>
<script type="text/javascript">
export default {
  name: 'm-stick-footer-container',
  props: {
    footerHeight: {
      type: String
    },
    bgColor: {
      type: String
    }
  }
}
</script>
