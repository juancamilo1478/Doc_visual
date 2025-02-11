<script setup lang="ts">
defineProps<{
    element: string;
    size: number;
    color: string;
}>();
</script>

<template>
    <div class="flex items-center justify-center rounded-full text-white font-bold" :style="{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        fontSize: `${size / 3}px`
    }">
        <h1 class="text-2xl">
            {{ element }}
        </h1>
    </div>
</template>