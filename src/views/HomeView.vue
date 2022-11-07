
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
</template>

<style scoped>
.contenedor_tarjetas{
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 2%;
    width: 100%;
}
</style>
