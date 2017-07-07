<style type="text/css">
  .ad-app-container{
    max-width: 960px;
  }
</style>
<template>
    <admin-layout 
    :head-fixed="headFixed" 
    :boxed-layout="boxClass" 
    :mini-side="miniSide" 
    :side-fixed="sideFixed"
    :hide-side="hideSide"
    :css="getCss"
    >
      <app-header slot="header"></app-header>
        <div slot="side-header">
          logo
        </div>
        <app-menu slot="sidebar"></app-menu>
        <div  style="padding: 12px;">
          <el-checkbox v-model="headFixed">headFixed</el-checkbox>
          <el-checkbox v-model="hideSide">hideSide</el-checkbox>
          <el-checkbox v-model="sideFixed">sideFixed</el-checkbox>
          <el-checkbox v-model="miniSide">miniSide</el-checkbox>
          <el-checkbox v-model="boxedLayout">boxedLayout</el-checkbox>
          theme:
          <select v-model="themeIndex">
            <option v-for="(key, index) in themes" :value="index">theme-{{index}}</option>
          </select>
        </div>
        <router-view></router-view>
        <app-footer slot="footer"></app-footer>
    </admin-layout>
    
</template>

<script type="text/javascript">
import AdminLayout from '@/components/admin-layout'
import AppMenu from '@/pages/common/menu'
import AppHeader from '@/pages/common/header'
import AppFooter from '@/pages/common/footer'
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
      background: '#fff',
      color: '#282C34'
    },
    sideHead: {
      background: '#0A897E'
    },
    side: {
      background: '#009688',
      color: '#fff'
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
export default {
  name: 'admin',
  data () {
    return {
      hideSide: false,
      headFixed: false,
      sideFixed: false,
      fixed: true,
      boxedLayout: false,
      miniSide: true,
      miniSidebar: false,
      themes: theme,
      themeIndex: '0'
    }
  },
  methods: {
    fun () {
      console.log('fun')
    }
  },
  computed: {
    getCss () {
      return this.themes[this.themeIndex] ? this.themes[this.themeIndex] : {}
    },
    boxClass () {
      return this.boxedLayout ? 'ad-app-container' : ''
    }
  },
  components: {
    AdminLayout,
    AppMenu,
    AppHeader,
    AppFooter
  }
}
</script>
