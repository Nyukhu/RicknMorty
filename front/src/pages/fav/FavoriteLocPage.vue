<template>
    <div>
        <Menu></Menu>
        <section class="pageBody">
            <section class="content">
                <section class="searchbar-container">
                    <select name="typeSelect" id="selectInput" @change=this.filterLocations>
                        <option value="">-</option>
                        <option v-for="type in types" :value="type" :key="type">{{ type }}</option>
                    </select>
                </section>
                <section class="card-list">
                    <ListItem v-for="item in locations"  v-bind:item="item" :key="item.id"></ListItem>
                </section>
            </section>
        </section>
        
    </div>
</template>

<script>
import Menu from '../../components/Menu.vue'
import ListItem from '../../components/ListItem.vue'


    export default {
        name : "LocationsPage",
        components: {
            Menu,ListItem
        },
        data: function() {
            return  {
               locations: [
               ],
               types: [
                   
               ]
            }
        },
        methods : {
            //  fonction filterLocation : 
            //  filtre les locations en fonction du typeselectionné
            filterLocations : function(e){
                if(e.target.options.selectedIndex > -1) {

                    //on vide le tableau afin de ne récuperer que les locations correspondantes au type choisi
                    this.locations = [];

                    //recuperation des locations
                    this.getLocations(e.target.options[e.target.options.selectedIndex].value,1)
                }
            },

            //fonction getLocations : interroge l'api rickandmorty afin de récupérer les localisations
            //params : 
            //type : le type de localisation attendu (si le type = "" alors getLocations renverra toutes les localisations)
            //pageNum : le numéro de la page récupéré de l'api
            getLocations : function(type,pageNum){
                this.$http
                    .get('http://localhost:3000/location')
                    .then(response => {
                        response.data.forEach(location => {
                            this.$http
                                .get('https://rickandmortyapi.com/api/location/'+location.location_idlocation)
                                .then(response => {

                                    //remplit le tableau des type de localisations afin d'alimenter le select du filtre.
                                    if (!this.types.includes(response.data.type)) {
                                        this.types.push(response.data.type)
                                    }
                                    //instancie un objet localisation afin de pouvoir plus tard l'ajouter à la liste des localisations
                                    let newLoc = {
                                                    id: response.data.id,
                                                    title: response.data.name,
                                                    subTitle: response.data.type,
                                                    family:response.data.dimension,
                                                    subList : []
                                                };
                                    //remarque : l'api de dispose pas d'image pour les localisations
                                    //récuperation de l'id des résidents de la localisation
                                    response.data.residents.forEach((resident) => {

                                        //on casse l'url afin de ne récupérer que le dernier morceau contenant l'id du personnage,
                                        let residentArray = resident.split('/')

                                        // puis on l'ajoute a l'objet localisation
                                        newLoc.subList.push(residentArray[5])
                                        
                                    })
                                    this.locations.push(newLoc);
                                    
                            })
                        });
                    })

            }
            
        },
        mounted(){
            this.getLocations("",1)
        }
    }
</script>

<style scoped>

.pageBody{
    min-height: 95vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: url('../../assets/location.jpg');
    

    
}
.searchbar-container{
    height: 15vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#selectInput{
    background-color: #5adf4e;
    border: none;
    color: #1d1d1d;
    width: 20%;
    text-align: center;
    padding: 1vh 1vw;
    border-radius: 25px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

}
#selectInput:focus {
    outline:none;
}
.content{
    min-height: 100vh;
    width: 100%;
    background-color: #2c2c2cf8;
    background-attachment: fixed;

}
.card-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
}
.title{
    font-family: 'Indie Flower', cursive;
    display: flex;
    flex-direction: column;
    color: rgb(118, 248, 136);
    font-size: 5em;
}

</style>