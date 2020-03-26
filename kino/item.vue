<template>
    <div><h1><b>{{ item[index].name }}</b></h1>
    <img v-bind:src="item[index].posterUrl" alt="">
    <p>{{ item[index].description}}</p>
    </div>
</template>
<script>
    let Database = require("./database.js");  
    module.exports={
        data:function(){
           let segment = this.$route.params.index;
           return{
            index: this.$route.params.index,
            item:Database
           };
        }   
 };
</script>