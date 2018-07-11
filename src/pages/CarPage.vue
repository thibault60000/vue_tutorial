<template>
  <div class="page">
      <div class="content">
        <CarList v-on:selected='setSelected($event)' />
        <CarDetails :car='selectedCar' />
      </div>
  </div>
</template>

<script>
import CarList from '../components/CarList.vue'
import CarDetails from '../components/CarDetails.vue'

export default {
  data () {
    return {
      selectedCar: {}
    }
  },
  components: {CarList, CarDetails},
  methods: {
    setSelected (_selectedCar) {
      this.selectedCar = _selectedCar
    }
  }
}
</script>
