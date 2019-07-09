// 职责1:导入项目需要依赖资源(包,css...)
// 职责2:初始化根实例   new Vue() 选项 render作用是把某一个app组件渲染在你指定的容器$mount('#app')内

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
