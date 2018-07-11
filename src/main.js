
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './components/AppStore'

Vue.use(Vuex)
Vue.config.productionTip = false

export default window.bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
