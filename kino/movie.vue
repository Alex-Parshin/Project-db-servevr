
<template>
    <div><img v-bind:src="posterUrl"><br><h1>{{name}}</h1><br><p>{{year}}</p></div>
    </template>
    
    <script>
    module.exports = {
    props:["name","year","posterUrl"]
    };
    
    </script>

