<template>
<div>
    <button @click="isShow = !isShow">打开</button>
    <modal :show="isShow">
        <h3 slot="header">标题</h3>
        <div slot="body">内容</div>
        <div slot="footer">
            <button>确定</button>
            <button @click="isShow = !isShow">取消</button>
        </div>
    </modal>
</div>
</template>

<script type="text/javascript">
import modal from '@/components/modal-test'
export default {
  name: 'demo',
  data () {
    return {
      isShow: true
    }
  },
  components: {
    modal
  }
}
</script>
