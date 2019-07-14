// 封装axios
import axios from 'axios'
// 配置全局axios
const instance = axios.create({
  // 基准路径
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/'
  // token认证
//   herders: {
//     Authorization: 'Bearer' + JSON.parse(window.sessionStorage.getItem('mytoken'))
//   }
})
// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 在发送请求之前做什么
  // 给头部加上认证信息
  const user = window.sessionStorage.getItem('mytoken')
  //  如果有token就加请求头信息
  if (user) {
    config.header = {
      Authorization: 'Bearer' + JSON.parse(user).token
    }
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 添加相应拦截器
instance.interceptors.response.use(response => response, error => {
  if (error.response.status === 401) {
    location.hash = '#/login'
  }
  return Promise.reject(error)
})

export default instance
