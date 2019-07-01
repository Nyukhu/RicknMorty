<template>
    <div>
        <Menu></Menu>
        <section class="pageBody">
            <div class="character-list">
                <CardItem v-for="item in residents"  v-bind:item="item" :key="item.id"></CardItem>
            </div>
        </section>
        
    </div>
</template>

<script>
import Menu from '../../components/Menu.vue'
    import CardItem from '../../components/CardItem.vue'

    export default {
        name : "FavoritePage",
        components: {
            Menu,CardItem
        },
        data: function() {
            return  {
               residents: []
            }
        },
        methods : {
            getFavoriteResidents : function(){
                this.$http
                    .get("http://localhost:3000/residents")
                    .then((response) => {
                        console.log(response.data);
                        let chartab = { favid : [], charids : []};
                        response.data.forEach((char) => {
                            chartab.favid.push({idfav : char.idfavorite_resident, idchar : char.resident_idresident});
                            chartab.charids.push(char.resident_idresident);
                        })
                        this.getCharaters(chartab)
                    })
            },
             getCharaters : function(characters){
                this.$http
                    .get('https://rickandmortyapi.com/api/character/'+characters.charids)
                    .then(response => {
                        
                        //la structure de la réponse étant différente qu'il y est un ou plusieurs personnage, on effectue un traitement en conséquence
                        if (response.data.id) {
                            
                            let character = {
                                    favid : characters.favid[0],
                                    id: response.data.id,
                                    image : response.data.image,
                                    name : response.data.name,
                                    origin : response.data.origin.name,
                                    species : response.data.species,
                                    status: response.data.status,
                                    gender: response.data.gender,
                                    type: response.data.type
                                }
                                this.residents.push(character);
                        }else{
                            response.data.forEach(char => {
                                let favId = 0;
                                characters.favid.forEach(fav => {
                                    if (fav.idchar == char.id ) {
                                        favId = fav.idfav;
                                    }
                                });

                                let character = {
                                    favid : favId,
                                    id: char.id,
                                    image : char.image,
                                    name : char.name,
                                    origin : char.origin.name,
                                    species : char.species,
                                    status: char.status,
                                    gender: char.gender,
                                    type: char.type
                                }
                                this.residents.push(character);
                                
                            });
                        }
                        
                    })
            }
        },
        mounted(){
           this.getFavoriteResidents()
        }
    }
</script>

<style scoped>

.pageBody{
    overflow-x: hidden;
    
    min-height: 95vh;
    width: 100vw;
    background-color: #2c2c2c;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed; 
}
.character-list{
    overflow-x: hidden;
    width: 95%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 4vh;
    margin-bottom: 5vh;
}

</style>