<script setup lang="ts">
defineProps<{
    image: string;
    option: string;
    Description: string;
    name: string;
    experiece: number;
    rol: string;
}>();
</script>
<template>
    <div class="w-full max-w-md    lg:max-w-md overflow-hidden  rounded-4xl shadow-lg  "
        style="background-color: var(--gray-1); border: 2px solid var(--gray-1);">
        <div class="w-full overflow-hidden bg-white rounded-lg shadow-md  ">
            <div class="  w-[90%] m-auto pt-6">
                <div class="flex items-center">
                    <div class="flex items-center   gap-2  ">
                        <div class="w-20  md:w-32 h-20 md:h-32 overflow-hidden rounded-full">
                            <img class="w-full h-full object-cover" :src="image" alt="Avatar">
                        </div>
                        <div class="text-left mx-2">
                            <h1 class="mx-2 font-semibold   font-poppins text-lg   " tabindex="0" role="link">{{ name
                                }}</h1>
                            <h2 class="mx-2 font-light   font-poppins text-lg " tabindex="0" role="link">{{ rol }}
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="container p-2 text-left">
                    <h3 class=" font-poppins text-lg  ">{{ `Experiencia ${experiece} años` }}</h3>
                </div>
            </div>
            <div class=" px-5 mb-3 ">
                <div style="background: var(--gray-2);border-radius: 10px;" class="p-3">
                    <p class="m-3  text-sm md:text-lg text-left  font-poppins  font-light text-gray-600 dark:text-gray-400">{{ Description }}</p>
                </div>
            </div>
            <div class="flex justify-center my-5">
                <button
                    class="cursor-pointer font-medium text-base md:text-xl font-poppins my-4    w-3/5 px-6 py-2   tracking-wide text-white capitalize transition-colors duration-300 transform bg-[var(--blue-1)] hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 rounded-[10px]">
                    Ver perfil
                </button>
            </div>
        </div>
    </div>

</template>