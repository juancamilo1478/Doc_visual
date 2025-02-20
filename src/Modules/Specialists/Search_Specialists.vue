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
            data: [] as Specialist[]
        };
    },
    methods: {
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
                    this.filterLocation.includes(item.location)
                );
            }

            this.data = itemsFull; // Actualiza el estado de `data`
        }

    }
}
</script>
<template>
    <div class="w-screen">
        <div class="container m-auto px-2 mt-10">
            <h1 class="w-full text-center font-poppins text-2xl" style="color: var(--blue-1);">Especialistas en salud
                visual a la mano</h1>
            <h2 class="w-full text-center font-poppins mt-2 mb-9 text-3xl font-bold">Agenda tu sesion con alguno de
                nuestros
                especialistas en</h2>
            <div class="flex flex-wrap justify-center gap-20 my-10">

                <div class="    rounded-2xl flex flex-col justify-center" @click="selectSpecialist('Optómetra')"
                    :class="isSpecialistSelected('Optómetra') ? 'selectCard' : 'bg-gray-200'">
                    <h1 class="font-poppins text-xl mx-2 font-semibold">Optometría</h1>
                </div>

                <div class="  bg-gray-200 rounded-2xl flex flex-col justify-center"
                    @click="selectSpecialist('Oftalmología')"
                    :class="isSpecialistSelected('Oftalmología') ? 'selectCard' : 'bg-gray-200'">
                    <h1 class="font-poppins text-xl mx-2 font-semibold">Oftalmología</h1>
                </div>

                <div class="  bg-gray-200 rounded-2xl flex flex-col justify-center "
                    @click="selectSpecialist('Terapia Visual (Ortóptica)')"
                    :class="isSpecialistSelected('Terapia Visual (Ortóptica)') ? 'selectCard' : 'bg-gray-200'">
                    <h1 class="font-poppins text-xl mx-2 font-semibold">Terapia Visual</h1>
                </div>
                <div class="p-1  bg-gray-200 rounded-2xl flex flex-col justify-center"
                    @click="selectSpecialist('Optometría Integral')"
                    :class="isSpecialistSelected('Optometría Integral') ? 'selectCard' : 'bg-gray-200'">
                    <h1 class="font-poppins text-xl mx-2 font-semibold">Optometría</h1>
                    <h1 class="font-poppins text-xl mx-2 font-semibold">Pediátrica</h1>
                </div>
            </div>
        </div>
        <div class="container m-auto px-2 min-h-svh">
            <div class="flex    ">

                <div class="w-3/10 mx-9 bg-white flex flex-col border h-full sticky top-10">
                    <!-- Contenido con scroll -->
                    <div class="overflow-y-auto p-3 max-h-[50vh] min-h-0">

                        <div class="w-full">
                            <h1 class="mb-2 font-poppins mx-2 mt-4">Buscar por nombre</h1>
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
                                <h1 class="text-xl font-medium font-poppins ">Servicio</h1>
                                <img src="@/assets/svg/arrow.svg" alt="Icono"
                                    class="w-8 h-8 transition-transform ml-auto"
                                    :class="{ 'rotate-90': panels.panelService }">
                            </div>
                            <hr class="my-4 px-3 text-gray-400" />
                            <Transition name="fade">
                                <div v-if="panels.panelService">

                                    <div v-for="(option, index) in optionsServices" :key="index"
                                        class="flex w-full my-2">
                                        <input type="checkbox" :id="'checkbox-' + index"
                                            :checked="isSpecialistSelected(option)" :value="option"
                                            class="w-5 h-5 mx-2 colorvar pointer-events-none">
                                        <h1 class="mt-auto cursor-pointer" @click="selectSpecialist(option)">{{ option
                                            }}</h1>
                                    </div>
                                </div>
                            </Transition>
                        </div>

                        <div class="w-full">
                            <div class="w-full flex items-center px-2" @click="setPanel('panelSpecialty')">
                                <h1 class="text-xl font-medium font-poppins max-w-[80%]">Especialidad</h1>
                                <img src="@/assets/svg/arrow.svg" alt="Icono"
                                    class="w-8 h-8 transition-transform ml-auto"
                                    :class="{ 'rotate-90': panels.panelSpecialty }">
                            </div>
                            <hr class="my-4 px-3 text-gray-400" />
                            <Transition name="fade">
                                <div v-if="panels.panelSpecialty">

                                    <div v-for="(option, index) in optionsSpecialist" :key="index"
                                        class="flex w-full my-2">
                                        <input type="checkbox" :id="'checkbox-' + index"
                                            :checked="isSpecialistSelected(option)" :value="option"
                                            class="w-5 h-5 mx-2 colorvar pointer-events-none">
                                        <h1 class="mt-auto cursor-pointer" @click="selectSpecialist(option)">{{ option
                                            }}</h1>
                                    </div>
                                </div>
                            </Transition>
                        </div>

                        <div class="w-full">
                            <div class="w-full flex items-center px-2" @click="setPanel('panelLocation')">
                                <h1 class="text-xl font-medium font-poppins max-w-[80%]">Ubicación</h1>
                                <img src="@/assets/svg/arrow.svg" alt="Icono"
                                    class="w-8 h-8 transition-transform ml-auto"
                                    :class="{ 'rotate-90': panels.panelLocation }">
                            </div>
                            <hr class="my-4 px-3 text-gray-400" />
                            <Transition name="fade">
                                <div v-if="panels.panelLocation">

                                    <div v-for="(option, index) in optionsLocaltion" :key="index"
                                        class="flex w-full my-2">
                                        <input type="checkbox" :id="'checkbox-' + index"
                                            :checked="isSpecialistSelected(option)" :value="option"
                                            class="w-5 h-5 mx-2 colorvar pointer-events-none">
                                        <h1 class="mt-auto cursor-pointer" @click="selectSpecialist(option)">{{ option
                                            }}</h1>
                                    </div>
                                </div>
                            </Transition>
                        </div>

                    </div>

                    <!-- Botones fijos abajo -->
                    <div class="w-full  ">

                        <div class="flex justify-between px-3 py-5">
                            <button class="bg-transparent px-4 py-2 rounded font-poppins text-2xl font-semibold"
                                style="color: var(--blue-1);">Limpiar</button>
                            <button class="w-full mx-2  text-2xl font-semibold   text-white px-4 py-2 rounded-2xl"
                                style="background-color: var(--blue-1);" @click="searchItems">Aplicar filtros</button>
                        </div>
                    </div>
                </div>

                <div class="w-7/10  ">
                    <h1 v-if="data.length" class="font-poppins mx-2">{{ `${data.length} Especialistas disponibles para
                        ti` }}</h1>
                    <div class="flex flex-wrap justify-center gap-4 p-4">
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
