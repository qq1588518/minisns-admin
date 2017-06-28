<template>
    <div class="m-container alert-box">
        <div class="row">
            <div class="m-col-md-12">
                <div class="m-alert">默认的 alert</div>
                <div class="m-alert m-alert-info">info样式 m-alert m-alert-info</div>
                <div class="m-alert m-alert-primary">primary样式 m-alert m-alert-primary</div>
                <div class="m-alert m-alert-success">success样式 m-alert m-alert-success
                    <span class="m-alert-close-btn"></span>
                </div>
                <div class="m-alert m-alert-danger">danger样式 m-alert m-alert-danger</div>
                <div class="m-alert m-alert-warning">warning样式 m-alert m-alert-warning 
                    <span class="m-alert-close-btn"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
  name: 'alert'
}

</script>
<style type="text/css">
.alert-box{
    margin-top: 100px;
}
</style>
