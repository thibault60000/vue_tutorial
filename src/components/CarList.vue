<template>
  <div class="carList">
    <ul v-for='car in cars' :key=car.name>
      <li>{{ car.name }} </li>
      <li>{{ car.model }}</li>
      <li>{{ car.year }}</li>
      <button @click='selectCar(car)'> Voir les détails </button>
    </ul>
    <p> Nombre de voitures : {{ counter }}</p>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  data () {
    return {
      cars: []
    }
  },
  http: {
    root: 'http://localhost:3000'
  },
  methods: {
    selectCar (car) {
      console.log(car)
      this.$emit('selected', car)
    }
  },
  computed: {
    counter () {
      return this.cars.length
    }
  },
  mounted () {
    this.$resource('cars')
      .get()
      .then(
        response => {
          this.cars = response.data
        },
        response => {
          console.log('erreur', response)
        }
      )
  }
}
</script>

<style>
  div.carList{
    display: inline-block;
    width: 40%;
  }
</style>
