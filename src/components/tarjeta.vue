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
        },
        añadir(){
                if(this.cantidad>0){
                //verificar existencia del item
                var items=document.getElementsByClassName("nombre_item")
                var item=null
                for(var i=0; i<items.length;i++){
                    if(items[i].innerHTML==this.titulo){
                        item=items[i].parentNode
                    }
                }
                if(item == null){
                    //Mostrar en el carrito el precio
                    var con_monto=document.getElementById('monto');
                    var monto = parseFloat(con_monto.innerHTML.split(" ")[0])
                    var total= monto + this.cantidad * this.precio;
                    con_monto.innerHTML=total+" Bs"
                    //Añadir al detalle
                    var contenedor= document.getElementById("items_pedidos")
                    var itempedido= document.createElement("div")
                    itempedido.className="row"
                    var Nombre=document.createElement("div")
                    Nombre.className="col nombre_item"
                    Nombre.innerHTML=this.titulo
                    var precio_item= document.createElement("div")
                    precio_item.className="col"
                    precio_item.innerHTML=this.precio
                    var cantidad_item=document.createElement("div")
                    cantidad_item.className="col"
                    cantidad_item.innerHTML=this.cantidad
                    var subtotal=document.createElement("div")
                    subtotal.className="col"
                    subtotal.innerHTML= this.cantidad * parseFloat(this.precio)
                    itempedido.appendChild(Nombre)
                    itempedido.appendChild(precio_item)
                    itempedido.appendChild(cantidad_item)
                    itempedido.appendChild(subtotal)
                    contenedor.appendChild(itempedido)
                    var contenedor_btn_eliminar=document.createElement("div")
                    contenedor_btn_eliminar.className="col"
                    var btn_eliminar=document.createElement("button")
                    btn_eliminar.className="btn_eliminar material-symbols-outlined"
                    btn_eliminar.innerHTML="delete"
                    contenedor_btn_eliminar.appendChild(btn_eliminar)
                    itempedido.appendChild(contenedor_btn_eliminar)
                    btn_eliminar.onclick=function(){
                    btn_eliminar.parentNode.parentNode.parentNode.removeChild(btn_eliminar.parentNode.parentNode)
                    }
                }else{
                    console.log("hola");;
                }
            }
        }
    }
}
</script>
<template>
    <div class="contenedor_tarjeta">
        <h4 class="titulo_tarjeta">{{titulo}}</h4>
        <img v-bind:src="imagen" alt="" class="imagen_tarjeta">
        <h5 class="precio_tarjeta">{{precio}} Bs.</h5>
        <button class="btn_restar material-symbols-outlined" v-on:click="disminuir">remove</button>
        <span class="cantidad" >{{cantidad}}</span>
        <button class="btn_sumar material-symbols-outlined" v-on:click="aumentar">add</button>
        <button class="btn_añadir" v-on:click="añadir">Añadir</button>
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