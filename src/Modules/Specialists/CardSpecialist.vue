<script setup lang="ts">
import type { Specialist } from './Specialist';
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps<{
    specialist: Specialist;
}>();





const goToProfile = () => {

    router.push(`/specialist/${props.specialist.id}`);
};


</script>

<template>
    <div class="w-full max-w-lg    lg:max-w-lg overflow-hidden  rounded-4xl shadow-lg  "
        style="background-color: var(--gray-1); border: 2px solid var(--gray-1);">
        <div class="w-full overflow-hidden bg-white rounded-lg shadow-md  ">
            <div class="m-3">
                <div class="flex items-center">
                    <div class="flex items-center   gap">
                        <div class="w-24 h-24 overflow-hidden rounded-full mx-5 mt-7">
                            <img class="w-full h-full object-cover" :src="specialist.perfilPhoto" alt="Avatar">
                        </div>
                        <div class="text-left mt-6">
                            <h1 class="mx-2 font-semibold   font-poppins text-base   " tabindex="0" role="link">{{
                                specialist.name
                            }}</h1>
                            <h2 class="mx-2 font-light   font-poppins text-sm " tabindex="0" role="link">{{
                                specialist.title }}
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="container p-2 text-left mx-5 mt-2">
                    <h3 class=" font-poppins text-sm ">{{ `Experiencia ${specialist.expetience} años` }}</h3>
                </div>
            </div>
            <div class=" px-3 mb-3">
                <div style="background: var(--gray-2);border-radius: 10px;" class="p-3">
                    <p class="m-3 text-sm text-left min-h-[90px] font-medium text-gray-600 dark:text-gray-400">{{
                        specialist.description }}</p>
                </div>
            </div>
            <div class="flex justify-center my-5 px-4">
                <button @click="goToProfile()"
                    class="cursor-pointer font-medium text-xs lg:text-base font-poppins   py-2   w-3/5 px-6    tracking-wide text-white   transition-colors duration-300 transform bg-[var(--blue-1)] hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 rounded-[10px]">
                    Ver perfil
                </button>
                <button
                    class="cursor-pointer font-medium  text-xs lg:text-base font-poppins mx-4  py-2  w-3/5  px-2  md:px-6     tracking-wide text-white   transition-colors duration-300 transform bg-[var(--blue-1)] hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 rounded-[10px]">
                    Agendar
                </button>
            </div>
        </div>
    </div>

</template>


<style scoped>
.specialist-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    width: 300px;
    text-align: center;
    background: #fff;
}

.profile-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}
</style>
