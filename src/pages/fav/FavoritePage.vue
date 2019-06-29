<template>
    <div>
        <Menu></Menu>
        <section class="pageBody">
            
        </section>
        
    </div>
</template>

<script>
import Menu from '../../components/Menu.vue'


    export default {
        name : "FavoritePage",
        components: {
            Menu
        },
        data: function() {
            return  {
               
            }
        },
        methods : {
            
        },
        mounted(){
           
        }
    }
</script>

<style scoped>

.pageBody{
    
    height: 95vh;
    width: 100vw;
    background-color: #2c2c2c;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed; 
}

</style>