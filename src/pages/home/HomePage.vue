<template>
    <div>
        <Menu></Menu>
        <section class="pageBody" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
            <div class="search-bar-container">
                <div class="content">
                    <div class="title">RICK N' MORTY</div>
                </div>
            </div>
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
        data: function() {
            return  {
                image : "https://i.imgur.com/KSDzYTd.jpg"
            }
        },
        methods : {
            rand: function rand(min, max) {
                return Math.floor(Math.random() * (max - min) ) + min;
            },
            getRandImage: function () {
                this.$http
                    .get('https://rickandmortyapi.com/api/character/')
                    .then(response => {
                        let charCount = response.data.info.count
                        setInterval(() =>{
                        let randChar = this.rand(0,charCount)
                            this.$http
                            .get('https://rickandmortyapi.com/api/character/'+randChar)
                            .then(response => {
                                this.image = response.data.image  
                            })
                        },3000)
                        
                        
                    })

                
                     
                
            }
        },
        mounted(){
            //this.getRandImage()
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
.search-bar-container{
    height: 100%;
    width: 100%;
    background-color: #000000b0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.content{
    
}
.title{
    font-family: 'Indie Flower', cursive;
    display: flex;
    flex-direction: column;
    color: rgb(118, 248, 136);
    font-size: 5em;
}

</style>