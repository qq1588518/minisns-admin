<template>
<transition name="modal">
<div class="modal-mask" v-show="show" >
  <div class="modal-wrapper" @click="$emit('blur')">
    <div class="modal-container" @click.stop=""
      :style="{
        width: width
      }"
    >

      <div class="modal-header">
        <slot name="header">
        </slot>
      </div>

      <div class="modal-body scrollbar simple-scrollbar scrollbar-btn-none no-scroll">
        <slot name="body">
        </slot>
      </div>

      <div class="modal-footer">
        <slot name="footer">
          
        </slot>
      </div>
    </div>
  </div>
</div>
</transition>
</template>

<script>

export default {
  name: 'modal',
  props: {
    width: String,
    show: {
      type: Boolean
    },
    style: String
  }
}
</script>

<style>
  
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}

.modal-wrapper {
  /*display: table-cell;*/
  /*vertical-align: middle;*/
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: auto;
}

.modal-container {
  position: absolute;
  left: 50%;
  top: 80px;
  /*transform: translate(-50%,-50%);*/
  transform: translateX(-50%);
  
  max-width: 800px;
  min-width: 300px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}
.modal-container .modal-header:before,
.modal-container .modal-header:after,
.modal-container .modal-body:before,
.modal-container .modal-body:after,
.modal-container .modal-footer:before,
.modal-container .modal-footer:after
{
  content: "";
  display: table;
  clear: both;
}
.modal-header{
  margin-top: 0;
  padding: 0 10px;
  font-weight: bold;
  border-radius: 3px 3px 0 0;
  border:none;
  color: #F5F5F5;
  background: #324157;
}

.modal-body {
  padding: 10px;
  border: none;
  max-height: 400px;
  overflow: auto;
}

.modal-default-button {
  float: right;
  margin-right: 5px;
}
.modal-footer{
    border: none;
    padding: 10px;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container{
    transform: scale(1.1);
}
.modal-leave-active .modal-container {
  transform: scale(1.1);
}
</style>
