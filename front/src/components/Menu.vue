<template>
  <div class="nav-bar">
    <router-link :to="{ name : 'Locations' }" class="nav-item">Locations</router-link>
    <router-link :to="{ name : 'favoritesChar' }" class="nav-item">Favorite characters</router-link>
    <router-link :to="{ name : 'favoritesLoc' }" class="nav-item">Favorite locations</router-link>
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


<style scoped>
.nav-bar{
    height: 5vh;
    background-color: #161616;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    position:sticky;
    top: 0px;
    z-index: 1000;
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
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  color: white;
}
a{
  text-decoration: none;

}

</style>