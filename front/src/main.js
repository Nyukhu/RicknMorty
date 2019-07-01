import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

Vue.config.productionTip = false
//ligne permettant d'utiliser Axios
Vue.prototype.$http = Axios

//init
new Vue({
  router,
  Axios,
  render: h => h(App)
}).$mount('#app')
