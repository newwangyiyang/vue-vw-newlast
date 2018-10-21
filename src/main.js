import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
//初始化样式
import 'normalize.css';


//过滤器
import * as filters from './filters/index';
//注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

//自定义全局指令


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
