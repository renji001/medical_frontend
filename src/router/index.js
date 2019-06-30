import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import home from '../components/index/index'
import aboutXiehui from '../components/aboutXiehui/index'
import orgContent from '../components/orgContent/index'
import xueShu from '../components/xueShu/index'
import kepu from '../components/kepu/index'
import keji from '../components/keji/index'
import rongyv from '../components/rongyv/index'
import huiyuan from '../components/huiyuan/index'
import lianxi from '../components/lianxi/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'aboutXiehui',
          name: 'aboutXiehui',
          component: aboutXiehui
        },
        {
          path: 'orgContent',
          name: 'orgContent',
          component: orgContent
        },{
          path: 'xueShu',
          name: 'xueShu',
          component: xueShu
        },{
          path: 'kepu',
          name: 'kepu',
          component: kepu
        },{
          path: 'keji',
          name: 'keji',
          component: keji
        },{
          path: 'rongyv',
          name: 'rongyv',
          component: rongyv
        },{
          path: 'huiyuan',
          name: 'huiyuan',
          component: huiyuan
        },{
          path: 'lianxi',
          name: 'lianxi',
          component: lianxi
        },
      ]
    },
  ]
})
