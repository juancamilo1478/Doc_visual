<script lang="ts">
import CardTopUser from "@/common/Card_Top_user.vue";
import womman from "@/assets/images/slider4.jpg";
import womman2 from "@/assets/images/slider2.jpg";
import womman3 from "@/assets/images/slider3.jpg";
export default {
    name: "ProfesionalTop",
    components: {
        CardTopUser
    },
    setup() {
        return { womman, womman2, womman3 };
    }
}

</script>
<template>
    <div class="w-screen bg-white py-3">
        <div class="container m-auto">
            <h1 class="text-center px-5 w-full font-poppins text-xl md:text-2xl py-1   font-semibold"
                style="color: var(--blue-1);">
                Encuentra tu profesional de la salud visual con ubicación y especialidad.
            </h1>
            <h2 class="text-center px-5 w-full font-poppins text-black text-xl md:text-2xl  font-bold ">Seremos tu mejor
                aliado en el
                camino hacia tu bienestar
            </h2>
        </div>
        <div class="container m-auto flex justify-center">
            <div class="container mx-auto grid gap-4 text-center mt-20 
            grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">

                <CardTopUser :image="womman" :option="'Optometría'"
                    :Description="'Evaluación optométrica integral, También mide y controla alteraciones de la agudeza visual, visión binocular, función de las vías visuales, campos visuales, movimientos oculares y presión intraocular'"
                    :name="'Daniel Gómez Reyes'" :experiece="2" :rol="'Oftalmóloga'" />

                <CardTopUser class="hidden md:block" :image="womman2" :option="'Optometría'"
                    :Description="'Evaluación optométrica integral, También mide y controla alteraciones de la agudeza visual, visión binocular, función de las vías visuales, campos visuales, movimientos oculares y presión intraocular'"
                    :name="'María Gómez Reyes'" :experiece="5" :rol="'Optómetra'" />

                <CardTopUser class="hidden lg:block" :image="womman3" :option="'Optometría'"
                    :Description="'Evaluación optométrica integral, También mide y controla alteraciones de la agudeza visual, visión binocular, función de las vías visuales, campos visuales, movimientos oculares y presión intraocular'"
                    :name="'Manuela García Gómez'" :experiece="2" :rol="'Oftalmóloga'" />
            </div>

        </div>
        <div class="flex justify-center my-20">
            <button
                class="cursor-pointer font-medium text-lg font-poppins my-1    px-6 py-1.5 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[var(--blue-1)] hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 rounded-[10px]">
                Descubre más especialistas

            </button>
        </div>
    </div>

</template>
