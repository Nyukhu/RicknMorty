<template>
  <div class="nav-bar">
    <router-link :to="{ name : 'favorites' }" class="nav-item">Favoris</router-link>
    
    
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
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}
.nav-item{
  height: 100%;
  width: 10vw;
  color: white;
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.nav-item:hover{
  background-color: #2c2c2c;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
  color: white;
}
a{
  text-decoration: none;

}

</style>