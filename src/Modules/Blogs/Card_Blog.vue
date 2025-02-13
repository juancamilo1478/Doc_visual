<script setup lang="ts">
 import { useRouter  } from 'vue-router';
defineProps<{
    id:number
    name: string;
    photo: string;
    description: string;
}>();
const router = useRouter();
const goToAbout = (id: number) => {
    router.push(`/blogs/${id.toString()}`);
}
</script>
<template>
    <div class="w-sm md:w-md lg:w-lg cursor-pointer" @click="goToAbout(id)">
        <img :src="photo" alt="Image" class="w-full h-72 object-cover rounded-3xl mb-4" />
        <h1 class="mt-2 font-semibold">{{ description }}</h1>
    </div>

</template>