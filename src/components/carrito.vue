<script>
export default{
    methods:{
        abierto(){
           var detalle=document.getElementById("detalle_carrito")
                detalle.show()
            }
        }
    }
</script>
<template>
    <div class="col item" id="carrito" v-on:click="abierto"><span class="material-symbols-outlined">shopping_cart</span><span id="monto">0.00 Bs</span></div>
</template>
<style scoped>
    #monto{
        font-size: 18px;
    }
    .item{
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .item:hover{
        border: 1px white solid;
        border-radius: 5px;
    }
</style>