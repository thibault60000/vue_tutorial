<template>
  <div class="carDetails">
    <h1> Détails du véhicule  </h1>
    <ul>
      <li>ID : {{ car.id }} </li>
      <li>N° immatriculation : {{ car.immatriculation }}</li>
      <li>{{ car.km }} Km</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import bus from '../main.js'
Vue.use(VueResource)

export default {
  data () {
    return {
      car: {}
    }
  },
  http: {
    root: 'http://localhost:3000'
  },
  created () {
    bus.$on('selected', (selected) => {
      this.$resource('details').get({id: selected}).then((response) => {
        this.car = response.data[0]
        console.log(response.data)
      }, (response) => {
        console.log('erreur', response)
      })
    })
  }
}
</script>

<style>
  div.carDetails{
    display: inline-block;
    width: 40%;
  }
</style>
