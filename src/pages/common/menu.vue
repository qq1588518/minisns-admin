<style>
/*重写侧边栏*/
.admin-sidebar-fixed .admin-sidebar{
  overflow-y: auto;
  overflow-x: hidden;
}
/*如果缩小侧边栏则溢出显示*/
.admin-sidebar-fixed.mini-side .admin-sidebar{
  overflow: visible;
}
/*重写菜单样式*/
.app-menu.el-menu,
.app-menu .el-menu{
  background: inherit;
  border-radius: 0 !important;
  z-index: 1000;
}
/*二级目录背景色*/
.app-menu .el-submenu .el-menu{
  background-color: rgba(0,0,0, 0.2);
}

.app-menu .el-menu-item,
.app-menu .el-submenu__title{
  color: inherit;
}
.app-menu .el-menu-item a{
  color: inherit;
}
/*目录项hover背景色*/
.app-menu .el-menu-item:hover,
.app-menu .el-submenu .el-menu-item:hover,
.app-menu .el-submenu .el-submenu-title:hover,
.app-menu .el-submenu__title:hover{
  background-color: rgba(0,0,0, 0.4);
}
.menu-icon{
  margin-right: 10px;
  font-size: 36px;
}


/*缩小侧边栏时样式*/
.mini-side .app-menu .menu-text{
  display: none;
}
.mini-side .app-menu .el-submenu.is-opened{
  background-color: inherit;

}
.mini-side .app-menu .el-icon-arrow-down{
  display: none;
}
.mini-side .app-menu .el-submenu.is-opened{
  position: relative;
}
.mini-side .app-menu .el-submenu.is-opened .el-menu{
  position: absolute;
  /*background-color: #1C2B36;*/
  background-color: inherit;
  top: 0;
  left: 100%;
  z-index: 2000;
}
.mini-side .app-menu .el-submenu.is-opened .el-menu-item{
  min-width: 150px;
  padding: 0 15px;
}
.mini-side .app-menu .el-submenu.is-opened .el-submenu .el-icon-arrow-down{
  display: inline-block;
}
.mini-side .app-menu>.el-submenu.is-opened>.el-submenu__title .menu-text{
  display: none;
}
.mini-side .app-menu .el-submenu.is-opened .menu-text{
  display: inline-block;
}

/*一级目录tips*/
.mini-side .app-menu>.el-menu-item:hover .menu-text,
.mini-side .app-menu>.el-submenu>.el-submenu__title:hover .menu-text{
  display: block;
  position: absolute;
  left: 100%;
  margin-left: 13px;
  margin-top: -25%;
  top: 50%;
  padding: 0 15px;
  line-height: 30px;
  border-radius: 3px;
  background-color: #1C2B36;
  color: #F0F0F5;
}
.mini-side .app-menu>.el-menu-item:hover .menu-text:before,
.mini-side .app-menu>.el-submenu>.el-submenu__title:hover .menu-text:before{
  content: "";
  display: block;
  position: absolute;
  left: -7px;
  top: 8px;
  border-right: 7px solid #1C2B36;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
}
</style>
<template>
<!-- <el-menu default-active="2"  class="app-menu" >

  <el-submenu index="1">
    <template slot="title"><i class="fa fa-tachometer menu-icon" aria-hidden="true"></i><span class="menu-text">主页</span></template>
    <el-menu-item-group>
      <template slot="title">分组一</template>
      <el-menu-item index="1-1"><i class="fa fa-university menu-icon" aria-hidden="true"></i><span class="menu-text">菜单1</span></el-menu-item>
      <el-menu-item index="1-2"><i class="fa fa-university menu-icon" aria-hidden="true"></i><span class="menu-text">菜单2</span></el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <template slot="title"><i class="fa fa-bell menu-icon" aria-hidden="true"></i><span class="menu-text">消息</span></template>
      <el-menu-item index="1-1"><i class="fa fa-bus menu-icon" aria-hidden="true"></i><span class="menu-text">菜单1</span></el-menu-item>
      <el-menu-item index="1-2"><i class="fa fa-bus menu-icon" aria-hidden="true"></i><span class="menu-text">菜单2</span></el-menu-item>
    </el-submenu>
    <el-menu-item index="1-2">选项2</el-menu-item>
    <el-menu-item index="1-2">选项2</el-menu-item>
    <el-menu-item index="1-2">选项2</el-menu-item>
  </el-submenu>

  <el-menu-item index="2"><i class="fa fa-bug menu-icon" aria-hidden="true"></i><span class="menu-text">buglist</span></el-menu-item>
  <el-menu-item index="3"><i class="fa fa-address-book-o menu-icon" aria-hidden="true"></i><span class="menu-text">通讯录</span></el-menu-item>

  <el-submenu index="4">
    <template slot="title"><i class="fa fa-database menu-icon" aria-hidden="true"></i><span class="menu-text">测试</span></template>
    <el-menu-item-group>
      <template slot="title">分组一</template>
      <el-menu-item index="4-1"><i class="fa fa-university menu-icon" aria-hidden="true"></i><span class="menu-text">菜单1</span></el-menu-item>
      <el-menu-item index="4-2"><i class="fa fa-university menu-icon" aria-hidden="true"></i><span class="menu-text">菜单2</span></el-menu-item>
    </el-menu-item-group>
    <el-submenu index="4-4">
      <template slot="title"><i class="fa fa-bell menu-icon" aria-hidden="true"></i><span class="menu-text">消息</span></template>
      <el-menu-item index="4-1"><i class="fa fa-bus menu-icon" aria-hidden="true"></i><span class="menu-text">菜单1</span></el-menu-item>
      <el-menu-item index="4-2"><i class="fa fa-bus menu-icon" aria-hidden="true"></i><span class="menu-text">菜单2</span></el-menu-item>
    </el-submenu>
    <el-menu-item index="4-2">选项2</el-menu-item>
    <el-menu-item index="4-2">选项2</el-menu-item>
    <el-menu-item index="4-2">选项2</el-menu-item>
  </el-submenu>

</el-menu> -->


<el-menu
  class="app-menu"
  >

  <template
    v-for="menu in menus"
    >
    <el-menu-item :index="menu.sort_num" :key="menu.id" v-if="menu.code != ''">
      <!-- <router-link  :to="{name: menu.code}"> -->
      <router-link to="">
      <i :class="['menu-icon', menu.icon]">
      </i>
      <span class="menu-text">{{menu.value}}</span>
      </router-link>
    </el-menu-item>
    <el-submenu :index="menu.sort_num" :key="menu.id" v-else>
      <template slot="title" >
        <i :class="['menu-icon', menu.icon]">
        </i>
        <span class="menu-text">{{menu.value}}</span>
      </template>
      <template v-for="childMenu in menu.data" >
        <el-menu-item :index="menu.sort_num+'-'+childMenu.sort_num">
          <!-- <router-link  :to="{name: childMenu.code}"> -->
          <router-link  to="">
          <i  :class="['menu-icon', childMenu.icon]" aria-hidden="true" ></i>
          <span class="menu-text">
          <!-- {{menu.sort_num+'-'+childMenu.sort_num}} -->
          {{childMenu.value}}</span>
          </router-link>
        </el-menu-item>
      </template>
    </el-submenu>

  </template>

</el-menu>

 </template>
<style>

</style>
<script>
import menus from './menu-data.json'
export default{
  name: 'menu',
  data () {
    return {
      menus
    }
  }
}
</script>
