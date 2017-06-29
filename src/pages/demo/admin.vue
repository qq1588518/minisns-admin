<style type="text/css">
  .container{
    max-width: 960px;
  }
</style>
<template>
    <admin-layout 
    :head-fixed="headFixed" 
    :boxed-layout="boxClass" 
    :mini-side="miniSide" 
    :side-fixed="sideFixed"
    :css="getCss"
    >
        <div slot="header" style="padding: 12px;">
            <el-checkbox v-model="headFixed">headFixed</el-checkbox>
            sideFixed:
            <label class="m-switch">
              <input id="test" type="checkbox" v-model="sideFixed" checked class="m-switch-trigger">
            </label>
            miniSide:
            <label class="m-switch">
              <input id="test" type="checkbox" v-model="miniSide" checked class="m-switch-trigger">
            </label>
            boxedLayout:
            <label class="m-switch">
              <input id="test" type="checkbox" v-model="boxedLayout" checked class="m-switch-trigger">
            </label>
            theme:
            <select v-model="themeIndex">
              <option v-for="(key, index) in themes" :value="index">theme{{index}}</option>
            </select>
        </div>
        <div slot="side-header">
          logo
        </div>
        <div slot="sidebar" style="padding: 10px;">
            <div class="m-alert m-alert-danger">1m-alert m-alert-danger</div>
            <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
            <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
            <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
            <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
            <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
            <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
            <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
        </div>
        <div class="m-alert m-alert-danger">1m-alert m-alert-danger</div>
        <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
        <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
        <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
        <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
        <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
        <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
        <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
        <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
        <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
        <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
        <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
        <div class="m-alert m-alert-danger">m-alert m-alert-danger</div>
        <div slot="footer">
          footer
        </div>
    </admin-layout>
    
</template>

<script type="text/javascript">
import AdminLayout from '@/components/admin-layout'
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
      background: '#3C8DBC'
    },
    sideHead: {
      background: '#357CA5'
    },
    body: {
      background: '#ECF0F5'
    },
    side: {
      background: '#222D32'
    }
  },
  {
    head: {
      background: '#FFFFFF',
      color: '#282C34'
    }
  },
  {
    side: {
      background: '#DDE6E9'
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
      headFixed: false,
      sideFixed: true,
      fixed: true,
      boxedLayout: false,
      miniSide: false,
      miniSidebar: false,
      themes: theme,
      themeIndex: '0'
    }
  },
  computed: {
    getCss () {
      return this.themes[this.themeIndex] ? this.themes[this.themeIndex] : {}
    },
    boxClass () {
      return this.boxedLayout ? 'container' : ''
    }
  },
  components: {
    AdminLayout
  }
}
</script>
