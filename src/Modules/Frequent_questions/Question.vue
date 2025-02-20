<script setup lang="ts">


defineProps<{
    state: boolean;
    question: string;
    text: string;
}>();
// Definir los eventos que el componente puede emitir
const emit = defineEmits(['toggleState']);

// Función para emitir el evento cuando se hace clic
const handleClick = () => {
    emit('toggleState');
};
</script>
<template>
    <div class="w-full border p-3 rounded-2xl border-gray-300 mb-4">
        <div class="w-full flex items-center px-2">
            <h1 class="text-xl font-semibold font-poppins max-w-[80%]">{{ question }}</h1>
            <img src="@/assets/svg/arrow.svg" alt="Icono" class="w-8 h-8 transition-transform ml-auto"
                :class="{ 'rotate-90': state }" @click="handleClick">
        </div>
        <transition enter-active-class="transition-opacity duration-500" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition-opacity duration-500"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <h2 v-if="state" class="text-xl pt-2">{{ text }}</h2>
        </transition>
    </div>
</template>