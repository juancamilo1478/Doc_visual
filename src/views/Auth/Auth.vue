<script setup lang="ts">
import Colors from '@/common/Colors.vue';
import IconsAuth from './IconsAuth.vue';
</script>

<template>
    <div class="w-screen min-h-screen flex flex-col justify-between bg-gray-100">
        <!-- Contenido de autenticación aquí -->
        <div class="w-full lg:flex-grow max-h-screen  lg:flex   lg:overflow-hidden ">
            <div class="hidden lg:block lg:w-1/2 h-full overflow-hidden">
                <img src="@/assets/images/letters.jpg" alt="Image" class="w-full  min-h-screen object-cover " />
            </div>



            <div class="w-full  lg:w-1/2   flex justify-center">
                <div class=" lg:mx-20 flex flex-col h-fit mx-3 m-auto">
                    <img src="@/assets/images/LogoPng.png" alt="image" class="h-40 w-auto  pt-5 m-auto" />
                    <h1 class="text-center font-poppins text-4xl font-bold pt-6" style="color: var(--blue-1);">Hacemos
                        visibles a los expertos</h1>
                    <h2 class=" font-poppins text-xl   font-semibold w-md m-auto text-center pt-10">Únete a nuestra
                        comunidad de
                        miembros que confían en DocVisual e
                        inicia el camino hacia una real y sana
                        salud visual.
                    </h2>
                    <div class="w-full   flex flex-col items-center px-4">
                     
                        <button
                            class="w-full  mb-5 mt-5 rounded-3xl font-poppins text-xl md:text-2xl cursor-pointer   py-3   font-medium tracking-wide text-white   transition-colors duration-300 transform    hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                            style="background-color: var(--blue-1);">
                            Crear una cuenta
                        </button>
                        <button
                            class="w-full  mb-5 mt-2 rounded-3xl font-poppins text-xl md:text-2xl cursor-pointer   py-3   font-medium tracking-wide text-white   transition-colors duration-300 transform      focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                            style="border: 2px solid var(--blue-1); color: var(--blue-1);">
                            Iniciar sesión
                        </button>
                    </div>
                    <h3 class="text-center mt-9" style="color: var(--blue-1);">Doc visual <span class="text-black">I
                            legal</span></h3>
                    <div class="flex-grow">
                        <IconsAuth />
                    </div>

                </div>
            </div>
        </div>

        <Colors />
    </div>
</template>
