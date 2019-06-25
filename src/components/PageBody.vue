<template>
  <div class="page-container">
    <h1>{{ "oui" }}</h1>
    
  </div>
</template>
<script>
export default {
  name: 'PageBody',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container{
    height: 100vh;
    width: 100vw;
    background-color: #2c2c2c;
}
</style>