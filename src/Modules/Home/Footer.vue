<script   lang="ts">
import FooterColor from "@/common/Footer_Color.vue";
import IconsAuth from "@/views/Auth/IconsAuth.vue";
export default{
    name:"Footer",
    components:{
        FooterColor,
        IconsAuth
    }
}
</script>

<template>
    <footer class="bg-white ">
        <div class="container py-8 mx-auto">
            <div class="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">


                <div class="px-6">
                    <a href="#">
                        <img class="w-auto  h-14 md:h-24  " src="@/assets/images/LogoPng.png" alt="">
                    </a>

                    <p class="max-w-sm mt-2   " style="color: var(--blue-1);">+ 57 300 4555666</p>
                    <p class="max-w-sm mt-2   " style="color: var(--blue-1);">hola@docvisual.co</p>

                </div>
                <div>
                    <div class="text-xs font-poppins font-semibold  uppercase" style="color: var(--blue-1);">
                        Salud visual y especialistas
                    </div>

                    <a href="#"
                        class="block mt-5 text-xs md:text-sm font-poppins text-black duration-700  hover:text-gray-400  hover:underline">
                        Optómetras
                    </a>
                    <a href="#"
                        class="block mt-3  text-xs md:text-sm font-poppins text-black duration-700  hover:text-gray-400  hover:underline">
                        Oftalmólogos
                    </a>
                    <a href="#"
                        class="block mt-3 text-xs md:text-sm font-poppins text-black duration-700  hover:text-gray-400  hover:underline">
                        Ópticas
                    </a>
                    <a href="#"
                        class="block mt-3 text-xs md:text-sm font-poppins text-black duration-700  hover:text-gray-400  hover:underline">
                        IPS
                    </a>
                </div>




                <div   class="hidden md:block">
                    <div class="text-xs font-poppins font-semibold  uppercase " style="color: var(--blue-1);">
                        Propósito
                    </div>

                    <a href="#"
                        class="block mt-5 text-xs md:text-sm font-poppins text-black duration-700  hover:text-gray-400  hover:underline">
                        Recursos
                    </a>
                    <a href="#"
                        class="block mt-3 text-xs md:text-sm font-poppins text-black duration-700  hover:text-gray-400  hover:underline">
                        Agende su cita
                    </a>
                    <a href="#"
                        class="block mt-3 text-xs md:text-sm font-poppins text-black duration-700  hover:text-gray-400  hover:underline">
                        Profesionales
                    </a>
                    <a href="#"
                        class="block mt-3 text-xs md:text-sm font-poppins text-black duration-700  hover:text-gray-400  hover:underline">
                        Pacientes
                    </a>

                </div>

                <div   class="hidden md:block">
                    <div class="text-xs font-poppins font-semibold  uppercase" style="color: var(--blue-1);">
                        Inhouse
                    </div>

                    <a href="#"
                        class="block mt-5 text-xs md:text-sm font-poppins text-black duration-700  hover:text-gray-400  hover:underline">
                        Blog
                    </a>
                    <a href="#"
                        class="block mt-3 text-xs md:text-sm font-poppins text-black duration-700  hover:text-gray-400  hover:underline">
                        Preguntas frecuentes
                    </a>



                </div>
                <div   class="hidden md:block">
                    <div class="text-xs font-poppins font-semibold  uppercase" style="color: var(--blue-1);">
                        Doc Visual
                    </div>

                    <a href="#"
                        class="block mt-5 text-xs md:text-sm font-poppins text-black   duration-700  hover:text-gray-400  hover:underline">
                        Legal
                    </a>
                    <a href="#"
                        class="block mt-3 text-xs md:text-sm font-poppins text-black duration-700  hover:text-gray-400  hover:underline">
                        Habla con soporte
                    </a>
                    <a href="#"
                        class="block mt-3 text-xs md:text-sm font-poppins text-black duration-700  hover:text-gray-400  hover:underline">
                        Iniciar sesión Registrarme
                    </a>

                </div>


                <div   class="hidden md:block">
                    
                    <IconsAuth/>
                    
                </div>


            </div>

        </div>

    </footer>
    <FooterColor color="#f3f4f6"/>



</template>
