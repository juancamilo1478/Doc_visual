<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

// Definimos las propiedades y las almacenamos en una constante
const props = defineProps<{
  text: string;
  data: number;
  item:string;
}>();

const currentNumber = ref(0);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(entry.target); // Deja de observar después de hacerse visible
      }
    });
  });

  const target = document.getElementById('animated-number');
  if (target) observer.observe(target);
});

watch(isVisible, (newVal) => {
  if (newVal) {
    let start = 0;
    const end = props.data;
    const step = Math.ceil(end / 150); // Incrementa más rápido (ajusta el divisor para la velocidad)

    const animate = () => {
      start += step; // Aumenta por 'step' en cada frame
      if (start > end) start = end; // Evita pasar el valor final
      currentNumber.value = start;
      if (start < end) requestAnimationFrame(animate);
    };

    animate();
  }
});

</script>

<template>
  <div class="flex justify-center items-center h-full">
    <div
      id="animated-number"
      class="max-w-[350px] lg:w-md rounded-3xl opacity-0 transition-opacity duration-700 flex flex-col justify-center items-center text-center p-6"
      :class="isVisible ? 'opacity-100' : ''"
      style="background-color: var(--bluegray-1); min-height: 300px;"
    >
      <p class="font-poppins text-5xl font-bold w-full pt-8">
        {{ currentNumber }}
        <span class="font-extrabold text-5xl" style="font-family: Verdana, Geneva, Tahoma, sans-serif;"> 
          {{ item }}
        </span>
      </p>
      <p class="text-2xl w-full p-6">
        {{ text }}
      </p>
    </div>
  </div>
  
</template>
