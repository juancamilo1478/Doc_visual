<script lang="ts">
import StepsItem from "./StepsItem.vue"

export default {
    name: "StepHome",
    components: {
        StepsItem
    }
}

</script>

<template>
    <div class="w-screen  my-9" :style="{ background: 'linear-gradient(to right, white, #f8f9fd)' }">
        <div class="container mx-auto pt-10 flex flex-col lg:flex-row">
            <div class="w-full  lg:w-3/5 px-3 lg:px-0">
                <h1 class="font-sans font-semibold text-2xl" style="color: var(--blue-1);">¿Cómo encontrar a tu
                    especialista confiable e ideal para tu cita?</h1>
                <h1 class="font-sans   font-medium text-2xl text-black pt-5">Haz estos simples pasos:</h1>
                <StepsItem :text='"Filtra según tus necesidades y preferencias, ubicación y encuentra tu especialista."'
                    :title='"Elige a tu especialista ideal"' :number='1' />
                <StepsItem
                    :text='"Agenda una cita con el especialista que se adapte a tus necesidades, horarios y preferencias."'
                    :title='"Agenda tu cita "' :number='2' />
                <StepsItem :title='"Crea tu cuenta."' :number='3' />
                <StepsItem :title='"Empieza a tener a la mano a tu especialista."' :number='4' />
                <div class="container p-5">
                    <button
                        class="font-semibold w-full px-6 py-2 text-2xl tracking-wide text-white   transition-colors duration-300 transform bg-[var(--blue-1)] hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 rounded-[10px] cursor-pointer">
                        Inicia el camino hacia una real y sana salud visual.
                    </button>
                </div>
            </div>
            <div>
                <img class="w-full px-3" src="@/assets/images/pc1.png" alt="Imagen 2" />
            </div>
        </div>
    </div>

</template>