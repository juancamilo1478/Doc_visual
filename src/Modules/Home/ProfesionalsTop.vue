<script lang="ts">
import CardTopUser from "@/common/Card_Top_user.vue";
import womman from "@/assets/images/slider4.jpg";
export default {
    name: "ProfesionalTop",
    components: {
        CardTopUser
    },
    setup() {
        return { womman };
    }
}

</script>
<template>
    <div class="w-screen bg-white py-3">
        <div class="w-full">
            <h1 class="text-center w-full font-[Poppins] text-2xl py-1 font-light" style="color: var(--blue-1);">
                Encuentra tu profesional de la salud visual con ubicación y especialidad.
            </h1>
            <h2 class="text-center w-full font-[Poppins] text-black text-2xl font-bold ">Seremos tu mejor aliado en el
                camino hacia tu bienestar
            </h2>
        </div>
        <div class="flex flex-wrap justify-center gap-16 mt-20">
            <CardTopUser 
            :image="womman" 
            :option="'Optometría'" 
            :Description="'Evaluación optométrica integral, También mide y controla alteraciones de la agudeza visual, visión binocular, función de las vías visuales, campos visuales, movimientos oculares y presión intraocular'" 
            :name="'Daniel Gómez Reyes'"
            :experiece="2" 
            :rol="'Oftalmologa'" />
            <CardTopUser 
            :image="womman" 
            :option="'Optometría'" 
            :Description="'Evaluación optométrica integral, También mide y controla alteraciones de la agudeza visual, visión binocular, función de las vías visuales, campos visuales, movimientos oculares y presión intraocular'" 
            :name="'Daniel Gómez Reyes'"
            :experiece="2" 
            :rol="'Oftalmologa'" />
            <CardTopUser 
            :image="womman" 
            :option="'Optometría'" 
            :Description="'Evaluación optométrica integral, También mide y controla alteraciones de la agudeza visual, visión binocular, función de las vías visuales, campos visuales, movimientos oculares y presión intraocular'" 
            :name="'Daniel Gómez Reyes'"
            :experiece="2" 
            :rol="'Oftalmologa'" />
        </div>
        <div class="flex justify-center my-10">
            <button
                    class="font-medium text-2xl font-sans my-4  w-1/4 px-6 py-3 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[var(--blue-1)] hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 rounded-[10px]">
                    Descubre más especialistas

                </button>
        </div>
    </div>

</template>
