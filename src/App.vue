<template>
  <VillaScreen msg="Welcome To Villa App"/>
</template>

<script>
import VillaScreen from './components/VillaScreen'

export default {
  name: 'App',
  components: {
    VillaScreen
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
