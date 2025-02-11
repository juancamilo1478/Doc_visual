<template>
    <NavBar />
    <Slider />
    <OptionsHome />
    <Steps_Home/>
    <ProfesionalTop/>
    <Histories />
    <Figures />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/Modules/Home/Navbar.vue";
import Slider from "@/Modules/Home/Slider.vue";
import OptionsHome from "@/Modules/Home/OptionsHome.vue";
import Steps_Home from "@/Modules/Home/StepsHome.vue";
import ProfesionalTop from "@/Modules/Home/ProfesionalsTop.vue";
import Histories from "@/Modules/Home/Histories.vue";
import Figures from "@/Modules/Home/Figures.vue";
export default defineComponent({
    name: "Home",
    components: {
        NavBar,
        Slider,
        OptionsHome,
        Steps_Home,
        ProfesionalTop,
        Histories,
        Figures
    },
});

</script>