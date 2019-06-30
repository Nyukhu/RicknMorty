<template>
    <div class="card-item flex-column" :id=item.id v-bind:style="{ 'background-image': 'url(' + item.image + ')' }" v-on:click=toggleInfos(item.id)>
        <div class="card-content flex-row space-between">
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

        //fonction toogleInfos : sert a display/cacher les informations des résidents
        //params : 
        //id : id de la card qui à été cliquéé et du résident
        
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
        }
    },
    mounted(){

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

</style>