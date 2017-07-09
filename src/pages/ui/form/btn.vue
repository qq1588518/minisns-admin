<template>
<div class="m-container">
    <div class="row">
        <div class="m-col-md-12">
            <div class="box">
                <button class="btn">default</button>
                <button class="btn btn-info">btn-info</button>
                <button class="btn btn-primary">btn-primary</button>
                <button class="btn btn-success">btn-success</button>
                <button class="btn btn-danger">btn-danger</button>
                <button class="btn btn-warning">btn-warning</button>
            </div>
            <div class="box">
                <button class="btn btn-rounded">default</button>
                <button class="btn btn-info btn-rounded">btn-info</button>
                <button class="btn btn-primary btn-rounded">btn-primary</button>
                <button class="btn btn-success btn-rounded">btn-success</button>
                <button class="btn btn-danger btn-rounded">btn-danger</button>
                <button class="btn btn-warning btn-rounded">btn-warning</button>
            </div>
            <div class="box">
                <button class="btn btn-type-plain">default</button>
                <button class="btn btn-info btn-type-plain">btn-info</button>
                <button class="btn btn-primary btn-type-plain">btn-primary</button>
                <button class="btn btn-success btn-type-plain">btn-success</button>
                <button class="btn btn-danger btn-type-plain">btn-danger</button>
                <button class="btn btn-warning btn-type-plain">btn-warning</button>
            </div>
            <div class="box">
                <a href="#" class="btn disabled" >default</a>
                <a href="#" class="btn btn-info disabled"   >btn-info</a>
                <button class="btn btn-primary"  disabled >btn-primary</button>
                <button class="btn btn-success" disabled >btn-success</button>
                <button class="btn btn-danger" disabled >btn-danger</button>
                <button class="btn btn-warning" disabled >btn-warning</button>
            </div>

            <div class="box">
                <button class="btn btn-lg">btn-lg</button>
                <button class="btn btn-info">btn</button>
                <button class="btn btn-primary btn-sm">btn-sm</button>
            </div>
            <div class="box" style="width: 400px">
                <button class="btn btn-block">btn-block</button>
                <button class="btn btn-info btn-block">btn-block</button>
                <button class="btn btn-primary btn-block">btn-block</button>
            </div>

            <div class="box" style="width: 400px">
                <div class="btn-group">
                    <button class="btn">btn-group</button>
                    <button class="btn">btn-group</button>
                    <button class="btn">btn-group</button>
                </div>
                <div class="btn-group">
                    <button class="btn btn-info">btn-group</button>
                    <button class="btn btn-primary">btn-group</button>
                    <button class="btn btn-info">btn-group</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style type="text/css">
.box{
    margin: 0 auto;
    padding: 15px 0;
    text-align: center;
}
</style>
<script type="text/javascript">
export default {
  name: 'btn'
}
</script>
