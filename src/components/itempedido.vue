<script>
export default{
    props:{
        Nombre:String,
        Precio: String,
        Cantidad: String
    },
    data:function(){
        return{
            cant:parseInt(this.Cantidad),
            Subtotal: parseInt(this.Cantidad) * parseFloat(this.Precio)
        }
    },
    methods:{
        aumentar(){
            this.cant++
            this.Subtotal= this.cant * parseFloat(this.Precio)
            var total=document.getElementById("total")
            var subtotales=document.getElementsByClassName("subtotal")
            var total_nuevo=0;
            for(var i=0;i<subtotales.length;i++){
                total_nuevo+=parseFloat(subtotales[i].innerHTML)
            }
            total_nuevo+= parseFloat(this.Precio)
            total.innerHTML=total_nuevo+" Bs"
        },
        disminuir(){
            var total=document.getElementById("total")
            var subtotales=document.getElementsByClassName("subtotal")
            var total_nuevo=0;
            for(var i=0;i<subtotales.length;i++){
                total_nuevo+=parseFloat(subtotales[i].innerHTML)
            }
            total_nuevo-= parseFloat(this.Precio)
            total.innerHTML=total_nuevo+" Bs"
            if(this.cant>1){
            this.cant--;
            this.Subtotal= this.cant * parseFloat(this.Precio)
            }else{
                this.$el.innerHTML=""
            }
        }
    }
}
</script>
<template>
        <div class="row">
            <div class="col">{{Nombre}}</div>
            <div class="col">{{Precio}}</div>
            <div class="col">
                <button class="btn_restar material-symbols-outlined" v-on:click="disminuir">remove</button>
                <span class="cantidad" >{{cant}}</span>
                <button class="btn_sumar material-symbols-outlined" v-on:click="aumentar">add</button>
            </div>
            <div class="col"><span class="subtotal">{{Subtotal}}</span><span> Bs</span></div>
       </div>
</template>
<style scoped>
.btn_restar, .btn_sumar{
    width: 30px;
    height: 30px;
    font-size: 15px;
    color: white;
    background-color: rgb(25, 25, 100);
    border-radius: 50%;
}
.cantidad, .btn_sumar {
    margin-left: 5%;
}
</style>