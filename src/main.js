
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

export default window.bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
