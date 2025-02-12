<template>
    <nav x-data="{ isOpen: false }" class="relative bg-white shadow  ">
        <div class="container px-6 py-3 mx-auto md:flex">
            <div class="flex items-center justify-between">
                <a href="#">
                    <img class="w-auto h-20  " src="@/assets/images/LogoPng.png" alt="">
                </a>
    
                <!-- Mobile menu button -->
                <div class="flex lg:hidden">
                    <button x-cloak @click="isOpen = !isOpen" type="button" class="text-gray-500  hover:text-gray-600   focus:outline-none focus:text-gray-600 " aria-label="toggle menu">
                        <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                
                        <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
    
        
            <div x-cloak :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-2 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between">
                <div class="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0 md:w-full md:justify-between">
                    <a href="#" class="px-1 py-1 font-[Poppins] font-bold text-black transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2">Salud visual y especialistas</a>
                    <a href="#" class="px-1 py-1 font-[Poppins] font-bold text-black transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2">Proposito</a>
                    <a href="#" class="px-1 py-1 font-[Poppins] font-bold text-black transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2">Recursos</a>
                    <a href="#" class="px-1 py-1 font-[Poppins] font-bold text-black transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2">Agende su cita</a>
                    <a href="#" class="px-1 py-1 font-[Poppins] font-bold text-black transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2">Profesionales</a>
                    <a href="#" class="px-1 py-1 font-[Poppins] font-bold text-black transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2">Pacientes  </a>
                    <a href="#" class="px-1 py-1 font-[Poppins] font-bold text-black transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2">Inhouse  </a>
                    <a href="#" class="px-1 py-1 font-[Poppins] font-bold text-black transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2">Blog </a>
                    <a href="#" class="px-1 py-1 font-[Poppins] font-bold text-black transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2">Preguntas frecuentes </a>
                </div>
            </div>
        </div>
    </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBar",
});


</script>