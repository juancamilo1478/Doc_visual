<script setup lang="ts">
defineProps<{
    image: string;
    option: string;
    link: string;
}>();
</script>
<template>
    <div class="w-full max-w-xs overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800" style="background-color: var(--gray-1);">
        <div class="py-5 text-center">
            <a href="#" class="block text-2xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link"> {{
                option
            }}</a>

        </div>
        <div class="w-full px-6 pb-5">
            <img class="object-contain w-full h-56" :src="image" alt="Imagen de opción">
            <button
                class="w-full px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" style="background: var(--blue-1);">
                Pedir cita ahora
            </button>
        </div>
        
    </div>

</template>