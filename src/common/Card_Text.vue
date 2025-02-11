<script setup lang="ts">
defineProps<{
    text: string;
    data:string;
}>();
</script>
<template>
<div class="w-sm lg:w-md  rounded-3xl "  style="background:  #d4dbe5">
    <p class="text-5xl font-bold w-full text-center  pt-8   ">
        {{ data }}
    </p>
    <p class="text-2xl w-full text-center  p-6">
        {{ text }}
    </p>
</div>
</template>