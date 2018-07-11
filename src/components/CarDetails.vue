<template>
  <div class="carDetails">
    <h1> Détails du véhicule  </h1>
    <ul>
      <li>{{ car.name }} </li>
      <li>{{ car.model }}</li>
      <li>{{ car.year }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['car']
}
</script>

<style>
  div.carDetails{
    display: inline-block;
    width: 40%;
  }
</style>
