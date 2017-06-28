<style type="text/css">
  .container{
    max-width: 960px;
  }
</style>
<template>
    <admin-layout :head-fixed="headFixed" :boxed-layout="'container'" :side-fixed="sideFixed" :mini-sidebar="miniSidebar" mini-sidebar-width="80px">
        <div slot="header">
            headFixed:
            <label class="m-switch">
                <input id="test" type="checkbox" v-model="headFixed" checked class="m-switch-trigger">
            </label>
            sideFixed:
            <label class="m-switch">
              <input id="test" type="checkbox" v-model="sideFixed" checked class="m-switch-trigger">
            </label>
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
    </admin-layout>
    
</template>

<script type="text/javascript">
import AdminLayout from '@/components/admin-layout'
export default {
  name: 'admin',
  data () {
    return {
      headFixed: false,
      sideFixed: true,
      fixed: true,
      miniSidebar: false,
      theme: {
        headerCss: {
          height: '80px',
          background: '#fff'
        },
        sidebarCss: {
          width: '200px',
          background: '#3A3F51'
        },
        footerCss: {
          height: '80px',
          background: '#282C34'
        }
      }
    }
  },
  components: {
    AdminLayout
  }
}
</script>
