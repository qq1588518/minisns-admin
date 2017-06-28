<template>
<div>
    apitest
    <button class="btn btn-info" @click="handleTest">test</button>
</div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
// Vue.http.options.emulateJSON = true;
window.file = new File([new Blob(['xxxx'], {type: 'text/html'})], 'name.xlsx')
export default {
  name: 'apitest',
  methods: {
    handleTest () {
      let uri = 'http://mobilecdn.kugou.com/api/v3/search/song?format=jsonp&keyword=刚好遇见你&page=1&pagesize=30&showtype=1&callback=kgJSONP648991449'
      Vue.http.jsonp(uri).then(res => {}).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    console.log(this.$route)
    Vue.http.get('/testapi/api/v1/session.php', {
      params: {
        name: 'xxxx'
      }
    }).then(res => {
      console.log('res: ', res)
    }).catch(err => {
      console.log(err)
    })


    Vue.http.post('/testapi/api/v1/session.php', {
      userid: '123',
      blob: window.file
    }, {
      params: {
        uid: 1001,
        data: [12, 34, 567, 23]
      },
      emulateJSON: true
    }).then(res => {
      console.log('res: ', res)
    }).catch(err => {
      console.log(err)
    })

    let formData = new FormData()
    formData.append('file', window.file)
    formData.append('data', {
      userid: '123',
      blob: window.file
    })
    Vue.http.post('/testapi/api/v1/session.php', formData, {
      params: {
        uid: 1002,
        data: [12, 34, 567, 23]
      },
      emulateJSON: true
    }).then(res => {
      console.log('res: ', res)
    }).catch(err => {
      console.log(err)
    })

    Vue.http.post('http://localhost/api/v1/cross-domain.php', formData, {
      params: {
        uid: 1002,
        data: [12, 34, 567, 23]
      }
      // emulateJSON: true,
      // headers:{
      //   'Content-Type': 'application/x-www-form-urlencoded'
      // }
    }).then(res => {
      console.log('res: ', res)
    }).catch(err => {
      console.log(err)
    })

    /*
    let uri = 'http://192.168.1.66:8081/api/machine.MachineManageAction/upload?token=d4f3ae45-947b-4c6f-80b0-b765a055349e'
    Vue.http.post(uri, {gourp_name: '测试组'}, {emulateJSON: true}).then(res => {
      console.log(res)
    })
    */


  }
}
</script>
