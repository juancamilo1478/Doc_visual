<script lang="ts">
import Card_Text from "@/common/Card_Text.vue";
export default{
    name:"Figures",
    components:{
        Card_Text
    }
}
</script>

<template>
    <h1 class="w-full pt-10 text-center text-4xl" style="color: var(--blue-1);">Cifras de los pacientes que han creido en nosotros</h1>
    <div class="flex flex-wrap justify-center gap-8 mt-20">
     
        <Card_Text :text="'Citas realizadas'" :data="'78.000x'" />
        <Card_Text :text="'Personas atendidas'" :data="'78.000x'" />
        <Card_Text :text="'Satisfacción'" :data="'78.000x'" />
        <Card_Text :text="'Comunidad Instagram'" :data="'78.000x'" />
    </div>
    <h1 class="w-full py-10 text-center text-4xl" style="color: var(--blue-1);">Empresas que nos eligen para cuidar de sus equipos</h1>
 
</template>