<script>
export default{
    props:{
        titulo:String,
    }
}
</script>
<template>
    <div id="contenedor_barra">
        <h3>{{titulo}}</h3>
    </div>
</template>
<style scoped>
#contenedor_barra{
    background-color: rgb(55, 55, 55);
    color: white;
    margin-top: 1%;
    margin-left: 2%;
    margin-right: 2%;
    padding: 1%;
    border-radius: 5px;
}
</style>