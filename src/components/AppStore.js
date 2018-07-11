import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const state = {
  cars: {}
}

const getters = {
  selectedCar: state => state.cars
}

const mutations = {
  SELECT_CAR: (state, cars) => {
    state.cars = cars[0]
  }
}

const actions = {
  selectCar: (store, carId) => {
    Vue.http.options.root = 'http://localhost:3000'
    Vue.resource('details').get({id: carId}).then((response) => {
      store.commit('SELECT_CAR', response.data)
    }, (response) => {
      console.log('erreur', response)
    })
  }
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  strict: true
})

export default store
