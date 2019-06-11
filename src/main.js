// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Element from 'element-ui'
import moment from 'moment'
import * as filter from './filter.js'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/index.css'
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';


Vue.config.productionTip = false
Vue.component(CollapseTransition.name, CollapseTransition)

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
