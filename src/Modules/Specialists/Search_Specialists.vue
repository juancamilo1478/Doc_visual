<script lang="ts">
import { services } from './DataFilters/services';
import { specialists } from './DataFilters/specialist';
import { locations } from './DataFilters/locations';
import SpecialistDataMock from './Mocks/SpecialistDataMock.json'
import type { Specialist } from './Specialist';
import CardSpecialist from './CardSpecialist.vue';

export default {
    name: 'Search_Soecialist',
    components: {
        CardSpecialist
    },
    data() {
        return {
            items: SpecialistDataMock as Specialist[],
            optionsServices: services,
            optionsSpecialist: specialists,
            optionsLocaltion: locations,
            filterSpecialty: [] as string[],
            filterService: [] as string[],
            filterLocation: [] as string[],
            panels: {
                panelService: false,
                panelSpecialty: false,
                panelLocation: false
            },

            name: '',
            data: SpecialistDataMock as Specialist[]
        };
    },
    methods: {
        clearFilters() {
            this.filterLocation = [];
            this.filterService = [];
            this.filterSpecialty = [];
        },
        selectSpecialist(specialist: string) {
            const index = this.filterSpecialty.indexOf(specialist);

            if (index === -1) {
                // No está en la lista, lo agregamos
                this.filterSpecialty.push(specialist);
            } else {
                // Ya está en la lista, lo eliminamos
                this.filterSpecialty.splice(index, 1);
            }
        },
        isSpecialistSelected(specialist: string): boolean {
            return this.filterSpecialty.includes(specialist);
        },
        setPanel(name: keyof typeof this.panels) {
            this.panels[name] = !this.panels[name];
        },
        searchItems() {
            let itemsFull = [...this.items]; // Clonamos para evitar mutaciones inesperadas
            const normalizeText = (text: string) =>
                text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();

            if (this.name.trim().length > 0) {
                const normalizedSearch = normalizeText(this.name.trim());

                itemsFull = itemsFull.filter(item =>
                    normalizeText(item.name).includes(normalizedSearch)
                );
            }
            if (this.filterSpecialty.length > 0) {
                itemsFull = itemsFull.filter(item =>
                    item.specialist.some(specialty => this.filterSpecialty.includes(specialty))
                );
            }

            if (this.filterService.length > 0) {
                itemsFull = itemsFull.filter(item =>
                    item.services.some(service => this.filterService.includes(service))
                );
            }

            if (this.filterLocation.length > 0) {
                itemsFull = itemsFull.filter(item =>
                    item.locals.some(local => this.filterLocation.includes(local.departament))
                );
            }

            this.data = itemsFull; // Actualiza el estado de `data`
        },
        goToSpecialist(id: string) {

        }

    }
}
</script>
<template>
    <div class="w-screen bg-gradient-to-r from-gray-100 to-gray-50">
        <div class="container m-auto px-2 pt-10">
            <h1 class="w-full text-center font-poppins text-2xl" style="color: var(--blue-1);">Especialistas en salud
                visual a la mano</h1>
            <h2 class="w-full text-center font-poppins mt-2 mb-9 text-xl md:text-2xl font-bold">Agenda tu sesion con
                alguno de
                nuestros
                especialistas en</h2>

            <!-- filterMovile and tablet -->
            <div class="flex flex-wrap justify-center mb-3 gap-3 lg:hidden  w-full">
                <div class="flex p-3 text-white rounded-full bg-[var(--blue-1)]/70" @click="setPanel('panelService')">
                    <h1 class="font-poppins">servicios</h1>
                    <div class="  flex items-center  ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                            class="mx-1 w-5 h-5 transition-transform rotate-90" fill="var(--blue-1)">
                            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                        </svg>
                    </div>
                </div>
                <div class="flex p-3 text-white rounded-full bg-[var(--blue-1)]/70" @click="setPanel('panelSpecialty')">
                    <h1 class="font-poppins">Especialidad</h1>
                    <div class="  flex items-center  ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                            class="mx-1 w-5 h-5 transition-transform rotate-90" fill="var(--blue-1)">
                            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                        </svg>
                    </div>
                </div>
                <div class="flex p-3 text-white rounded-full bg-[var(--blue-1)]/70" @click="setPanel('panelLocation')">
                    <h1 class="font-poppins">Ubicación</h1>
                    <div class="  flex items-center  ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                            class="mx-1 w-5 h-5 transition-transform rotate-90" fill="var(--blue-1)">
                            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                        </svg>
                    </div>
                </div>
            </div>


            <!-- pantallas menor a grandes -->
            <div v-if="panels.panelService"
                class="fixed inset-0 z-50 bg-black/50    flex justify-center items-center sm:flex md:flex lg:hidden"
                @click.self="setPanel('panelService')">
                <!-- Contenedor del modal -->
                <div class="bg-white w-11/12 max-w-md min-h-[60vh] max-h-[60vh]  rounded-2xl shadow-lg flex flex-col">
                    <!-- Encabezado -->
                    <div class="w-full">
                        <div class="w-full flex items-center px-2">
                            <button @click="setPanel('panelService')"
                                class="p-2 text-lg font-poppins font-bold cursor-pointer">X</button>
                            <h3 class="flex-1 text-center font-poppins">Servicio</h3>
                            <h3 class="p-2 font-poppins cursor-pointer" style="color: var(--blue-1);"
                                @click="clearFilters">Limpiar</h3>
                        </div>
                        <hr class="text-gray-200" />
                    </div>

                    <!-- Contenido desplazable -->
                    <div class="flex-1 overflow-auto p-4">
                        <div v-if="panels.panelService">
                            <div v-for="(option, index) in optionsServices" :key="index" class="flex w-full my-2"
                                @click="selectSpecialist(option)">
                                <input type="checkbox" :id="'checkbox-' + index" :checked="isSpecialistSelected(option)"
                                    :value="option"
                                    class="w-5 h-5 mx-2 colorvar pointer-events-none accent-[var(--blue-1)]">
                                <h1 class="mt-auto cursor-pointer">{{ option
                                    }}</h1>
                            </div>
                        </div>
                    </div>

                    <!-- Botón fijo en la parte inferior -->
                    <div class="w-full p-4 bg-white shadow-md rounded-2xl">
                        <button class="w-full bg-[var(--blue-1)] text-white py-2 rounded-lg font-poppins"
                            @click="searchItems(); setPanel('panelService')">Aplicar filtros</button>
                    </div>
                </div>
            </div>

            <div v-if="panels.panelSpecialty"
                class="fixed inset-0 z-50 bg-black/50    flex justify-center items-center sm:flex md:flex lg:hidden"
                @click.self="setPanel('panelSpecialty')">
                <!-- Contenedor del modal -->
                <div class="bg-white w-11/12 max-w-md min-h-[60vh] max-h-[60vh]  rounded-2xl shadow-lg flex flex-col">
                    <!-- Encabezado -->
                    <div class="w-full">
                        <div class="w-full flex items-center px-2">
                            <button @click="setPanel('panelSpecialty')"
                                class="p-2 text-lg font-poppins font-bold cursor-pointer">X</button>
                            <h3 class="flex-1 text-center font-poppins">Especialidad</h3>
                            <h3 class="p-2 font-poppins cursor-pointer" style="color: var(--blue-1);"
                                @click="clearFilters">Limpiar</h3>
                        </div>
                        <hr class="text-gray-200" />
                    </div>

                    <!-- Contenido desplazable -->
                    <div class="flex-1 overflow-auto p-4">
                        <div v-if="panels.panelSpecialty">
                            <div v-for="(option, index) in optionsSpecialist" :key="index" class="flex w-full my-2"
                                @click="selectSpecialist(option)">
                                <input type="checkbox" :id="'checkbox-' + index" :checked="isSpecialistSelected(option)"
                                    :value="option"
                                    class="w-5 h-5 mx-2 colorvar pointer-events-none accent-[var(--blue-1)]">
                                <h1 class="mt-auto cursor-pointer">{{ option
                                    }}</h1>
                            </div>
                        </div>
                    </div>

                    <!-- Botón fijo en la parte inferior -->
                    <div class="w-full p-4 bg-white shadow-md rounded-2xl">
                        <button class="w-full bg-[var(--blue-1)] text-white py-2 rounded-lg font-poppins"
                            @click="searchItems(); setPanel('panelSpecialty')">Aplicar filtros</button>
                    </div>
                </div>
            </div>


            <div v-if="panels.panelLocation"
                class="fixed inset-0 z-50 bg-black/50    flex justify-center items-center sm:flex md:flex lg:hidden"
                @click.self="setPanel('panelLocation')">
                <!-- Contenedor del modal -->
                <div class="bg-white w-11/12 max-w-md min-h-[60vh] max-h-[60vh]  rounded-2xl shadow-lg flex flex-col">
                    <!-- Encabezado -->
                    <div class="w-full">
                        <div class="w-full flex items-center px-2">
                            <button @click="setPanel('panelLocation')"
                                class="p-2 text-lg font-poppins font-bold cursor-pointer">X</button>
                            <h3 class="flex-1 text-center font-poppins">Especialidad</h3>
                            <h3 class="p-2 font-poppins cursor-pointer" style="color: var(--blue-1);"
                                @click="clearFilters">Limpiar</h3>
                        </div>
                        <hr class="text-gray-200" />
                    </div>

                    <!-- Contenido desplazable -->
                    <div class="flex-1 overflow-auto p-4">
                        <div v-if="panels.panelLocation">
                            <div v-for="(option, index) in optionsLocaltion" :key="index" class="flex w-full my-2"
                                @click="selectSpecialist(option)">
                                <input type="checkbox" :id="'checkbox-' + index" :checked="isSpecialistSelected(option)"
                                    :value="option"
                                    class="w-5 h-5 mx-2 colorvar pointer-events-none accent-[var(--blue-1)]">
                                <h1 class="mt-auto cursor-pointer">{{ option
                                }}</h1>
                            </div>
                        </div>
                    </div>

                    <!-- Botón fijo en la parte inferior -->
                    <div class="w-full p-4 bg-white shadow-md rounded-2xl">
                        <button class="w-full bg-[var(--blue-1)] text-white py-2 rounded-lg font-poppins"
                            @click="searchItems(); setPanel('panelLocation')">Aplicar filtros</button>
                    </div>
                </div>
            </div>




            <!-- ------- -->
            <div class="hidden lg:flex  mx-28  flex-wrap justify-between   my-10">

                <div class="px-6    rounded-2xl flex flex-col justify-center" @click="selectSpecialist('Optómetra')"
                    :class="isSpecialistSelected('Optómetra') ? 'selectCard' : 'bg-gray-200'">
                    <h1 class="font-poppins text-base mx-2 font-semibold">Optometría</h1>
                </div>

                <div class="px-6  bg-gray-200 rounded-2xl flex flex-col justify-center"
                    @click="selectSpecialist('Oftalmología')"
                    :class="isSpecialistSelected('Oftalmología') ? 'selectCard' : 'bg-gray-200'">
                    <h1 class="font-poppins text-base mx-2 font-semibold">Oftalmología</h1>
                </div>

                <div class=" px-6 bg-gray-200 rounded-2xl flex flex-col justify-center "
                    @click="selectSpecialist('Terapia Visual (Ortóptica)')"
                    :class="isSpecialistSelected('Terapia Visual (Ortóptica)') ? 'selectCard' : 'bg-gray-200'">
                    <h1 class="font-poppins text-base mx-2 font-semibold">Terapia Visual</h1>
                </div>
                <div class="p-1 px-6 bg-gray-200 rounded-2xl flex flex-col justify-center"
                    @click="selectSpecialist('Optometría Integral')"
                    :class="isSpecialistSelected('Optometría Integral') ? 'selectCard' : 'bg-gray-200'">
                    <h1 class="font-poppins text-base mx-2 font-semibold">Optometría</h1>
                    <h1 class="font-poppins text-base mx-2 font-semibold">Pediátrica</h1>
                </div>
            </div>
        </div>
        <div class="container m-auto px-2 min-h-svh">
            <div class="lg:flex     ">

                <div class="hidden lg:flex w-3/10 mx-9 bg-white   flex-col  rounded-2xl h-full sticky top-10">
                    <!-- Contenido con scroll -->
                    <div class="overflow-y-auto px-8 max-h-[50vh] min-h-0">

                        <div class="w-full">
                            <h1 class="mb-2 font-poppins mx-2 mt-6 font-semibold">Buscar por nombre</h1>
                            <div class="relative flex items-center w-full   ">

                                <svg class="absolute left-3 w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                                        stroke="#000000" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <input type="text" placeholder="Buscar..." v-model="name"
                                    class="w-full pl-10 pr-3 py-2 mx-2  rounded-full    border border-gray-400 focus:ring-2 focus:ring-blue-500 font-poppins my-10" />
                            </div>
                        </div>


                        <div class="w-full ">
                            <div class="w-full flex items-center px-2" @click="setPanel('panelService')">
                                <h1 class="text-base font-medium font-poppins ">Servicio</h1>
                                <img src="@/assets/svg/arrow.svg" alt="Icono"
                                    class="w-4 h-4 transition-transform ml-auto"
                                    :class="{ 'rotate-90': panels.panelService }">
                            </div>
                            <hr class="my-4 px-3 text-gray-400" />
                            <Transition name="fade">
                                <div v-if="panels.panelService">

                                    <div v-for="(option, index) in optionsServices" :key="index"
                                        @click="selectSpecialist(option)" class="flex w-full my-2 text-base">
                                        <input type="checkbox" :id="'checkbox-' + index"
                                            :checked="isSpecialistSelected(option)" :value="option"
                                            class="w-5 h-5 mx-2 colorvar pointer-events-none accent-[var(--blue-1)]">
                                        <h1 class="mt-auto cursor-pointer" @click="selectSpecialist(option)">{{ option
                                            }}</h1>
                                    </div>
                                </div>
                            </Transition>
                        </div>

                        <div class="w-full">
                            <div class="w-full flex items-center px-2" @click="setPanel('panelSpecialty')">
                                <h1 class="text-base font-medium font-poppins max-w-[80%]">Especialidad</h1>
                                <img src="@/assets/svg/arrow.svg" alt="Icono"
                                    class="w-4 h-4 transition-transform ml-auto"
                                    :class="{ 'rotate-90': panels.panelSpecialty }">
                            </div>
                            <hr class="my-4 px-3 text-gray-400" />
                            <Transition name="fade">
                                <div v-if="panels.panelSpecialty">

                                    <div v-for="(option, index) in optionsSpecialist" :key="index"
                                        @click="selectSpecialist(option)" class="flex w-full my-2">
                                        <input type="checkbox" :id="'checkbox-' + index"
                                            :checked="isSpecialistSelected(option)" :value="option"
                                            class="w-5 h-5 mx-2 colorvar pointer-events-none accent-[var(--blue-1)]">
                                        <h1 class="mt-auto cursor-pointer">{{ option
                                            }}</h1>
                                    </div>
                                </div>
                            </Transition>
                        </div>

                        <div class="w-full">
                            <div class="w-full flex items-center px-2" @click="setPanel('panelLocation')">
                                <h1 class="text-base font-medium font-poppins max-w-[80%]">Ubicación</h1>
                                <img src="@/assets/svg/arrow.svg" alt="Icono"
                                    class="w-4 h-4 transition-transform ml-auto"
                                    :class="{ 'rotate-90': panels.panelLocation }">
                            </div>
                            <hr class="my-4 px-3 text-gray-400" />
                            <Transition name="fade">
                                <div v-if="panels.panelLocation">

                                    <div v-for="(option, index) in optionsLocaltion" :key="index"
                                        class="flex w-full my-2" @click="selectSpecialist(option)">
                                        <input type="checkbox" :id="'checkbox-' + index"
                                            :checked="isSpecialistSelected(option)" :value="option"
                                            class="w-5 h-5 mx-2 colorvar pointer-events-none accent-[var(--blue-1)]">
                                        <h1 class="mt-auto cursor-pointer">{{ option
                                            }}</h1>
                                    </div>
                                </div>
                            </Transition>
                        </div>

                    </div>

                    <!-- Botones fijos abajo -->
                    <div class="w-full  ">

                        <div class="flex justify-between px-8 py-5">
                            <button @click="clearFilters"
                                class="bg-transparent   w-[40%] rounded font-poppins text-base font-semibold"
                                style="color: var(--blue-1);">Limpiar</button>
                            <button
                                class="w-[50%] mx-2 text-base font-bold text-white px-6 py-2 rounded-xl text-center flex items-center justify-center"
                                style="background-color: var(--blue-1);" @click="searchItems">
                                Aplicar filtros
                            </button>
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-7/10  ">
                    <h1 v-if="data.length" class="font-poppins mx-10  text-base">{{ `${data.length} Especialistas
                        disponibles para
                        ti` }}</h1>
                    <div class="flex flex-col flex-wrap justify-center gap-4 p-4">
                        <div v-for="(option, index) in data" :key="index"
                            class="flex flex-col items-center   p-4 rounded-lg">
                            <CardSpecialist :specialist="option" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<style>
.selectCard {
    background-color: var(--blue-1);
    color: white;
}

.colorvar {
    color: var(--blue-1);
}

.bagroudVar {
    background: var(--blue-1);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
