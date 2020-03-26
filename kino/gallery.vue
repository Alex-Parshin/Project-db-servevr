<template>
    <div class="gallery">
        <router-link v-for="(item, index) in movies" :to="'/items/'+index"> 
        <movie v-bind:name="item.name" v-bind:year="item.year" v-bind:posterUrl="item.posterUrl"></movie>
        <span>{{$route.params.index}}</span>
        </router-link>
    </div>
</template>
<script>
    let Movie = require("./movie.vue");
    let Database = require("./database.js");
    
    module.exports={
       data: function(){
        return {
            movies:Database
        }
    },
    components:{
        movie: Movie
    }
};
    
</script>