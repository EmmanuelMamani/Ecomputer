<script setup>
import encabezadoVue from './components/encabezado.vue';
import barra from './components/barra.vue';
import tarjetaVue from './components/tarjeta.vue';
import detalle_pedidoVue from './components/detalle_pedido.vue';
</script>
<template>
<encabezadoVue></encabezadoVue>
<div id="barras">
    <barra titulo="Novedades">
    </barra><br>
    <div class="contenedor_tarjetas row">
        <tarjetaVue precio="4000" titulo="compu1" imagen="https://www.notebookcheck.org/typo3temp/_processed_/3/c/csm_case11_af5c4e2ddb.jpg"></tarjetaVue>
        <tarjetaVue precio="1000" titulo="compu2" imagen="https://www.notebookcheck.org/typo3temp/_processed_/3/c/csm_case11_af5c4e2ddb.jpg"></tarjetaVue>
        <tarjetaVue precio="2000" titulo="compu3" imagen="https://www.notebookcheck.org/typo3temp/_processed_/3/c/csm_case11_af5c4e2ddb.jpg"></tarjetaVue>
        <tarjetaVue precio="3000" titulo="compu4" imagen="https://www.notebookcheck.org/typo3temp/_processed_/3/c/csm_case11_af5c4e2ddb.jpg"></tarjetaVue>
    </div>
    <barra titulo="Lo mas vendido"></barra>
    <barra titulo="Laptops"></barra>
    <barra titulo="Componentes"></barra>
</div>
<detalle_pedidoVue></detalle_pedidoVue>
</template>

<style scoped>
.linea{
    height: 2px;
    color: aliceblue;
    background-color: white;
}
#pagar{
    display: block;
    height: 30px;
}
.contenedor_tarjetas{
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 2%;
    width: 100%;
}
</style>
<style>
.btn_eliminar{
    font-size: 20px;
    color: rgb(205, 16, 16);
    background-color: white;
    border: solid black 0px;
    margin-left: 10%;
}
</style>