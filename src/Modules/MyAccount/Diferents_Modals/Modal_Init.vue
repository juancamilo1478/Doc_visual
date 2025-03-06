<script lang="ts">
import { Genre, GenreLabels } from "@/models/User_Num"
export default {
    name: "modal_init",
    data() {
        return {
            contact:{
                email:'',
                name:'',
                lastname:'',
                phone:''
            },
            name: '',
            lastname: '',
            genre: Genre.MEN,
            optionsGenre: Genre,
            genreLabels: GenreLabels,
            day: 1,
            month: 1,
            year: new Date().getFullYear(),
            days: Array.from({ length: 31 }, (_, i) => i + 1),
            months: [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ],
              phone: '',
            years: Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i) // Últimos 100 años
        }
    },methods:{
        validatePhone(event: Event) {
            const input = event.target as HTMLInputElement;
            this.phone = input.value.replace(/\D/g, ''); // Elimina todo lo que no sea un número
        }
    }
}

</script>
<template>
    <div class="w-full h-full overflow-y-auto ">
     
        <div class="w-full ">
            <h1 class="text-2xl p-2 font-semibold w-[90%] m-auto my-6">Mi cuenta</h1>
            <hr class="text-gray-300" />
        </div>
        <h1 class=" text-center p-2   w-[90%] m-auto my-6">¡Hola Mónica!</h1>
        <div class="w-[90%] m-auto flex">
            <div class="w-[50%]   p-5  ">
                <div class="w-full p-4 bg-white border border-gray-200 ">
                    <div class="w-full  py-3 cursor-pointer">
                        <h2 class="text-[var(--blue-1)] font-semibold mb-3">Mi cuenta</h2>
                          <hr class="text-gray-300" />
                    </div>
                    <div class="w-full  py-3 cursor-pointer">
                        <h2>Plan Fidelización</h2>
                        <hr class="mt-3 text-gray-300" />
                    </div>
                    <div class="w-full  py-3 cursor-pointer ">
                        <h2>Mis favoritos</h2>
                        <hr class="mt-3 text-gray-300" />
                    </div>
                    <div class="w-full  py-3 cursor-pointer">
                        <h2>Pagos</h2>
                        <hr class="mt-3 text-gray-300" />
                    </div>
                    <div class="w-full   py-6 cursor-pointer text-[var(--blue-1)] font-semibold">
                        <h2>Cerrar sesión</h2>

                    </div>
                </div>
            </div>
            <div class="w-[50%]  ">
                <div class="m-5  ">
                    <div class="w-full bg-white py-10 border rounded-2xl border-gray-200 text-gray-400">
                        <div class="w-[90%] m-auto flex justify-between">
                            <h1 class="font-semibold text-black">Información personal </h1>
                            <button class="cursor-pointer text-[var(--blue-1)]">
                                Editar
                            </button>
                        </div>
                        <div class="w-[90%] m-auto flex  my-1   ">
                            <input v-model="name" type="text" placeholder="Nombre"
                                class="w-1/2 p-2 border border-gray-200 rounded-md me-1">
                            <input v-model="lastname" type="text" placeholder="apellido"
                                class="w-1/2 p-2 border border-gray-200 rounded-md">
                        </div>
                        <div class="w-[90%] m-auto flex  my-2   ">
                            <select v-model="genre" class="w-full p-2 border border-gray-200 rounded-md">
                                <option v-for="num in Object.values(optionsGenre)" :key="num" :value="num">
                                    {{ genreLabels[num] }}
                                </option>
                            </select>
                        </div>
                        <h1 class="w-[90%] m-auto text-black font-semibold">Fecha de nacimiento</h1>
                        <div class="w-[90%] m-auto flex my-1 gap-2">
                            <!-- Select para día -->
                            <select v-model="day" class="w-1/3 p-2 border border-gray-200 rounded-md">
                                <option v-for="d in days" :key="d" :value="d">
                                    {{ d }}
                                </option>
                            </select>

                            <!-- Select para mes -->
                            <select v-model="month" class="w-1/3 p-2 border border-gray-200 rounded-md">
                                <option v-for="(m, index) in months" :key="index" :value="index + 1">
                                    {{ m }}
                                </option>
                            </select>

                            <!-- Select para año -->
                            <select v-model="year" class="w-1/3 p-2 border border-gray-200 rounded-md">
                                <option v-for="y in years" :key="y" :value="y">
                                    {{ y }}
                                </option>
                            </select>
                        </div>
                        <div class="w-[90%] m-auto my-1">
                            <input 
                                v-model="phone" 
                                type="tel" 
                                placeholder="Número de teléfono" 
                                class="w-full p-2 border border-gray-300 rounded-md"
                                @input="validatePhone"
                            />
                        </div>
                    </div>


                    <!-- -------------------------------------- -->

                    <div class="w-full bg-white py-10 border rounded-2xl border-gray-200 text-gray-400 mt-4">
                        <div class="w-[90%] m-auto flex justify-between">
                            <h1 class="font-semibold text-black">Información de seguridad </h1>
                            <button class="cursor-pointer text-[var(--blue-1)]">
                                Editar
                            </button>
                        </div>
                        <div class="w-[90%] m-auto my-1">
                            <input 
                                v-model="contact.email" 
                                type="tel" 
                                placeholder="Correo electrónico" 
                                class="w-full p-2 border border-gray-300 rounded-md"
                                 
                            />
                        </div>
                        <h1 class="font-semibold w-[90%] m-auto text-black">Contacto de emergecia </h1>
                        <div class="w-[90%] m-auto flex  my-1   ">
                            <input v-model="contact.name" type="text" placeholder="Nombre"
                                class="w-1/2 p-2 border border-gray-300 rounded-md me-1">
                            <input v-model="contact.lastname" type="text" placeholder="apellido"
                                class="w-1/2 p-2 border border-gray-300 rounded-md">
                        </div>
                        <div class="w-[90%] m-auto my-1">
                            <input 
                                v-model="contact.phone" 
                                type="tel" 
                                placeholder="Número de teléfono" 
                                class="w-full p-2 border border-gray-300 rounded-md"
                                @input="validatePhone"
                            />
                        </div>
                        <div class="w-[90%] m-auto mt-10">
                            <h1 class="text-[var(--blue-1)]">Eliminar cuenta</h1>
                        </div>
                         
                        
                      
                    </div>


                </div>
            </div>
        </div>

    </div>
</template>