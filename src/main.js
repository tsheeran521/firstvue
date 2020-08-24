import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/vuex'
import axios from 'axios'
Vue.config.productionTip = false
axios({
  url:'192.168.31.230:7777'
}).then(()=>{
  console.log('发送了')
})
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
