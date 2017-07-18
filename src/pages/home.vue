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
  <!-- <div class="box">
      <button class="btn">default</button>
      <button class="btn btn-info">btn-info</button>
      <button class="btn btn-primary">btn-primary</button>
      <button class="btn btn-success">btn-success</button>
      <button class="btn btn-danger">btn-danger</button>
      <button class="btn btn-warning">btn-warning</button>
  </div> -->

  <div style="background: #ddd; height: 150px;margin: 10px" v-cmenu.fullscreen.hasIcon="contextMenu">
    
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
      contextMenu: {
        open (e, menu) {
          // console.log('open: ', e, menu)
          if (e.target.nodeName === 'BUTTON') {
            menu.contextMenu.menus.push({
              menus: [
                {
                  text: '按钮'
                }
              ]
            })
          }
          // 返回false可以阻止菜单显示，undefined不会处理
          return true
        },
        commands: {
          'xxx': function () {
            console.log('command: ', 'xxx')
          }
        },
        menus: [
          {
            menus: [
              {
                text: '打开',
                tipsText: 'Ctrl+O',
                command: 'xxx'
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
                command: 'test',
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
      this.contextMenu.menus.push({
        menus: [
          {
            text: '用户中心',
            icon: 'fa fa-user-circle-o',
            tipsText: 'Ctrl+O'
          },
          {
            text: '退出',
            tipsText: 'Ctrl+V',
            icon: 'fa fa-sign-out',
            tipsRight: true,
            submenu: [
              {
                menus: [
                  {
                    text: '子菜单1',
                    icon: 'fa fa-sign-out'
                  },
                  {
                    text: '子菜单2',
                    icon: 'fa fa-sign-out',
                    disabled: true
                  },
                  {
                    text: '子菜单3',
                    icon: 'fa fa-sign-out'
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
