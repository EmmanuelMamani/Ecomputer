
<script setup>
import encabezadoVue from '../components/encabezado.vue';
import barra from '../components/barra.vue';
import tarjetaVue from '../components/tarjeta.vue';
</script>

<template>
<encabezadoVue></encabezadoVue>
<div id="barras">
    <barra titulo="Novedades">
    </barra><br>
    <div class="contenedor_tarjetas row">
        <tarjetaVue precio="5000" titulo="compu" imagen="https://www.notebookcheck.org/typo3temp/_processed_/3/c/csm_case11_af5c4e2ddb.jpg"></tarjetaVue>
        <tarjetaVue precio="5000" titulo="compu" imagen="https://www.notebookcheck.org/typo3temp/_processed_/3/c/csm_case11_af5c4e2ddb.jpg"></tarjetaVue>
        <tarjetaVue precio="5000" titulo="compu" imagen="https://www.notebookcheck.org/typo3temp/_processed_/3/c/csm_case11_af5c4e2ddb.jpg"></tarjetaVue>
        <tarjetaVue precio="5000" titulo="compu" imagen="https://www.notebookcheck.org/typo3temp/_processed_/3/c/csm_case11_af5c4e2ddb.jpg"></tarjetaVue>
    </div>
    <barra titulo="Lo mas vendido"></barra>
    <barra titulo="Laptops"></barra>
    <barra titulo="Componentes"></barra>
</div>
<detalle_pedidoVue></detalle_pedidoVue>
</template>

<style scoped>
.contenedor_tarjetas{
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 2%;
    width: 100%;
}
.linea{
    height: 2px;
    color: aliceblue;
    background-color: white;
}
#pagar{
    display: block;
    height: 30px;
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
