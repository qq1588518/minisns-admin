<style>
  html,
  body{
    height: 100%;
    width: 100%;
  }
</style>
<style scoped lang="less">
  @header-height: 50px;
  @side-width: 200px;
  @side-mini-width: 60px;
  @footer-height: 50px;
  .admin-box,
  .admin-header,
  .admin-sidebar,
  .admin-body,
  .admin-footer,
  .admin-sidebar-header{
    box-sizing: border-box;
  }
  .admin-header,
  .admin-sidebar-header,
  .admin-sidebar,
  .admin-body,
  .admin-footer{
    -webkit-transition: width, margin, .4s cubic-bezier(0.06, 0.04, 0.2, 1);
    -moz-transition: width, margin, .4s cubic-bezier(0.06, 0.04, 0.2, 1);
    -o-transition: width, margin, .4s cubic-bezier(0.06, 0.04, 0.2, 1);
    -ms-transition: width, margin, .4s cubic-bezier(0.06, 0.04, 0.2, 1);
    transition: width, margin, .4s cubic-bezier(0.06, 0.04, 0.2, 1);
  }
  .admin-box{
    margin: 0 auto;
    width: 100%;
    /*width: 960px;*/
    position: relative;
    min-height: 100%;
    background: #ECF0F5;
    z-index: 0;
    padding-top: @header-height;
  }
  .admin-box::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    display: block;
    width: inherit;
    background-color: inherit;
  }
  
  .admin-header{
    margin-left: @side-width;
    /*width: 100%;*/
    left: 0;
    right: 0;
    position: absolute;
    top: 0;
    min-height: @header-height;
    background-color: #16AAD8;
    z-index: 2000;
    color: #DAEAEF;
  }
  .admin-sidebar-header{
    color: #fff;
    width: @side-width;
    height: @header-height;
    margin-left: -@side-width;
    float: left;
    background: #1199C4;
    z-index: 300;
  }
  .admin-sidebar{
    width: @side-width;
    float: left;
    background-color: #1C2B36;
    color: #869fb1;
  }
  .admin-sidebar::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    width: inherit;
    background: inherit;
    display: block;
  }
  .admin-body{
    padding: 15px;
    margin-left: @side-width;
    padding-bottom: @header-height;
  }
  .admin-body:before,
  .admin-body:after{
    content: "";
    display: table;
  }
  .admin-body:after{
    clear: both;
  }
  .admin-footer{
    margin-left: @side-width;
    height: @footer-height;
    background: #F5F7FF;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1005;
  }
  /* 设置 */
  .admin-box.admin-header-fixed .admin-header{
    position: fixed;
  }

  .admin-box.admin-header-fixed.is-boxed .admin-header{
    left: auto;
    right: auto;
    width: 100%;
    margin-left: 0;
    padding-left: @side-width;
  } 
  .admin-box.admin-sidebar-fixed .admin-sidebar{
    position: fixed;
    bottom: 0;
    top: @header-height;
  }
  .admin-box.admin-sidebar-fixed .admin-sidebar-header{
    position: fixed;
    margin-top: 0;
    top: 0;
  }

  .admin-box.mini-side .admin-header{
    margin-left: @side-mini-width;
  }
  .admin-box.mini-side.admin-header-fixed.is-boxed .admin-header{
    padding-left: @side-mini-width;
  }
  .admin-box.mini-side .admin-sidebar{
    z-index: 1000;
  }
  .admin-box.mini-side .admin-sidebar,
  .admin-box.mini-side .admin-sidebar-header{
    width: @side-mini-width;
  }
  .admin-box.mini-side .admin-sidebar-header{
    margin-left: -@side-mini-width;
  }
  .admin-box.mini-side .admin-footer,
  .admin-box.mini-side .admin-body{
    margin-left: @side-mini-width;
  }
  .admin-box.hide-side .admin-sidebar,
  .admin-box.hide-side .admin-sidebar-header{
    width: 0;
    overflow: hidden;
  }
  .admin-box.hide-side .admin-header,
  .admin-box.hide-side .admin-footer,
  .admin-box.hide-side .admin-body{
  margin-left: 0;
  }
  

</style>
<template>
<div class="admin-box" 
  :class="[{
    'admin-header-fixed': headFixed,
    'admin-sidebar-fixed': sideFixed,
    'is-boxed': !!boxedLayout,
    'mini-side': miniSide,
    'hide-side': hideSide
    }, boxedLayout]"
  :style="css['body']"
  >
  
  <header class="admin-header" 
    :class="[boxedLayout]"
    :style="css['head']"
    >
    <div class="admin-sidebar-header"
      :style="css['sideHead']"
      >
      <slot name="side-header"></slot>
    </div>
    <slot name="header"></slot>
  </header>
  <aside class="admin-sidebar"
    :style="css['side']"
    >
    <slot name="sidebar"></slot>
  </aside>
  <section class="admin-body">
    <slot></slot>
  </section>
  <footer class="admin-footer"
    :style="css['foot']"
    >
    <slot name="footer"></slot> 
  </footer>
</div>
</template>


<script type="text/javascript">
export default {
  name: 'admin-layout',
  props: {
    'head-fixed': {
      type: Boolean,
      default: false
    },
    'side-fixed': {
      type: Boolean,
      default: false
    },
    'boxed-layout': {
      type: String,
      default: ''
    },
    'mini-side': {
      type: Boolean,
      default: false
    },
    'hideSide': {
      type: Boolean,
      default: false
    },
    css: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  created () {
    console.log(this.$props)
  }
}
</script>
