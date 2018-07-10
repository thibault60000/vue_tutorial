<!-- Composant principal -->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Cars name='ford' model='fiesta' year='2008' />
  </div>
</template>

<script>
import Cars from './components/Cars'

export default {
  name: 'App',
  components: {
    Cars
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
