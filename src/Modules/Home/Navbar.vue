<template>
    <nav class="relative bg-white shadow">
      <div class="container   py-3 mx-auto md:flex">
        <div class="flex items-center justify-between">
          <a href="#" @click="goToAbout('/')">
            <img class="w-auto h-13" src="@/assets/images/LogoPng.png" alt="Logo">
          </a>
  
          <!-- Mobile menu button -->
          <div class="flex lg:hidden">
            <button @click="toggleMenu" type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none" aria-label="toggle menu">
              <!-- Icono de abrir -->
              <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
              </svg>
              <!-- Icono de cerrar -->
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Menú -->
       <!-- Menú móvil -->
<div :class="['absolute inset-x-0 z-20 w-full   py-4 transition-all duration-300 ease-in-out bg-white', isOpen ? 'block' : 'hidden', 'md:hidden']">
    <div class="flex flex-col px-2 -mx-4">
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5]" @click="goToAbout('specialists')" :style="{ color: currentRoute === '/specialists' ? 'var(--blue-1)' : 'black' }">Salud visual y especialistas</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5]">Proposito</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5]">Recursos</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5]">Agende su cita</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5]" @click="goToAbout('/auth')">Profesionales</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5]">Pacientes</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5]">Inhouse</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5]" @click="goToAbout('blogs')" :style="{ color: currentRoute === '/blogs' ? 'var(--blue-1)' : 'black' }">Blog</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5]" @click="goToAbout('questions')">Preguntas frecuentes</a>

    </div>
</div>

<!-- Menú de escritorio -->
<div class="hidden lg:flex items-center justify-between w-full   py-4 bg-white">
    <div class="flex flex-row mx-10 w-full justify-between">
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5] md:mx-2 "  @click="goToAbout('specialists')" :style="{ color: currentRoute === '/specialists' ? 'var(--blue-1)' : 'black' }">Salud visual y especialistas</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5] md:mx-2">Proposito</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5] md:mx-2">Recursos</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5] md:mx-2">Agende su cita</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5] md:mx-2" @click="goToAbout('/auth')">Profesionales</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5] md:mx-2">Pacientes</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5] md:mx-2">Inhouse</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5] md:mx-2" @click="goToAbout('blogs')" :style="{ color: currentRoute === '/blogs' ? 'var(--blue-1)' : 'black' }"  >Blog</a>
        <a class="cursor-pointer px-1 py-1 font-poppins font-semibold text-black transition-colors duration-300 transform rounded-lg hover:!text-[#5f9fd5]" @click="goToAbout('questions')"  :style="{ color: currentRoute === '/questions' ? 'var(--blue-1)' : 'black' }"  >Preguntas frecuentes</a>

    </div>
</div>

  

        

      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref, computed,onMounted } from 'vue';
  import { useRouter,useRoute } from 'vue-router';
  const route = useRoute();
  //ruta actual 
  const currentRoute = ref('');
  onMounted(() => {
  currentRoute.value = route.path;
  });


  const router = useRouter();
  // Estado del menú
  const isOpen = ref(false);
  
  // Función para alternar el menú
  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
  };
  
  const goToAbout = (rute:string) => {
    router.push(rute);
  }
  // Clases reactivas para el menú
  const menuClasses = computed(() => {
    return isOpen.value
      ? 'translate-x-0 opacity-100'
      : 'opacity-0 -translate-x-full';
  });
  </script>
  