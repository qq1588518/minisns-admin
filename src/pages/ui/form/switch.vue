<template>
<table-center-layout position="absolute">
    <div class="box">
        <label class="m-switch">
            <input id="test" type="checkbox" checked class="m-switch-trigger">
        </label>
        <label class="m-switch m-switch-success">
            <input id="test" type="checkbox" checked class="m-switch-trigger">
        </label>
        <label class="m-switch m-switch-danger">
            <input id="test" type="checkbox" checked class="m-switch-trigger">
        </label>
        <label class="m-switch m-switch-primary">
            <input id="test" type="checkbox" checked class="m-switch-trigger">
        </label>
        <label class="m-switch m-switch-warning">
            <input id="test" type="checkbox" checked class="m-switch-trigger">
        </label>
        <br><br>
        <label class="m-switch m-switch-lg">
            <input id="test" type="checkbox" checked class="m-switch-trigger">
        </label>
        <label class="m-switch">
            <input id="test" type="checkbox" checked class="m-switch-trigger">
        </label>
        <label class="m-switch m-switch-sm">
            <input id="test" type="checkbox" checked class="m-switch-trigger">
        </label>
        <br><br>

        <label class="m-switch">
            <input id="test" type="radio" name="test" class="m-switch-trigger">
        </label>

        <span class="m-switch">
            <input type="radio" name="test" class="m-switch-trigger" checked>
        </span>
        
        <label class="m-switch">
            <input id="test" type="checkbox" disabled checked class="m-switch-trigger">
        </label>
        <label class="m-switch">
            <input id="test" type="checkbox" disabled class="m-switch-trigger">
        </label>

    </div>
    <div class="box" style="background: #90959B;">
        <p>m-switch-invert</p>
        <label class="m-switch m-switch-invert">
            <input id="test" type="checkbox" checked class="m-switch-trigger">
        </label>
        <label class="m-switch m-switch-invert m-switch-success">
            <input id="test" type="checkbox" checked class="m-switch-trigger">
        </label>
        <label class="m-switch m-switch-invert m-switch-danger">
            <input id="test" type="checkbox" checked class="m-switch-trigger">
        </label>
        <label class="m-switch m-switch-invert m-switch-primary">
            <input id="test" type="checkbox" checked class="m-switch-trigger">
        </label>
        <label class="m-switch m-switch-invert m-switch-warning">
            <input id="test" type="checkbox" checked class="m-switch-trigger">
        </label>
        <br><br>
    </div>
</table-center-layout>
</template>

<style lang="less">
// @import '../../../assets/ui/switch.less';

.box{
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
    color: #293136;
}
</style>
<script type="text/javascript">
import tableCenterLayout from '@/components/table-center-layout'
export default {
  name: 'switch',
  components: {
    tableCenterLayout
  }
}
</script>
