<style>
.my-menu-header{
  line-height: 36px;
  margin: 0 -10px;
  background: #EDF1F2;
  padding: 0 10px;
  font-weight: bold;
  margin-top: -5px;
}
.test-line{
  height: 1px;
  background: #dee3ea;
  margin: 5px -10px;
}
.caret{
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}

.test-btn{
  cursor: pointer;
  background: #11BBA6;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 10px 15px;
  margin: 10px;
  outline: none;
  position: relative;
}

 
 .test-btn.active{
  box-shadow: 0px 0px 0px 0px rgba(0, 117, 133, 0.4);
  animation:btn-active-effect .4s ease;
}  

/*.test-btn.active:after{
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
  border-radius: inherit;
  border: 0 solid #108ee9;
  opacity: .4;
  -webkit-animation: buttonEffect .4s;
  animation: buttonEffect .4s;
  display: block;
}
@-webkit-keyframes buttonEffect{
  to{
    opacity:0;
    top:-6px;
    left:-6px;
    bottom:-6px;
    right:-6px;
    border-width:6px
  }
}*/
@keyframes btn-active-effect{
  to{
    box-shadow: 0px 0px 0px 7px rgba(0, 117, 133, 0.02);
  }
}
</style>
<template>
<div>
  <!-- <m-dropdown @command="handleCommand">
    <a href="#" style="display: inline-block; padding: 10px;">dropdown <span class="caret"></span></a>
    <m-dropdown-menu>
      <div class="my-menu-header">这是扩展内容</div>
      <m-dropdown-item>用户中心</m-dropdown-item>
      <m-dropdown-item command="article">文章</m-dropdown-item>
      <m-dropdown-item @click.native.stop="test" disabled>收藏</m-dropdown-item>
      <div class="test-line"></div>
      <m-dropdown-item command="exit">退出</m-dropdown-item>
      <m-dropdown-item><router-link :to="{name: 'login'}">login</router-link></m-dropdown-item>
    </m-dropdown-menu>
  </m-dropdown>
  
  <m-dropdown @command="handleCommand" menu-align="right">
    <a href="#" style="display: inline-block; padding: 10px;">dropdown</a>
    <m-dropdown-menu>
      <div class="my-menu-header">这是扩展内容</div>
      <m-dropdown-item>用户中心</m-dropdown-item>
      <m-dropdown-item command="article" off-click>文章</m-dropdown-item>
      <m-dropdown-item @click.native.stop="test" disabled>收藏</m-dropdown-item>
      <m-dropdown-item command="exit">退出</m-dropdown-item>
      <m-dropdown-item><router-link :to="{name: 'login'}">login</router-link></m-dropdown-item>
    </m-dropdown-menu>
  </m-dropdown> -->

  
  <button class="test-btn" :class="{'active': isActive}" @click="handleTest">button</button>
  <button class="btn btn-info">button</button>
  <div style="background: #ddd; height: 150px;margin: 10px">
    <div style="width: 200px;height: 100%; background: #ccc"></div>
  </div>
  <div style="background: #ddd; height: 50px;margin: 10px"></div>
  <div style="background: #ddd; height: 50px;margin: 10px"></div>
  <h1>1</h1>
  <h1>2</h1>
  <h1>3</h1>
  <h1>4</h1>
  <h1>5</h1>
  <h1>6</h1>
  <h1>7</h1>
  <h1>8</h1>
  <h1>9</h1>
  <h1>10</h1>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>

  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>

  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
</div>
</template>

<script type="text/javascript">
let theme = [
  {},
  {
    head: {
      background: '#7266BA'
    },
    sideHead: {
      background: '#6055A2'
    },
    side: {
      background: '#3A3F51'
    },
    body: {
      background: '#F0F3F4'
    },
    foot: {
      background: '#F6F8F8'
    }
  },
  {
    head: {
      background: '#009688'
    },
    sideHead: {
      background: '#009688'
    },
    body: {
      background: '#F7FCFC'
    },
    side: {
      background: '#222D32'
    }
  },
  {
    head: {
      background: '#FFFFFF',
      color: '#282C34'
    },
    sideHead: {
      background: '#23B7E5'
    }
  },
  {
    side: {
      background: '#fff',
      color: '#282C34'
    }
  },
  {
    head: {
      background: '#FFFFFF',
      color: '#282C34'
    },
    side: {
      background: '#3A3F51'
    },
    sideHead: {
      background: '#3A3F51'
    }
  }
]
export default{
  name: 'home',
  data () {
    return {
      hideSide: false,
      headFixed: false,
      sideFixed: true,
      fixed: true,
      boxedLayout: false,
      miniSide: true,
      miniSidebar: false,
      themes: theme,
      themeIndex: '0',
      isActive: false
    }
  },
  methods: {
    fun () {
      console.log('fun')
    },
    handleTest () {
      this.isActive = true
      setTimeout(() => {
        this.isActive = false
      }, 400)
    }
  },
  computed: {
    getCss () {
      return this.themes[this.themeIndex] ? this.themes[this.themeIndex] : {}
    },
    boxClass () {
      return this.boxedLayout ? 'ad-app-container' : ''
    }
  }
}
</script>
