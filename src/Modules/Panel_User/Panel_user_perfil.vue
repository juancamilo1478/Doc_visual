<script lang="ts">
import { ref } from "vue";
import { specialists } from '../Specialists/DataFilters/specialist';
import { toast } from "vue3-toastify";
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

        }
    },
    methods: {
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




    }

}
</script>
<template>
    <div class="w-full font font-poppins">


       

        <div class="grid grid-cols-1 gap-6   sm:grid-cols-2   py-12 w-[90%] m-auto">
            <div>
                <label class="text-gray-700 dark:text-gray-200" for="username">Nombre</label>
                <input v-model="name" type="text"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Principales campos de acción</label>
                <textarea id="actiontext" v-model="actiontext" rows="4" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
                               dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
                               focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                               dark:focus:border-blue-300 focus:outline-none focus:ring resize-none"
                    placeholder="Escribe aquí..."></textarea>
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
                    <img :src="imageUrl" alt="Imagen seleccionada" class="w-32 h-32 rounded-lg shadow-md">
                </div>

            </div>

            <!-- Vista previa de la imagen -->
            <div>
                <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Ubicación Consultorio</label>
                <textarea id="actiontext" v-model="ubicationText" rows="4" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
                               dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
                               focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                               dark:focus:border-blue-300 focus:outline-none focus:ring resize-none"
                    placeholder="Escribe aquí..."></textarea>
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="password">Especialidad</label>
                <select id="specialist" v-model="selectedSpecialist" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
                               dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
                               focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                               dark:focus:border-blue-300 focus:outline-none focus:ring">
                    <option value="" disabled>Selecciona una opción</option>
                    <option v-for="specialist in optionsSpecialist" :key="specialist" :value="specialist">
                        {{ specialist }}
                    </option>
                </select>
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Ubicación 2</label>
                <textarea id="actiontext" v-model="ubicationText2" rows="4" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
                               dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
                               focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                               dark:focus:border-blue-300 focus:outline-none focus:ring resize-none"
                    placeholder="Escribe aquí..."></textarea>
            </div>
        </div>
        <div>


            <!-- Zona de arrastrar y soltar -->
            <div class="drop-zone w-[95%] m-auto border p-4  rounded-2xl" :class="{ 'drop-active': isDragging }"
                @dragover.prevent="isDragging = true" @dragleave="isDragging = false" @drop="handleDrop">
                <div class="flex justify-between">
                    <h1>Fotografías <span class="text-gray-400">4 fotografías de máximo 1.100 pixeles</span></h1>
                    <button @click="handleImageUploadmulti"
                        class="bg-[var(--blue-1)] text-white p-1 px-5 rounded-2xl cursor-pointer">Añadir foto</button>
                </div>
                <hr class="w-full  my-3" />


                <div class="min-h-64 bg-gray-300 flex items-center justify-center relative p-4 rounded-lg">
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

            <!-- Vista previa de imágenes -->

        </div>
        <div class="flex justify-end mt-6">
            <button
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>




    </div>
</template>