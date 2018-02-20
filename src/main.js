// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import SearchBar from '@/components/SearchBar'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.config.productionTip = false
Vue.use(Buefy)
/* eslint-disable no-new */
Vue.use(Buefy)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
