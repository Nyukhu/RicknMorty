<template>
  <div class="nav-bar">
    <h1>{{ "oui" }}</h1>
    
  </div>
</template>
<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar{
    height: 5vh;
    background-color: #161616;
}
</style>