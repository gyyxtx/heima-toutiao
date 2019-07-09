// 配置路由

// 使用vue-router 1.安装 2.引入 3.注册 4.初始化路由对象 5. 挂在:main.js

import Vue from 'vue'
import VueRouter from 'vue-router'
// 1.默认索引  文件夹下 存在index.js index.vue index.json默认加载这些文件
// 2.在使用 vue-cli的时候  @符号在路径中作为前缀使用的时候 代表src目录
import Login from '@/views/login'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login }
  ]
})

export default router
