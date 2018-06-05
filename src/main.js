// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueAnalytics from 'vue-analytics'
var SocialSharing = require('vue-social-sharing');
import DoubleClick from 'vue-doubleclick';
import VueDfp from './vue-dfp'
Vue.use(VueDfp, {
  dfpID: '2320769425'
})


Vue.use(DoubleClick, {
    id: '2320769425'
});
  
Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.use(VueAxios, axios)
Vue.use(VueLazyload)
Vue.use(SocialSharing);
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: '../static/images/loading.jpg',
  attempt: 1
})

Vue.use(VueAnalytics, {
  id: 'UA-1234-5',
  router,
  debug: {
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
