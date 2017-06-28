<template>
<div class="m-container">
    <a href="https://saeedalipoor.github.io/icono/">参考</a>
    <div class="row" style="margin-top: 50px;">
        <div class="m-col-md-12">
            <ul class="icon-list no-padding no-margin">
                <li v-for="icon in icons">
                    <i class="ci" :class="'ci-' + icon.name"></i>
                    <span class="icon-name">{{icon.name}}</span>
                </li>
            </ul>
        </div>
    </div>
    <!-- <div class="row">
        <span class="m-label"><i class="ci ci-dot" style="color: #05AA1A;"></i> 正常</span>
        <span class="m-label"><i class="ci ci-dot" style="color: #E03603;"></i> 异常</span>
    </div> -->
    
</div>
</template>
<style type="text/css">
.icon-list li{
    width: 120px;
    /*height: 40px;*/
    box-sizing: border-box;
    list-style: none;
    display: block;
    float: left;
    background: #3c4d52;
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 10px;
    color: #fff;
    line-height: 2;
}
.icon-list li .ci{

}
.icon-list li .icon-name{
  opacity: .7;
}
.icon-list li:hover .icon-name{
  opacity: 1;
}
</style>
<script type="text/javascript">
let icons = [
  {
    name: 'home'
  },
  {
    name: 'heart'
  },
  {
    name: 'dot'
  },
  {
    name: 'circle-o'
  },
  {
    name: 'dot-circle-o'
  },
  {
    name: 'square'
  },
  {
    name: 'triangle'
  },
  {
    name: 'sort-desc'
  },
  {
    name: 'sort-asc'
  },
  {
    name: 'ellipsis-h'
  },
  {
    name: 'ellipsis-v'
  },
  {
    name: 'ellipsis-h square'
  },
  {
    name: 'ellipsis-v square'
  },
  {
    name: 'seting'
  },
  {
    name: 'navicon'
  },
  {
    name: 'angle-down'
  },
  {
    name: 'angle-left'
  },
  {
    name: 'tag'
  },
  {
    name: 'tags'
  },
  {
    name: 'close'
  },
  {
    name: 'exclamation-triangle'
  },
  {
    name: 'user-circle-o'
  },
  {
    name: 'separator'
  },
  {
    name: 'play'
  }
]
export default{
  name: 'css-icon',
  data () {
    return {
      icons: icons
    }
  }
}
</script>
