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
    <div class="w-screen  ">  
        <div class="w-[90%] md:container m-auto  py-10">
            <h1 class="w-full text-center font-poppins font-bold text-xl md:text-3xl " style="color: var(--blue-1);">Hacemos
                visibles a los expertos</h1>
            <div class="w-full m-auto flex flex-wrap justify-center md:justify-between gap-8 mt-10 md:mt-20">

                <CardOption 
                :image="OptometristaSosteniendo" 
                :option="'Optometría'" 
                :link="'/specialists?filter=Optómetra'"
                 />


                <CardOption 
                :image="womman" 
                :option="'Oftalmología'" 
                :link="'/specialists?filter=Oftalmología'" />

                <CardOption 
                :image="terapia" 
                :option="'Terapia Visual'" 
                :link="'/specialists?filter=Terapia visual (Ortóptica)'" />


                <CardOption 
                :image="niñaImage" 
                :option="'Optometría Pedriatica'" 
                :link="'/specialists?filter=Pediátrica'" />


            </div>
        </div>
    </div>
</template>
