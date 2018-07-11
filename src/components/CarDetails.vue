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

// eslint-disable-next-line
import Vue from 'vue'
import Vuex from 'vuex'

export default {
  computed: {
    ...Vuex.mapGetters({car: 'selectedCar'})
  }
}
</script>

<style>
  div.carDetails{
    display: inline-block;
    width: 40%;
  }
</style>
