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
            filterLocations : function(e){
                if(e.target.options.selectedIndex > -1) {
                    this.getLocations(e.target.options[e.target.options.selectedIndex].value)
                }
            },

            getLocations : function(type){
                this.locations = [];
                 this.$http
                    .get('https://rickandmortyapi.com/api/location/?type='+type)
                    .then(response => {
                        console.log(response.data);
                        response.data.results.forEach(location => {
                            if (!this.types.includes(location.type)) {
                                this.types.push(location.type)
                            }
                            let newLoc = {
                                            id: location.id,
                                            title: location.name,
                                            subTitle: location.type,
                                            family:location.dimension
                                        };
                            this.locations.push(newLoc);
                        });
                    })
            }
        },
        mounted(){
            this.getLocations("")
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
    background-color: #353535;
    border: none;
    color: #acacac;
    width: 20%;
    text-align: center;
    padding: 1vh 1vw;
    border-radius: 25px;
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