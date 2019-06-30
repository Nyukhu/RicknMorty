<template>
    <router-link :to="{ name : 'location', params: { id: item.id, location: item }}" class="list-item flex-column" :data-id=item.id @click=getCharaters(item.subList)>
        <div class="list-content flex-column center-content">
            <div class="list-infos flex-row space-between">
                <div class="list-align-left flex-row ">
                    <p class="list-title">{{ item.title }}</p>
                    <p class="list-sub">, {{ item.subTitle }}</p>
                </div>
                <p class="list-family">{{ item.family }}</p>
            </div>
        </div> 
                  
    </router-link>
</template>
<script>

export default {
    name: 'ListItem',
    props: ['item'],
    data: function() {
        return  {
            
        }
    },
    methods: {
        
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
.list-item{
    height: 8vh;
    width: 50vw;
    background-color: #202020;
    margin: 0.5vh 1vw;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    text-decoration: none;
}

.list-item:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  background-color: #313131; 
  cursor: pointer;
}
.list-content{
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}
.list-image{
    width: 100%;
    height: 60%;
    background-color: #313131b6;
    
}
.list-infos{
    height: 100%;
    width: 100%;

}
.list-align-left{
    width: 70%
}
.list-title{
    margin-left: 1vw;
    color: white;
    font-size: 1em;

}
.list-sub{
    color: rgb(105, 105, 105);
    font-size: 0.8em;

}
.list-family{
    color: rgb(105, 105, 105);    
    width: 30%;
    font-size: 0.8em;
    text-align: right;
    margin-right:1vw; 


}

</style>