// 职责1:导入项目需要依赖资源(包,css...)
// 职责2:初始化根实例   new Vue() 选项 render作用是把某一个app组件渲染在你指定的容器$mount('#app')内

import Vue from 'vue'
import App from './App.vue'
// 完整引入element-ui
// 1.导入包
import ElementUI from 'element-ui'
// 2.导入样式
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
// 3.注册到Vue实例
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
