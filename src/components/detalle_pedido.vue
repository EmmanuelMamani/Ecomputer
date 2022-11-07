<script>
    export default{
    methods:{
        cerrar(){
                var detalle=document.getElementById("detalle_carrito")
                detalle.close()
                 }
            }
    }
</script>
<template>
    <dialog id="detalle_carrito">
        <button class="material-symbols-outlined cerrar" v-on:click="cerrar">close</button>
       <h3>Detalle del pedido</h3>
       <div class="row">
            <div class="col">Producto</div>
            <div class="col">Costo unitario</div>
            <div class="col">Unidades</div>
            <div class="col">Subtotal</div>
            <div class="col">Eliminar</div>
       </div>
       <div id="items_pedidos">
       </div>
       <hr>
       <div class="row">
            <div class="col-6">El monto total a pagar es </div>
            <div id="total" class="col">0</div><br><br>
       </div>
       <button id="pagar">Pagar</button>
    </dialog>
</template>
<style scoped>
h3{
    text-align: center;
}
#detalle_carrito{
    top: 20%;
    width: 50%;
    height: 50%;
}
#pagar{
    padding: 1%;
    margin-left: 80%;
    width: 15%;
    background-color: rgb(25, 25, 100);
    color: white;
}
.cerrar{
    width: 30px;
    height: 30px;
    font-size: 16px;
    color: rgb(0, 0, 0);
    border-radius: 50%;
    margin-left: 93%;
}
#cerrar:hover{
    background-color: red;
}
#total{
    margin-left: 10%;
}
</style>