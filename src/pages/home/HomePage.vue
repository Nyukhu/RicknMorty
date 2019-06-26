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
        name : "HomePage",
        components: {
            Menu
        },
        methods : {
            
        },
        mounted(){
            
        }
    }
</script>

<style scoped>

.pageBody{
    height: 95vw;
    width: 100vw;
    background-color: #2c2c2c;
}
</style>