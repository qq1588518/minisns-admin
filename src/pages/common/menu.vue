<style>
.app-menu{
  background: inherit;
  border-radius: 0;
}
.el-menu{
  border-radius: 0;
  background: inherit;
}
.mini-side .el-menu .el-menu-item{
  overflow: hidden;
}
</style>
<template>

<el-menu default-active="2" class="app-menu" theme="dark">

  <el-submenu index="1">
    <template slot="title"><i class="el-icon-message"></i>导航一</template>
    <el-menu-item-group>
      <template slot="title">分组一</template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <template slot="title">选项4</template>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
    <el-menu-item index="1-2">选项2</el-menu-item>
    <el-menu-item index="1-2">选项2</el-menu-item>
    <el-menu-item index="1-2">选项2</el-menu-item>
  </el-submenu>

  <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
  <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
</el-menu>


<!-- <el-menu
  :default-active="routeIndex"
  class="el-menu-vertical-demo"
  style="background-color:#3A3F51;"
  :default-openeds="routeParent"
  theme="dark"
  >

  <template
    v-for="menu in menus"
    >
    <router-link  :to="{name: menu.code}"  v-if="menu.code != ''">
      <el-menu-item :index="menu.sort_num" :key="menu.id">
        <i style="margin-right:10px" :class="menu.icon">
        </i> {{menu.value}}
      </el-menu-item>
    </router-link>
    <el-submenu :index="menu.sort_num" :key="menu.id" v-else>
      <template slot="title" >
        <i :class="menu.icon" style="margin-right:10px"  aria-hidden="true"></i>{{menu.value}}

      </template>
      <template v-for="childMenu in menu.data" >
        <router-link  :to="{name: childMenu.code}">
            <el-menu-item :index="menu.sort_num+'-'+childMenu.sort_num">
              <i style="margin-right:10px"  :class="childMenu.icon" aria-hidden="true" ></i>
              {{menu.sort_num+'-'+childMenu.sort_num}}
              {{childMenu.value}}
            </el-menu-item>
        </router-link>
      </template>
    </el-submenu>

  </template>

</el-menu> -->

 </template>
<style>

</style>
<script>
// import menus from './menu.json'
export default{
  name: 'menu'
}
</script>
