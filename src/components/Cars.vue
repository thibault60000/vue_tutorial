<template>
  <div>
    <ul v-for='car in cars' :key=car.name>
      <li>{{ car.name }} </li>
      <li>{{ car.model }}</li>
      <li>{{ car.year }}</li>
    </ul>
    <button @click='addCar'> Add car </button>
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
    addCar () {
      this.cars.push({
        name: 'ford',
        model: 'fiesta',
        year: '2008'
      })
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
