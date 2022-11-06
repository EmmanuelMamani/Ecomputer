<script>
export default{
    props:{
        titulo:String,
        imagen:String,
        precio:String
    },
    data:function(){
        return{cantidad:0}
    },
    methods:{
        aumentar(){
            this.cantidad++;
        },
        disminuir(){
            if(this.cantidad!=0){
                this.cantidad--;
            }
        }
    }
}
    $("button").click(function(){
        console.log("hola");
    })
</script>
<template>
    <div class="contenedor_tarjeta">
        <h4 class="titulo_tarjeta">{{titulo}}</h4>
        <img v-bind:src="imagen" alt="" class="imagen_tarjeta">
        <h5 class="precio_tarjeta">{{precio}} Bs.</h5>
        <button class="btn_restar material-symbols-outlined" v-on:click="disminuir">remove</button>
        <span class="cantidad" >{{cantidad}}</span>
        <button class="btn_sumar material-symbols-outlined" v-on:click="aumentar">add</button>
        <button class="btn_añadir">Añadir</button>
    </div>
</template>
<style scoped>
.contenedor_tarjeta{
    width: 20%;
    border: solid black 1px;
    padding: 1%;
    margin-left: 4%;
    border-radius: 10px;
}
.contenedor_tarjeta:hover{
    border: solid 3px rgb(25, 25, 100);
}
.imagen_tarjeta{
    width: 70%;
    display: block;
    margin-left: 15%;
}
.titulo_tarjeta{
    text-align: center;
    color: rgb(25, 25, 100);
}
.precio_tarjeta{
    text-align: center;
}
.btn_restar, .btn_sumar{
    width: 30px;
    height: 30px;
    font-size: 15px;
    color: white;
    background-color: rgb(25, 25, 100);
    border-radius: 50%;
    margin-left: 10%;
}
.btn_añadir{
    font-size: 15px;
    color: white;
    background-color: rgb(25, 25, 100);
    border-radius: 5px;
    margin-left: 10%;
}
.cantidad{
    margin-left: 10%;
}
</style>