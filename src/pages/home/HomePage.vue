<template>
    <div>
        <Menu></Menu>
        <section class="pageBody" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
            <div class="search-bar-container">
                <div class="content">
                    <div class="title">RICK N' MORTY</div>
                    <input class="search-bar"/>
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
                image : "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
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
            this.getRandImage()
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
}
.search-bar-container{
    height: 100%;
    width: 100%;
    background-color: #000000da;
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
.search-bar{
    width:100%;
    height: 4vh;
    border-radius: 25px;
    border: none;
    margin-top: 2vh;
    padding-left: 1vw;
    background-color: #4c4c4c; 
}
</style>