<script setup lang="ts">
defineProps<{
    image: string;
    option: string;
    link: string;
}>();
</script>
<template>
    
        <div class="w-full max-w-xs overflow-hidden shadow-lg rounded-3xl flex flex-col" style="background-color: var(--gray-1);">
            <div class="py-5 px-8 text-center">
                <a href="#" class="text-2xl font-poppins font-bold text-gray-800">
                    <span>
                        {{ option }}
                    </span>
                </a>
            </div>
    
            <!-- Este div crecerá para ocupar el espacio sobrante -->
            <div class="flex-grow"></div>
    
            <div class="flex flex-col items-center px-6 pb-6">
                <img class="object-cover w-auto h-56 max-w-full" :src="image" alt="Imagen de opción">
                <button class="w-full font-poppins font-semibold text-xl py-2 tracking-wide text-white transition-colors duration-300 transform rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" style="background: var(--blue-1);">
                    Pedir cita ahora
                </button>
            </div>
        </div>
    
    
</template>
