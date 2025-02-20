<script lang="ts">
import SpecialistData from './Mocks/SpecialistDataMock.json'
import type { Specialist } from './Specialist';
import Navbar from '../Home/Navbar.vue';
import Footer_Color from '@/common/Footer_Color.vue';
 
export default {
    name: "specialist_detail",
    components: {
        Navbar,
        Footer_Color,
       
    },
    data() {
        return {
            id: Number(this.$route.params.id),
            specialist: null as Specialist | null,
            groupedImages: [] as string[][]
        };
    }, created() {
        this.getSpecialistById();
        this.groupImages();
    },
    methods: {
        getSpecialistById() {
            // Buscar el especialista en el JSON por ID
            this.specialist = SpecialistData.find(s => s.id === this.id) || null;
        },
        groupImages() {
            if (this.specialist != null) {
                this.groupedImages = [];
                for (let i = 0; i < this.specialist.gallery.length; i += 3) {
                    this.groupedImages.push(this.specialist.gallery.slice(i, i + 3));
                }
            }
        }
    }
}

</script>
<template>
    <div class="w-full bg-gradient-to-r from-gray-100 to-gray-50">
        <Navbar />
        <div class="container m-auto">
            <div class="w-full border border-gray-300 my-8 rounded-4xl flex justify-center items-center bg-white">
                <div class="flex space-x-6 items-center">
                    <div
                        class="w-40 h-40 rounded-full  my-7 border border-white shadow-[5px_0px_0px_rgba(59,130,246,1)]  overflow-hidden">
                        <img :src="specialist?.perfilPhoto" alt="Avatar" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <p class="mt-4 text-3xl font-semibold  font-poppins">{{ specialist?.name }}</p>
                        <p class="  text-base font-normal   font-poppins ">{{ specialist?.title }}</p>
                        <div class="flex mt-4 font-poppins text-base">
                            <p>{{ `Experiencia: ` }}<span class="font-bold"> {{ specialist?.expetience }} años </span>
                            </p>
                            <div class="flex ml-1">
                                <p> Satisfacción</p>



                                <svg class="ml-1 h-5 w-5 text-amber-200" viewBox="0 0 32 32" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">

                                    <title>start-favorite</title>
                                    <desc>Created with Sketch Beta.</desc>
                                    <defs>

                                    </defs>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                                        sketch:type="MSPage">
                                        <g id="Icon-Set-Filled" sketch:type="MSLayerGroup"
                                            transform="translate(-154.000000, -881.000000)" fill="#000000">
                                            <path fill="#e89f20"
                                                d="M186,893.244 L174.962,891.56 L170,881 L165.038,891.56 L154,893.244 L161.985,901.42 L160.095,913 L170,907.53 L179.905,913 L178.015,901.42 L186,893.244"
                                                id="start-favorite" sketch:type="MSShapeGroup">

                                            </path>
                                        </g>
                                    </g>
                                </svg>
                                <p class="font-bold">{{ specialist?.point }}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!-- sobre mi -->
            <div class="w-full flex">
                <div class="w-1/2  ">
                    <div class="w-full rounded-2xl border border-gray-300 bg-white">
                        <div class="w-full p-8 font-poppins text-base">
                            <h1 class="font-bold">Sobre mí</h1>
                            <p>
                                {{ specialist?.description }}
                            </p>
                            <h2 class="mt-8">
                                Especialista en:
                            </h2>
                            <ul class="list-disc pl-5">
                                <li v-for="(item, index) in specialist?.specialist" :key="index" class="text-base">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full rounded-2xl border mt-6 border-gray-300 bg-white">
                        <div class="w-full p-8 font-poppins text-base">
                            <h1 class="font-bold">Consultorio</h1>
                            <p class="mt-4">
                                {{ specialist?.direction }}
                            </p>

                        </div>
                    </div>


                    <div class="w-full rounded-2xl border mt-6 border-gray-300 bg-white">
                        <div class="w-full p-8 font-poppins text-base">
                            <div v-for="(group, index) in groupedImages" :key="index" class="group   m-2 flex">
                                <!-- Primera imagen (izquierda) -->
                                <div class="w-1/2" v-if="group.length === 3">
                                    <img :src="group[0]" alt="Imagen principal"
                                        class="w-full h-full object-cover rounded-2xl  pb-1">
                                </div>

                                <!-- Las otras dos imágenes (derecha) -->
                                <div class="w-1/2 flex flex-col px-1.5  " v-if="group.length === 3">
                                    <img v-for="(image, i) in group.slice(1)" :key="i" :src="image"
                                        alt="Imagen secundaria" class="w-full h-1/2 object-cover rounded-2xl mb-1">
                                </div>
                            </div>



                        </div>
                    </div>


                    <div class="w-full rounded-2xl border mt-6 border-gray-300 bg-white">
                        <div class="w-full p-8 font-poppins text-base">
                            <h1 class="font-bold mb-6">Servicios y precios</h1>
                            <div v-for="(data, index) in specialist?.servicesCost" :key="index"
                                class="font-poppins text-base font-mono">
                                <p>{{ data.nameService }}</p>
                                <p class="mb-2">${{ data.price }}</p>
                                <hr class="text-gray-300" />
                            </div>
                        </div>
                    </div>


                    <div class="w-full rounded-2xl border mt-6 border-gray-300 bg-white">
                        <div class="w-full p-8 font-poppins text-base">
                            <div class="flex flex-wrap justify-between">
                                <h1 class="font-bold mb-6">Valora tu especialista</h1>
                                <button class="text-white rounded-2xl p-2 text-"
                                    style="background-color: var(--blue-1);">Añadir tu opinión</button>
                            </div>
                            <div class="font-poppins text-base font-mono">
                                <p>Valoración globa</p>
                                <div class="flex flex-wrap">
                                    <svg v-for="n in (parseInt(specialist?.point?.toString() || '0', 10))"
                                        class="ml-1 h-5 w-5 text-amber-200" viewBox="0 0 32 32" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">

                                        <title>start-favorite</title>
                                        <desc>Created with Sketch Beta.</desc>
                                        <defs>

                                        </defs>
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                                            sketch:type="MSPage">
                                            <g id="Icon-Set-Filled" sketch:type="MSLayerGroup"
                                                transform="translate(-154.000000, -881.000000)" fill="#000000">
                                                <path fill="#e89f20"
                                                    d="M186,893.244 L174.962,891.56 L170,881 L165.038,891.56 L154,893.244 L161.985,901.42 L160.095,913 L170,907.53 L179.905,913 L178.015,901.42 L186,893.244"
                                                    id="start-favorite" sketch:type="MSShapeGroup">

                                                </path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <hr class="text-gray-300 my-3" />

                                <div v-for="(data, index) in specialist?.opinions" :key="index" class="font-poppins">
                                    <h1 class="font-bold">{{ data.user }}</h1>
                                    <div class="flex">
                                        <svg v-for="n in (parseInt(data.score?.toString() || '0', 10))"
                                            class="ml-1 h-3 w-3 text-amber-200" viewBox="0 0 32 32" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">

                                            <title>start-favorite</title>
                                            <desc>Created with Sketch Beta.</desc>
                                            <defs>

                                            </defs>
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none"
                                                fill-rule="evenodd" sketch:type="MSPage">
                                                <g id="Icon-Set-Filled" sketch:type="MSLayerGroup"
                                                    transform="translate(-154.000000, -881.000000)" fill="#000000">
                                                    <path fill="#e89f20"
                                                        d="M186,893.244 L174.962,891.56 L170,881 L165.038,891.56 L154,893.244 L161.985,901.42 L160.095,913 L170,907.53 L179.905,913 L178.015,901.42 L186,893.244"
                                                        id="start-favorite" sketch:type="MSShapeGroup">

                                                    </path>
                                                </g>
                                            </g>
                                        </svg>

                                      
                                    </div>
                                    <p>Localización: {{data.lugar }}</p>
                                    <p>Localización: {{data.text }}</p>
                                    <hr class="text-gray-300" />
                                </div>


                            </div>
                        </div>
                    </div>




                </div>

                <div class="w-1/2 bg-amber-700 h-12">

                </div>
            </div>










        </div>
        <Footer_Color />


    </div>
</template>