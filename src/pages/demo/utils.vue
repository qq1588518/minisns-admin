<template>
    <table-center-layout position="absolute" style="background: #F5F7FC">
        <div class="m-container">
            <h1>utils</h1>
            <ul class="list-group ">
                <li v-for="fun in funs" class="list-group-item" >
                    {{fun}}
                </li>
            </ul>
        </div>
    </table-center-layout>
</template>
<script type="text/javascript">
import tableCenterLayout from '@/components/table-center-layout'
import * as utils from '@/utils/utils'
window.utils = utils
export default {
  name: 'utils',
  data () {
    let funs = []
    for (let fun in utils) {
      funs.push(fun)
    }
    return {
      funs: funs
    }
  },
  components: {
    tableCenterLayout
  },
  created () {
    console.log(utils)
    console.log(utils.isArray([]), utils.isArray({}))
  }
}
</script>
