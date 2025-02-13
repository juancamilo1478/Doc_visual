<script setup lang="ts">
defineProps<{
    id:number
    name: string;
    photo: string;
    description: string;
}>();

</script>
<template>
    <div class="w-sm md:w-md lg:w-lg">
        <img :src="photo" alt="Image" class="w-full h-60 object-cover rounded-3xl mb-4" />

        <h1 class="mt-2">{{ description }}</h1>
    </div>

</template>