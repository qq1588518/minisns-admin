<template>
<div class="m-container">
    <div class="row">
        <div class="m-col-md-12 box m-scrollbar">
            <h1>h1-1</h1>
            <h1>h1-2</h1>
            <h1>h1-3</h1>
            <h1>h1-4</h1>
            <h1>h1-5</h1>
            <h1>h1-6</h1>
            <h1>h1-7</h1>
            <h1>h1-8</h1>
            <h1>h1-9</h1>
            <h1>h1-10</h1>
            <div style="height: 10px; width: 200%; background: #ccc"></div>
        </div>
        <div class="m-col-md-12 box m-scrollbar m-scrollbar-mini">
            <h1>h1-1</h1>
            <h1>h1-2</h1>
            <h1>h1-3</h1>
            <h1>h1-4</h1>
            <h1>h1-5</h1>
            <h1>h1-6</h1>
            <h1>h1-7</h1>
            <h1>h1-8</h1>
            <h1>h1-9</h1>
            <h1>h1-10</h1>
            <div style="height: 10px; width: 200%; background: #ccc"></div>
        </div>
        <div class="m-col-md-12 box m-scrollbar m-scrollbar-theme-white" style="background: #282C34">
            <h1>h1-1</h1>
            <h1>h1-2</h1>
            <h1>h1-3</h1>
            <h1>h1-4</h1>
            <h1>h1-5</h1>
            <h1>h1-6</h1>
            <h1>h1-7</h1>
            <h1>h1-8</h1>
            <h1>h1-9</h1>
            <h1>h1-10</h1>
            <div style="height: 10px; width: 200%; background: #ccc"></div>
        </div>
        <div class="m-col-md-12 box m-scrollbar m-scrollbar-theme-white m-scrollbar-mini " style="background: #282C34">
            <h1>h1-1</h1>
            <h1>h1-2</h1>
            <h1>h1-3</h1>
            <h1>h1-4</h1>
            <h1>h1-5</h1>
            <h1>h1-6</h1>
            <h1>h1-7</h1>
            <h1>h1-8</h1>
            <h1>h1-9</h1>
            <h1>h1-10</h1>
            <div style="height: 10px; width: 200%; background: #ccc"></div>
        </div>
    </div>
</div>
</template>
<style type="text/css" scoped>
.box{
    height: 300px;
    overflow: auto;
    margin-bottom: 50px;
}
</style>
<style lang="less">
// reference表示只当做库使用，不会编译输出
@import (reference) '../../assets/ui/export.less';
body{
  .m-scrollbar();
}
</style>
<script type="text/javascript">
export default {
  name: 'scrollbar'
}
</script>


