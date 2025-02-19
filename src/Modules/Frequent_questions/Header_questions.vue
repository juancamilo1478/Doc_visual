<script setup lang="ts">

</script>

<template>
    <div class="w-screen" :style="{ background: 'linear-gradient(to right, white, #c4d1e4)' }">
        <div class="container flex  m-auto">
            <div class="flex flex-col justify-center h-96  w-2/6  ">
                <div class="sm:px-4">
                    <h1 class="px-4 md:px-0  text-5xl font-poppins font-bold" style="color: var(--blue-1);">Preguntas
                    </h1>
                    <h1 class="px-4 md:px-0 text-5xl  md:text-5xl font-poppins font-bold">Frecuentes</h1>
                </div>
            </div>
            <div class="w-1/2  h-96  md:w-1/2 flex flex-col m-auto">
                <div class="flex-grow"></div>
                <img 
                src="@/assets/images/ilustracion.png" 
                alt="Imagen 1" 
               class="w-full h-auto object-cover transform translate-y-10 md:translate-y-12 lg:translate-y-8 hidden md:block"
              />
            </div>
        </div>
    </div>
</template>