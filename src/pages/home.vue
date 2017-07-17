<style>

.caret{
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}

.test-btn{
  cursor: pointer;
  background: #11BBA6;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 10px 15px;
  margin: 10px;
  outline: none;
  position: relative;
}
.test:active{
  background: red;
}
.test:active ~ .m-switch-inner{
  color: red;
} 
</style>
<template>
<div>
  <button class="testactive">
    active
  </button>
  <input type="checkbox" class="test">
  <span class="m-switch-inner">xxxxx</span>
  
  <button class="btn btn-primary" @click="testfun" :class="{'clicked': isClick}">btn-primary</button>
  <button class="btn btn-info" :class="{'clicked': isClick}">btn-info</button>
  <div class="box">
      <button class="btn">default</button>
      <button class="btn btn-info">btn-info</button>
      <button class="btn btn-primary">btn-primary</button>
      <button class="btn btn-success">btn-success</button>
      <button class="btn btn-danger">btn-danger</button>
      <button class="btn btn-warning">btn-warning</button>
  </div>

  <div style="background: #ddd; height: 150px;margin: 10px" v-cmenu="menus">
    
  </div>
  <div style="background: #ddd; height: 50px;margin: 10px"></div>
  <div style="background: #ddd; height: 50px;margin: 10px"></div>

</div>
</template>

<script type="text/javascript">

export default{
  name: 'home',
  data () {
    return {
      isClick: false,
      menus: [
        {
          menus: [
            {
              text: '打开',
              tipsText: 'Ctrl+O'
            },
            {
              text: '粘贴',
              tipsText: 'Ctrl+V',
              tipsRight: true,
              disabled: true
            },
            {
              icon: 'fa fa-info-circle',
              text: '信息'
            }
          ]
        },
        {
          menus: [
            {
              text: '测试0',
              submenu: [
                {
                  menus: [
                    {
                      text: '子菜单1'
                    },
                    {
                      text: '子菜单2',
                      disabled: true
                    },
                    {
                      text: '子菜单3'
                    }
                  ]
                }
              ]
            },
            {
              text: '测试1',
              disabled: true
            }
          ]
        }
      ]
    }
  },
  methods: {
    testfun () {
      this.isClick = true
      setTimeout(() => {
        this.isClick = false
      }, 400)
    }
  },
  created () {
    setTimeout(() => {
      this.menus.push({
        menus: [
          {
            text: '新增菜单1',
            tipsText: 'Ctrl+O'
          },
          {
            text: '新增菜单2',
            tipsText: 'Ctrl+V',
            tipsRight: true,
            submenu: [
              {
                menus: [
                  {
                    text: '子菜单1'
                  },
                  {
                    text: '子菜单2',
                    disabled: true
                  },
                  {
                    text: '子菜单3'
                  }
                ]
              }
            ]
          }
        ]
      })
    }, 2000)
  }
}
</script>
