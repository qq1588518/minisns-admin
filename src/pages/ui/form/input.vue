<style type="text/css">
  .box{
    margin-top: 100px;
  }
</style>
<template>
<div class="m-container">
    <div class="row">
        <div class="box">
            <input type="text" placeholder="输入框" class="m-input">
            <input type="text" placeholder="disabled" class="m-input" disabled>
            <input type="text" placeholder="success" class="m-input m-input-success">
            <input type="text" placeholder="danger" class="m-input m-input-danger">
            <textarea class="m-input block-input"></textarea>
        </div>
    </div>
</div>
</template>
<script type="text/javascript">
export default {
  name: 'input'
}
</script>
