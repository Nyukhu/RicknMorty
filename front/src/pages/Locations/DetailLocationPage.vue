<template>
    <div>
        <Menu></Menu>
        <section class="pageBody">
                <section class="content">
                    <section class="location-body">
                        <div class="side-column">
                            <p class="location-name">
                                {{this.$route.params.location.title}}
                            </p>
                            <p class="location-text-field">
                                {{this.$route.params.location.subTitle}}
                            </p>
                            <p class="location-text-field">
                                {{this.$route.params.location.family}}
                            </p>
                            <p class="location-text-field">
                                {{this.$route.params.location.subList.length}} résidents
                            </p>
                        </div>
                        <div class="info-display">
                           
                            <div class="character-list">
                                <CardItem v-for="item in residents"  v-bind:item="item" :key="item.id"></CardItem>

                            </div>
                        </div>
                    </section>
                </section>
        </section>
        
    </div>
</template>

<script>
    import Menu from '../../components/Menu.vue'
    import CardItem from '../../components/CardItem.vue'

    export default {
        name : "DetailLocationPage",
        components: {
            Menu,CardItem
        },
        data: function() {
            return  {
                residents: []
            }
        },
        methods : {
            //fonction getCharacters : permet de récupérer le détail des information des résidents.
            //params : 
            //characters : tableau des ids des résidents
            getCharaters : function(characters){
                this.$http
                    .get('https://rickandmortyapi.com/api/character/'+characters)
                    .then(response => {
                        
                        //la structure de la réponse étant différente qu'il y est un ou plusieurs personnage, on effectue un traitement en conséquence
                        if (response.data.id) {
                            let character = {
                                    id: response.data.id,
                                    image : response.data.image,
                                    name : response.data.name,
                                    origin : response.data.origin.name,
                                    species : response.data.species,
                                    status: response.data.status,
                                    gender: response.data.gender,
                                    type: response.data.type
                                }
                                this.residents.push(character)
                        }else{
                            response.data.forEach(char => {
                                let character = {
                                    id: char.id,
                                    image : char.image,
                                    name : char.name,
                                    origin : char.origin.name,
                                    species : char.species,
                                    status: char.status,
                                    gender: char.gender,
                                    type: char.type
                                }
                                this.residents.push(character)
                                
                            });
                        }
                        
                    })
            }
        },
        mounted(){
            
            this.getCharaters(this.$route.params.location.subList)
            console.log()

        }
    }
</script>

<style scoped>

.pageBody{
    height: 95vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: url('../../assets/location.jpg');  
    overflow: hidden;
}
.content{
    min-height: 100vh;
    width: 100%;
    background-color: #2c2c2cf8;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.location-body{
    height:100vh;
    width: 100vw;
    background-color: #222222;
    display: flex;
    flex-direction: row;

}
.side-column{
    height: 100%;
    width: 15%;
    background-color: #141414;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.side-column p{
    margin : 1vh;
    color: white;
}
.info-display{
    height: 100%;
    width: 85%;
    display: flex;
    flex-direction: row;

}
.filter-bar{
    height: 15%;
    width: 100%;
    background-color: #333232;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.character-list{
    overflow-x: hidden;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 4vh;
    margin-bottom: 5vh;
}
</style>