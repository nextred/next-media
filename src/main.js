// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue2TouchEvents from 'vue2-touch-events'
 
Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.use(VueAxios, axios)
Vue.use(Vue2TouchEvents)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
