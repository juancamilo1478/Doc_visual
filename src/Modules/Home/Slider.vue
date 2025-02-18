<script setup lang="ts" >
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Autoplay,Pagination } from "swiper/modules"; 
</script>

<template>
  <div class="relative w-screen h-[400px] md:h-[700px]">
    <Swiper 
    :slides-per-view="1" 
    :autoplay="{ delay: 3000 }" 
    :modules="[Autoplay, Pagination]"
    :pagination="{ clickable: true }" 
    loop
    class="w-full h-full"
    >
      <SwiperSlide>
        <img 
          src="@/assets/images/slider1.jpg" 
          alt="Imagen 1" 
           class="   w-full    h-full  object-cover object-center  "
        />
      </SwiperSlide>
      <SwiperSlide>
        <img 
        src="@/assets/images/slider2.jpg" 
          alt="Imagen 2" 
       class="   w-full    h-full  object-cover object-center "
        />
      </SwiperSlide>
      <SwiperSlide>
        <img 
        src="@/assets/images/slider3.jpg" 
          alt="Imagen 3" 
        class="   w-full    h-full   object-cover object-center "
        />
      </SwiperSlide>
      <SwiperSlide>
        <img 
        src="@/assets/images/slider4.jpg" 
          alt="Imagen 3" 
        class="   w-full   h-full   object-cover object-center"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style>
/* Cambiar color de los puntos de paginación */
.swiper-pagination-bullet {
  background-color: transparent !important; /* Color de los puntos */
  width: 20px; /* Tamaño de los puntos */
  height: 20px;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  border:2px solid white;
}

/* Color del punto activo */
.swiper-pagination-bullet-active {
  background-color: #769bd2 !important; /* Color del punto activo */
  opacity: 1;
}
</style>