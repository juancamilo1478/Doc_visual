<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const items = ["Gracias a las nuevas lentes trifocales de Zeiss, puedo ver el mundo de una forma totalmente nueva, por ejemplo, el titilar de las estrellas, los colores, todo se me muestra con unos colores mucho más vivos", "Hace más o menos 15 años que estoy en consulta con la Dra. Carolina Uribe... Ella me recetó lentes gas permeable y he estado muy satisfecha desde que los he estado utilizando", "Después de la operación es como si mi cirugía ocular fue un éxito total. Ya estaba casi ciega de un ojo y no podía dar un paso sin gafas durante más de 30 años", "Gracias a las nuevas lentes trifocales de Zeiss, puedo ver el mundo de una forma totalmente nueva, por ejemplo, el titilar de las estrellas, los colores, todo se me muestra con unos colores mucho más vivos"];
</script>

<template>
    <div class="w-screen py-20 " :style="{ background: 'linear-gradient(to right, white, #c4d1e4)' }">
        <h1 class="font-sans w-full text-center pt-9 text-2xl font-bold" style="color: var(--blue-1);">
            Historias de nuestros pacientes
        </h1>

        <div class="w-full flex justify-center">
            <h2 class="font-sans w-1/2   text-center py-4 text-xl md:text-3xl font-bold">
                Estos testimonios nos reafirman que estamos cuidando de la salud visual tanto de niños como de adultos.
            </h2>
        </div>
        <div class="w-full  ">
            <Swiper :slides-per-view="3" :loop="true" :space-between="20"
                :autoplay="{ delay: 2500, disableOnInteraction: false }" :speed="1000" :modules="[Autoplay]"
                class="w-full px-6 mt-10">
                <SwiperSlide v-for="(item, index) in items" :key="index">
                    <div class="p-6 py-8 bg-white text-2xl rounded-3xl   text-center   ">
                        <span class="text-4xl" style="color: var(--blue-1);">"</span>
                        {{ item }}
                        <span class="text-4xl" style="color: var(--blue-1);">"</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>
