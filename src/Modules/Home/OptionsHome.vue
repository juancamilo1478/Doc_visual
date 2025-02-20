<script lang="ts">
import CardOption from "@/common/CardOption.vue"
import { defineComponent } from "vue";
import niñaImage from "@/assets/images/niña.png"; 
import OptometristaSosteniendo  from "@/assets/images/optometrista-sosteniendo.png"; 
import terapia from "@/assets/images/terapia.png"; 
import womman from "@/assets/images/womman.png"; 

export default defineComponent({
    name: "OptionsHome",
    components: {
        CardOption
    },
    setup() {
        return { niñaImage ,terapia,womman,OptometristaSosteniendo};   
    }
});

</script>
<template>
    <div class="w-screen backdrop:text-amber-200">
        <div class="w-full py-10">
            <h1 class="w-full text-center font-poppins font-bold text-3xl " style="color: var(--blue-1);">Hacemos
                visibles a los expertos</h1>
            <div class="container m-auto flex flex-wrap justify-center md:justify-between gap-8 mt-20">

                <CardOption 
                :image="OptometristaSosteniendo" 
                :option="'Optometría'" 
                :link="'/optometria'"
                 />


                <CardOption 
                :image="womman" 
                :option="'Oftalmología'" 
                :link="'/optometria'" />

                <CardOption 
                :image="terapia" 
                :option="'Terapia Visual'" 
                :link="'/optometria'" />


                <CardOption 
                :image="niñaImage" 
                :option="'Optometría Pedriatica'" 
                :link="'/optometria'" />


            </div>
        </div>
    </div>
</template>
