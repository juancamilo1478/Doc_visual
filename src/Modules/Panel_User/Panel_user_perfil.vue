<script lang="ts">
import { ref } from "vue";
import { specialists } from '../Specialists/DataFilters/specialist';
import { toast } from "vue3-toastify";
import { getDayOfWeekName } from "@/utils/DateUtils";
export default {
    name: 'panel_user_perfil',
    data() {
        return {
            name: '' as | '',
            imageUrl: null as string | null,
            actiontext: '' as string | '',
            selectedSpecialist: '' as string | '',
            optionsSpecialist: specialists,
            ubicationText: '' as string | '',
            ubicationText2: '' as string | '',
            about: '' as string | '',
            ubication2: '' as string | '',
            images: ref<string[]>([]),
            isDragging: ref(false), // Controla el efecto visual al arrastrar
            errorMessage: '' as string,
            services: '',
            social: {
                facebook: '',
                linkedin: '',
                instagram: '',
                youtube: ''
            },
            web: '',
            costo: '',
            agenda: '',
            day: 1,
            times: [{ hour: 8, minutes: 0 }, { hour: 9, minutes: 0 }, { hour: 10, minutes: 0 }, { hour: 11, minutes: 0 }, { hour: 12, minutes: 0 }, { hour: 13, minutes: 0 }, { hour: 14, minutes: 0 }, { hour: 14, minutes: 0 }, { hour: 15, minutes: 0 }, { hour: 16, minutes: 0 }, { hour: 17, minutes: 0 }, { hour: 18, minutes: 0 }, ],
            timesSelects: [] as { hour: number; minutes: number }[]
        }
    },
    methods: {
        formatTime(hour: number, minutes: number) {
            let period = hour >= 12 ? "PM" : "AM";
            let formattedHour = hour % 12 || 12; // Convierte 0 y 12 en 12
            let formattedMinutes = minutes.toString().padStart(2, "0"); // Asegura dos dígitos

            return `${formattedHour}:${formattedMinutes} ${period}`;
        },
        selectTimes(hour: number, minutes: number) {
            const data = { hour: hour, minutes: minutes }
            const index = this.timesSelects.findIndex(
                t => t.hour === hour && t.minutes === minutes
            );
            if (index === -1) {
                this.timesSelects.push(data); // Si no existe, lo agrega
            } else {
                this.timesSelects.splice(index, 1); // Si ya existe, lo elimina
            }
        },
        isSelected(hour: number, minutes: number): boolean {
            return this.timesSelects.some(t => t.hour === hour && t.minutes === minutes);
        },
        getNamethree(number: number) {
            return getDayOfWeekName(number).slice(0, 3);
        },

        handleImageUpload(event: Event) {
            const file = (event.target as HTMLInputElement).files?.[0];
            if (file) {
                this.imageUrl = URL.createObjectURL(file); // Generar una URL temporal para previsualización
            }
        },
        handleImageUploadmulti(event: Event) {
            const files = (event.target as HTMLInputElement).files;
            if (!files) return;



            if (this.images.length >= 4) {
                toast.error("Solo se aceptan 4 imagenes", {
                    autoClose: 2000,
                }); // ToastOptions


                return;
            }

            for (const file of Array.from(files) as File[]) { // Especificamos que es un array de File
                if (this.images.length >= 4) break; // No permitir más de 4 imágenes

                const img = new Image();
                img.src = URL.createObjectURL(file);

                img.onload = () => {
                    if (img.width > 1100 || img.height > 1100) {
                        toast.error("La imagen tiene mas de 1100 pixeles", {
                            autoClose: 2000,

                        }); // ToastOptions

                        return;
                    }
                    this.images.push(img.src);
                };
            }
        },

        processFiles(files: FileList) {
            for (const file of Array.from(files) as File[]) { // Convertimos a array de tipo File
                if (file.type.startsWith("image/")) {
                    const url = URL.createObjectURL(file);
                    this.images.push(url);
                }
            }
        },
        handleDrop(event: DragEvent) {
            event.preventDefault();
            this.isDragging = false;
            if (event.dataTransfer?.files) {
                this.processFiles(event.dataTransfer.files);
            }
        },




    },

}
</script>
<template>
    <div class="w-full font font-poppins">




        <div class="grid grid-cols-1 gap-6   sm:grid-cols-2   py-12 w-[90%] m-auto text-xs">
            <div>
                <label class="text-gray-700  " for="username">Nombre</label>
                <input v-model="name" type="text"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md      focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring">
            </div>

            <div>
                <label class="text-gray-700  " for="emailAddress">Principales campos de acción</label>
                <textarea id="actiontext" v-model="actiontext" rows="4" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
                                 
                               focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                                 focus:outline-none focus:ring resize-none" placeholder="Escribe aquí..."></textarea>
            </div>



            <div>
                <label class="block text-sm font-medium text-[var(--blue-1)]">Añadir foto</label>
                <input type="file" accept="image/*" @change="handleImageUpload" class="mt-2 block w-full text-sm text-gray-500 
                                   file:mr-4 file:py-2 file:px-4 
                                   file:rounded-md file:border-0 
                                   file:text-sm file:font-semibold 
                                   file:bg-blue-50 file:text-blue-700 
                                   hover:file:bg-blue-100">
                <div v-if="imageUrl">
                    <img :src="imageUrl" alt="Imagen seleccionada" class="w-32 h-auto rounded-lg shadow-md">
                </div>

            </div>

            <!-- Vista previa de la imagen -->
            <div>
                <label class="text-gray-700  " for="emailAddress">Ubicación Consultorio</label>
                <textarea id="actiontext" v-model="ubicationText" rows="4" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
                               
                               focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                                focus:outline-none focus:ring resize-none" placeholder="Escribe aquí..."></textarea>
            </div>

            <div>
                <label class="text-gray-700  " for="password">Especialidad</label>
                <select id="specialist" v-model="selectedSpecialist" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
                                
                               focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                                focus:outline-none focus:ring">
                    <option value="" disabled>Selecciona una opción</option>
                    <option v-for="specialist in optionsSpecialist" :key="specialist" :value="specialist">
                        {{ specialist }}
                    </option>
                </select>
            </div>

            <div>
                <label class="text-gray-700  " for="emailAddress">Ubicación 2</label>
                <textarea id="actiontext" v-model="ubicationText2" rows="4" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
                               
                               focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                               focus:outline-none focus:ring resize-none" placeholder="Escribe aquí..."></textarea>
            </div>
        </div>
        <div class="text-xs">


            <!-- Zona de arrastrar y soltar -->
            <div class="drop-zone w-[90%] m-auto border border-gray-300 bg-white  p-4  rounded-2xl"
                :class="{ 'drop-active': isDragging }" @dragover.prevent="isDragging = true"
                @dragleave="isDragging = false" @drop="handleDrop">
                <div class="flex justify-between">
                    <h1>Fotografías <span class="text-gray-400">4 fotografías de máximo 1.100 pixeles</span></h1>
                    <button @click="handleImageUploadmulti"
                        class="bg-[var(--blue-1)] text-white p-1 px-5 rounded-2xl cursor-pointer">Añadir foto</button>
                </div>
                <hr class="w-full  my-3" />


                <div class="min-h-64 bg-gray-200 flex items-center justify-center relative p-4 rounded-lg">
                    <!-- Si no hay imágenes, muestra el icono -->
                    <label v-if="images.length === 0"
                        class="flex flex-col items-center justify-center cursor-pointer text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <span class="mt-2 text-sm">Añadir imágenes</span>
                    </label>
                    <input type="file" multiple accept="image/*" @change="handleImageUploadmulti"
                        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />

                    <!-- Galería de imágenes -->
                    <div v-if="images.length > 0" class="gallery flex flex-wrap gap-2 mt-2 w-full">
                        <div v-for="(image, index) in images" :key="index" class="w-[20%] h-auto">
                            <img :src="image" alt="Imagen seleccionada"
                                class="w-full h-full object-cover rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>


            </div>

            <div class="grid grid-cols-1 gap-6   sm:grid-cols-2   py-12 w-[90%] m-auto">
                <div>
                    <label class="text-gray-700  " for="emailAddress">Servicios </label>
                    <textarea id="actiontext" v-model="services" rows="4" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
                                    
                                   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                                  focus:outline-none focus:ring resize-none" placeholder="Escribe aquí..."></textarea>
                </div>

                <div class="w-full">
                    <label class="text-gray-700  " for="emailAddress">Redes Sociales </label>
                    <div class="w-full  border border-gray-100 rounded-2xl bg-white">
                        <div class="flex items-center  justify-between p-3   space-x-3 ">
                            <h1 class="whitespace-nowrap">Instagram:</h1>
                            <input v-model="social.instagram" type="text"
                                class="block min-w-[80%] px-4 py-1 text-gray-700  border  border-gray-200 bg-gray-100 focus:border-[var(--blue-1)] focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                        </div>
                        <div class="flex items-center justify-between p-3  space-x-3">
                            <h1 class="whitespace-nowrap">Linkedin:</h1>
                            <input v-model="social.linkedin" type="text"
                                class="block min-w-[80%] px-4 py-1 text-gray-700 bg-gray-100 border border-gray-200 focus:border-[var(--blue-1)] focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                        </div>
                        <div class="flex items-center justify-between p-3   space-x-3">
                            <h1 class="whitespace-nowrap">Facebook:</h1>
                            <input v-model="social.facebook" type="text"
                                class="block min-w-[80%] px-4 py-1 text-gray-700 bg-gray-100 border border-gray-200 focus:border-[var(--blue-1)] focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                        </div>
                        <div class="flex items-center justify-between p-3   space-x-3">
                            <h1 class="whitespace-nowrap">Youtube:</h1>
                            <input v-model="social.youtube" type="text"
                                class="block min-w-[80%] px-4 py-1 text-gray-700 bg-gray-100 border border-gray-200 focus:border-[var(--blue-1)] focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                        </div>
                    </div>
                </div>

                <div>
                    <label class="text-gray-700  " for="emailAddress">Página web </label>
                    <textarea id="actiontext" v-model="web" rows="4" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
                                    
                                   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                                  focus:outline-none focus:ring resize-none" placeholder="Escribe aquí..."></textarea>
                </div>
                <div>
                    <label class="text-gray-700  " for="emailAddress">Costo consulta </label>
                    <textarea id="actiontext" v-model="costo" rows="4" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
                                    
                                   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                                  focus:outline-none focus:ring resize-none" placeholder="Escribe aquí..."></textarea>
                </div>


            </div>
            <div class="w-[90%] m-auto flex items-center  ">
                <h1 class="w-fit whitespace-nowrap text-base">Horarios de Agenda</h1>
                <select v-model="agenda" class="border border-gray-200 p-2 w-full rounded-xl mx-6 mt-2 m-auto  text-xs bg-white">
                    <option value="bogota1">
                        Bogota 1
                    </option>
                    <option value="bogota2">
                        Bogota 2
                    </option>
                </select>
                <div v-for="num in 6" :key="num" class="px-2 text-base cursor-pointer  m-auto" @click="day = num" :class="{
                    'text-[var(--blue-1)]': num === day,
                    'text-black': num !== day
                }">
                    {{ getNamethree(num) }}
                </div>
            </div>



            <div class="w-[90%] m-auto flex flex-wrap justify-between  mt-3">
                <div v-for="(data, index) in times" :key="index"
                    class="w-[15%] p-2 py-4 border border-gray-200 mb-3 rounded-2xl cursor-pointer"
                    @click="selectTimes(data.hour, data.minutes)" :class="{
                        'bg-[var(--blue-1)] text-white border-blue-500': isSelected(data.hour, data.minutes), // Activo
                        'text-gray-800 bg-white ': !isSelected(data.hour, data.minutes) // Inactivo
                    }">
                    <h1 class="w-full text-center">{{ formatTime(data.hour, data.minutes) }}</h1>
                </div>
            </div>
            <div class=" flex justify-end w-[90%] m-auto">
                <button class="bg-[var(--blue-1)] py-2 px-8 mx-10 my-8 rounded-xl text-white">Guardar</button>
            </div>

        </div>





    </div>
</template>