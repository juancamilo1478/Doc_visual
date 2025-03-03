<script setup lang="ts">
import { defineProps } from "vue";

// Definir props con TypeScript
defineProps<{
  onAction: () => void;
  isactive: boolean;
}>();
</script>
<template>
  <nav class="w-screen relative bg-white shadow h-[10dvh] ">
    <div class="w-[90%] md:w-full container flex mx-auto justify-between  ">
      <div class="flex items-center justify-between h-full  ">
        <img class="w-auto h-[10vh]   p-4" src="@/assets/images/LogoPng.png" alt="Logo">
      </div>
      <button @click="onAction" v-if="!isactive"
        class="p-8 text-[var(--blue-1)] hover:text-cyan-700 focus:outline-none   cursor-pointer  ">
        <svg xmlns="http://www.w3.org/2000/svg" class=" h-8 w-8 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  </nav>
</template>