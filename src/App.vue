<template>
  <div id="app">
   <Menu></Menu>
   <PageBody></PageBody>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import PageBody from './components/PageBody.vue'

export default {
  name: 'app',
  components: {
    PageBody,Menu
  }
}
</script>

<style>
*{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>
