<script setup>
import carritoVue from './carrito.vue';
</script>
<template>
    <div class="row" id="encabezado">
        <span class="col-3">Ecomputer</span>
        <div class="col-6">
            <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="¿Que quieres buscar?" aria-label="Search">
            <button class="btn btn-outline-light" type="submit">Buscar</button>
            </form>
        </div>
        <carritoVue></carritoVue>
        <div class="col item"><span class="material-symbols-outlined">person </span><span id="usuario">Iniciar Sesión</span></div>
    </div>
</template>
<style scoped>
    #encabezado{
        background-color: rgb(55, 55, 55);
        color: white;
        font-size: 20px;
        padding: 2%;
        margin-right: 0%;
    }
    #monto,#usuario{
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