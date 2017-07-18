<template>
    <div class="m-container">
      <div class="row">
        <div class="m-col-md-4"></div>
        <div class="m-col-md-4">
          <div class="ui-router-box">
              <h1>ui router</h1>
              <div class="">
                <button @click="handleAdd" class="btn btn-info">add</button>
                <button @click="handleReduce" class="btn btn-danger">reduce</button>
              </div>
              
              <ul class="list-group">
              <transition-group name="slide-fade"  appear >
                  <li v-for="path in UiPaths" :key="path" class="list-group-item ui-router no-padding" >
                      <router-link :to="{name: path.name}"># {{path.path}}</router-link>
                  </li>
              </transition-group>
              </ul>
              
          </div>
        </div>
        <div class="m-col-md-4"></div>
      </div>
    </div>
</template>
<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.ui-router-box{
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
      UiPaths: UiRoutes,
      show: false
    }
  },
  methods: {
    handleAdd () {
      // this.show = !this.show
      this.UiPaths.push(this.UiPaths[this.UiPaths.length - 1])
    },
    handleReduce () {
      this.UiPaths.shift()
    }
  },
  components: {
    tableCenterLayout
  }
}
</script>
