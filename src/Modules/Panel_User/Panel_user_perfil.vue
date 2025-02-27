<script lang="ts">
import { specialists } from '../Specialists/DataFilters/specialist';
export default {
    name: 'panel_user_perfil',
    data() {
        return {
            name:  '' as | '',
            imageUrl: null as string | null,
            actiontext: '' as string | '',
            selectedSpecialist: '' as string | '',
            optionsSpecialist: specialists,
            ubicationText:'' as string | '',
            about:'' as string | '',
            ubication2:'' as string | '',
        }
    },
    methods: {
        handleImageUpload(event: Event) {
            const file = (event.target as HTMLInputElement).files?.[0];
            if (file) {
                this.imageUrl = URL.createObjectURL(file); // Generar una URL temporal para previsualización
            }
        }
    }
    
}
</script>
<template>
    <div class="w-full font font-poppins">
       
           
        
          
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 p-4 pt-12">
                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="username">Nombre</label>
                        <input  v-model="name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                    </div>
        
                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Principales campos de acción</label>
                        <textarea 
                        id="actiontext"
                        v-model="actiontext"
                        rows="4"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
                               dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
                               focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                               dark:focus:border-blue-300 focus:outline-none focus:ring resize-none"
                        placeholder="Escribe aquí..."
                    ></textarea>
                    </div>
        


                    <div>
                        <label class="block text-sm font-medium text-[var(--blue-1)]">Añadir foto</label>
                        <input 
                            type="file" 
                            accept="image/*" 
                            @change="handleImageUpload" 
                            class="mt-2 block w-full text-sm text-gray-500 
                                   file:mr-4 file:py-2 file:px-4 
                                   file:rounded-md file:border-0 
                                   file:text-sm file:font-semibold 
                                   file:bg-blue-50 file:text-blue-700 
                                   hover:file:bg-blue-100"
                        >
                        <div v-if="imageUrl">
                            <img :src="imageUrl" alt="Imagen seleccionada" class="w-32 h-32 rounded-lg shadow-md">
                        </div>
    
                    </div>
        
                    <!-- Vista previa de la imagen -->
                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Ubicación Consultorio</label>
                        <textarea 
                        id="actiontext"
                        v-model="ubicationText"
                        rows="4"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
                               dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
                               focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                               dark:focus:border-blue-300 focus:outline-none focus:ring resize-none"
                        placeholder="Escribe aquí..."
                    ></textarea>
                    </div>
                  
                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="password">Especialidad</label>
                        <select 
                        id="specialist"
                        v-model="selectedSpecialist" 
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
                               dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
                               focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                               dark:focus:border-blue-300 focus:outline-none focus:ring"
                    >
                        <option value="" disabled>Selecciona una opción</option>
                        <option v-for="specialist in optionsSpecialist" :key="specialist" :value="specialist">
                            {{ specialist }}
                        </option>
                    </select>
                    </div>
        
                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                         
                    </div>
                </div>
        
                <div class="flex justify-end mt-6">
                    <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                </div>
       
        
       
    </div>
</template>