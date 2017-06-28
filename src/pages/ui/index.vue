<template>
    <table-center-layout position="absolute" style="background: #F5F7FC">
        <div class="ui-router-box">
            <h1>ui router</h1>
            <ul class="list-group ">
                <li v-for="path in UiPaths" class="list-group-item ui-router no-padding" >
                    <router-link :to="{name: path.name}"># {{path.path}}</router-link>
                </li>
            </ul>
        </div>
    </table-center-layout>
</template>
<style>
.ui-router-box{
    width: 40%;
    margin: 0 auto;
}
.ui-router{
    text-align: left;
    list-style: none;
    line-height: 30px;
    font-size: 1.3em;
}
.ui-router a{
  display: block;
  text-decoration: none;
  padding: 6px 10px;
  color: #3C4D52;
}
.ui-router a:hover{
  background: #F2F5FA;
}
</style>
<script type="text/javascript">
import tableCenterLayout from '@/components/table-center-layout'
import UiRoutes from '@/router/ui.js'
export default {
  name: 'ui-home',
  data () {
    return {
      UiPaths: UiRoutes
    }
  },
  components: {
    tableCenterLayout
  }
}
</script>
