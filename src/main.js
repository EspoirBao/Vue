import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from './utils/axios'

//引入ui库
import ElementUI from "element-ui"
Vue.use(ElementUI);
//引入axios
import VueResource from "vue-resource";
Vue.use(VueResource); 
import {http} from "@/utils/axios";
Vue.prototype.$axios = http;
//引入样式文件
import "@/styles/index.scss"
import 'element-ui/lib/theme-chalk/index.css'; 

import "@/assets/icon/iconfont.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
