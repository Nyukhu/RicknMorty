<template>
    <div class="card-item flex-column" :id=item.id v-bind:style="{ 'background-image': 'url(' + item.image + ')' }">
        
        <div class="fav-star" v-on:click=fav(item.id)><i class="far fa-star"></i></div>
        <div class="card-content flex-row space-between" v-on:click=toggleInfos(item.id)>
            <div class="card-infos flex-row center-content">
                <p class="card-title">{{ item.name }}</p>
            </div>
            <div class="detail">
                <p class="detail-field"> <span>espèce :</span> {{ item.species }}</p>
                <p class="detail-field"> <span>origine :</span> {{ item.origin }}</p>
                <p class="detail-field"> <span>statut :</span> {{ item.status }}</p>
                <p class="detail-field"> <span>genre :</span> {{ item.gender }}</p>
                <p class="detail-field"> <span>type :</span> {{ item.type }}</p>
            </div>
        </div> 
                  
    </div>
</template>
<script>

export default {
    name: 'CardItem',
    props: ['item'],
    data: function() {
        return  {
            
        }
    },
    methods: {

        
        fav : function(id){
            let clickedCard = document.getElementById(id);
            let starContainer = clickedCard.querySelector(".fav-star");

            if (!starContainer.classList.contains('clicked')) {
                starContainer.classList.add('clicked');
                starContainer.style.border = "";
                starContainer.style.backgroundColor = "greenyellow";
                starContainer.style.color = "#2c2c2c";
                this.addFav(id)

                
            }else{
                
                starContainer.classList.remove('clicked');                
                starContainer.style.border = "solid 1px greenyellow";
                starContainer.style.backgroundColor = "";
                starContainer.style.color = "greenyellow";
                this.deleteFav(id)
                
            }
        },
        //fonction toogleInfos : sert a display/cacher les informations des résidents
        //params : 
        //id : id de la card qui à été cliquée et du résident
        toggleInfos : function(id){
            let clickedCard = document.getElementById(id)

            let detail = clickedCard.querySelector(".detail")
            let cardInfos = clickedCard.querySelector(".card-infos")
            let detailFields =  detail.querySelectorAll('.detail-field')
           

            if (!detail.classList.contains("show")) {
                detail.style.width = "100%"
                detail.classList.add("show")
                detailFields.forEach(element => {
                    element.style.display = ""
                });

                cardInfos.style.width = "0%";
                cardInfos.style.display = "none";

            }
            else{
                detail.style.width = "0%"
                detail.classList.remove("show")
                detailFields.forEach(element => {
                    element.style.display = "none"
                });

                cardInfos.style.width = "100%";
                cardInfos.style.display = "";
            }
        },
        addFav : function(id){
            let favoriteResident = {user_iduser : 1, resident_idresident : id}

            this.$http
                    .post("http://localhost:3000/residents",favoriteResident)
                    .then((response) => {
                        console.log(response)
                    })
                     .catch(function (error) {
                        console.log(error);
                    });
        },
        deleteFav : function(id){
            this.$http
                    .delete("http://localhost:3000/residents",{ data: {user_iduser : 1, resident_idresident : id}})
                    .then((response) => {
                        console.log(response)
                    })
                     .catch(function (error) {
                        console.log(error);
                    });
        },
        isFav : function(){
             this.$http
                    .get("http://localhost:3000/residents")
                    .then((response) => {
                        response.data.forEach((resident) => {
                            if (resident.resident_idresident == this.item.id) {
                                
                                let starContainer = this.$el.querySelector(".fav-star");
                                console.log(starContainer)
                                starContainer.classList.add('clicked');
                                starContainer.style.border = "";
                                starContainer.style.backgroundColor = "greenyellow";
                                starContainer.style.color = "#2c2c2c";
                            }
                        })
                    })
        }
    },
    mounted(){
        this.isFav();
        //initialisation du style du détail et des infos de la carte
        let detailFields =  document.querySelectorAll('.detail-field')
        let cardInfos =  document.querySelectorAll('.card-infos')
        detailFields.forEach(element => {
            element.style.display = "none"
        });
        cardInfos.forEach(element => {
            element.style.width = "100%"
        });
    }
}
</script>

<style scoped>

.flex-column{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.flex-row{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.center-content{
    justify-content: center;

}
.space-between{
    justify-content: space-between;

}
.card-item{
    height: 250px;
    width: 250px;
    margin: 2vh 1vw;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    text-decoration: none;
    position: relative;

}

.card-item:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  background-color: #313131; 
  cursor: pointer;
}
.card-content{
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #202020d3;
    position: relative;
   
}
.card-image{
    width: 100%;
    height: 60%;
    background-color: #313131b6;
    
}
.card-infos{
    height: 100%;
    width: 0%;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

}

.card-title{
    margin-left: 1vw;
    color: white;
    font-size: 1em;

}
.detail{
    width: 0%;
    height: 100%;
    background-color: #0f0f0fb6;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
     
}
.detail-field{
    color: rgb(50, 221, 107);
    font-size: 0.8em;
    display: flex;
    flex-direction: row;
    justify-content:center;
}
.detail-field span{
    color: rgb(88, 88, 88);
}
.card-family{
    color: rgb(105, 105, 105);    
    width: 30%;
    font-size: 0.8em;
    text-align: right;
    margin-right:1vw; 


}
.fav-star{
    height: 5vh;
    width: 5vh;
    color: greenyellow;
    font-size: 1.5em;
    position: absolute;
    top:0%;
    left:83%;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px greenyellow;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

}

</style>