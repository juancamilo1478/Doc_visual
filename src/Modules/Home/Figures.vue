<script lang="ts">
import Card_Text from "@/common/Card_Text.vue";

export default {
    name: "Figures",
    components: {
        Card_Text
    },
}
</script>

<template>
    <div class="w-full">
        <h1 class="w-full   px-10 my-10 text-center font-poppins  font-light  text-2xl md:text-2xl"
            style="color: var(--blue-1);">Cifras de los pacientes que han
            creido en nosotros</h1>
        <div class="flex flex-wrap justify-center gap-8   px-5 md:px-0">

            <Card_Text   :text="'Citas realizadas'" item="+" :data="50000" />
            <Card_Text   :text="'Personas atendidas'" item="+" :data="100000" />
            <Card_Text   :text="'Satisfacción'" item="%" :data="5000" />
            <Card_Text   :text="'Comunidad Instagram'" item="+" :data="500" />
        </div>
        <h1 class="w-full py-10 font-poppins font-light text-center text-2xl md:text-2xl" style="color: var(--blue-1);">Empresas que nos eligen
            para cuidar
            de sus equipos</h1>
        <img class="w-full px-3" src="@/assets/images/aliance.png" alt="Imagen 2" />
    </div>

</template>