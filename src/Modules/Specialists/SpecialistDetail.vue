<script lang="ts">
import SpecialistData from './Mocks/SpecialistDataMock.json'
import type { Specialist } from './Specialist';
import Navbar from '../Home/Navbar.vue';
import Footer_Color from '@/common/Footer_Color.vue';
import { getMonthName, getDayName, isValidDate, getDayNameSpanish } from '@/utils/DateUtils'
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
            groupedImages: [] as string[][],
            service: null as { nameService: string; price: number } | null,
            panels: {
                opinionsData: false
            },
            currentDay: null as number | null,
            currentMonth: null as number | null,
            currentYear: null as number | null,
            daysInMonth: null as number | null,

            selectdate: null as Date | null,

            exploreday: null as number | null,
            exploreMonth: null as number | null,
            exploreYear: null as number | null,

            listDates: [] as {
                day: number | 0;
                month: number | 0;
                year: number | 0;
                isValid: boolean;
                hours: { hour: number; minute: number }[];
            }[],
            movilepanel:{
                schedule:false
            }
        };
    }, created() {
        this.getSpecialistById();
        this.groupImages();
    },

    computed: {
        monthName(): string | null {
            return this.exploreMonth !== null ? getMonthName(this.exploreMonth) : null;
        }
    },

    mounted() {
        const today = new Date();
        this.currentDay = today.getDate();
        this.exploreday = today.getDate();

        this.currentMonth = today.getMonth() + 1;
        this.exploreMonth = today.getMonth() + 1;

        this.exploreYear = today.getFullYear();
        this.currentYear = today.getFullYear();

        this.daysInMonth = this.getDaysInMonth(this.currentYear, this.currentMonth);
        this.getListDates()

    },
    methods: {
        getDayNameSpanish,
        getListDates() {
            // Reiniciamos la lista
            this.listDates = [];

            // Verificamos que exploreYear, exploreMonth y exploreday estén definidos
            if (this.exploreYear != null && this.exploreMonth != null && this.exploreday != null && this.currentDay != null && this.currentMonth != null && this.currentYear != null) {
                // Creamos un objeto Date a partir de la fecha de exploración
                const todayExplorer = this.isToday(
                    this.exploreday,      // día de exploración
                    this.exploreMonth,    // mes de exploración
                    this.exploreYear,     // año de exploración
                    this.currentDay,      // día actual
                    this.currentMonth,    // mes actual
                    this.currentYear      // año actual
                );

                let startDate = new Date(
                    this.exploreYear,
                    this.exploreMonth - 1,
                    this.exploreday
                );

                if (!todayExplorer) {
                    // Si no es hoy, se le suma un día a startDate
                    startDate.setDate(startDate.getDate() + 1);
                }

                // Generamos 3 fechas consecutivas (por ejemplo, hoy y los 2 días siguientes)

                for (let i = 0; i < 3; i++) {
                    // Clonamos startDate y le sumamos i días
                    const currentDate = new Date(startDate);
                    currentDate.setDate(startDate.getDate() + i);

                    const day = currentDate.getDate();
                    const month = currentDate.getMonth() + 1; // Ajustamos a 1-indexado
                    const year = currentDate.getFullYear();

                    // Obtenemos el nombre del día usando tu función getDayName
                    const nameDay = getDayName(month, day, year);
                    const dataHours = this.specialist?.schedule[nameDay] ?? [];
                    // Agregamos el objeto con la fecha a la lista
                    this.listDates.push({
                        day,
                        month,
                        year,
                        isValid: isValidDate(day, month, year),
                        hours: dataHours,

                    });
                }
                // Actualizamos los valores de explore* a la última fecha generada
                // En este caso, la última fecha es startDate + 2 días (ya que el bucle va de 0 a 2)
                const lastDate = new Date(startDate);
                lastDate.setDate(startDate.getDate() + 2);
                this.exploreday = lastDate.getDate();
                this.exploreMonth = lastDate.getMonth() + 1;
                this.exploreYear = lastDate.getFullYear();

            }

            console.log(this.listDates);
            console.log(`datos dia ${this.currentDay} mes ${this.currentMonth} año ${this.currentYear}`);
        },
        getTimeString(hour: number, minutes: number): string {
            const hourStr = hour.toString().padStart(2, '0');
            const minutesStr = minutes.toString().padStart(2, '0');
            return `${hourStr}:${minutesStr}`;
        },

        getListDatesBackwards() {
            // Verificamos que ya exista una fecha de referencia en listDates[0]
            if (!this.listDates || this.listDates.length === 0) return;

            // Creamos un objeto Date a partir de la fecha de referencia
            const refDate = new Date(
                this.listDates[0].year,
                this.listDates[0].month - 1, // JavaScript espera meses de 0 a 11
                this.listDates[0].day
            );
            this.listDates = [];

            // Generamos 3 días anteriores
            for (let i = 1; i <= 3; i++) {
                // Clonamos refDate y restamos i días
                const prevDate = new Date(refDate);
                prevDate.setDate(prevDate.getDate() - i);

                // Obtenemos el nombre del día y los horarios asociados (si aplican)
                const nameDay = getDayName(prevDate.getMonth() + 1, prevDate.getDate(), prevDate.getFullYear());
                const dataHours = this.specialist?.schedule[nameDay] ?? [];

                // Insertamos al inicio del array para mantener el orden deseado
                this.listDates.unshift({
                    day: prevDate.getDate(),
                    month: prevDate.getMonth() + 1,
                    year: prevDate.getFullYear(),
                    isValid: isValidDate(prevDate.getDate(), prevDate.getMonth() + 1, prevDate.getFullYear()),
                    hours: dataHours,
                });

            }
            // Actualizamos los valores de explore con la fecha más antigua generada
            if (this.listDates.length > 0) {
                const earliest = this.listDates[0];
                this.exploreday = earliest.day;
                this.exploreMonth = earliest.month;
                this.exploreYear = earliest.year;
            }

            console.log(this.listDates);

        },


        isToday(
            day: number,
            month: number,
            year: number,
            compareDay: number,
            compareMonth: number,
            compareYear: number
        ): boolean {
            return (day === compareDay && month === compareMonth && year === compareYear);
        },
        isData(day: number, month: number, year: number,hour:number,minutes:number  ): boolean {
            const date1 = new Date(
                year,
                month - 1,
                day,
                hour,
                minutes
            )
            if(this.selectdate != null){
                return date1.getFullYear() === this.selectdate.getFullYear() &&
                date1.getMonth() === this.selectdate.getMonth() &&
                date1.getDate() === this.selectdate.getDate() && date1.getHours() === this.selectdate.getHours() && date1.getMinutes() === this.selectdate.getMinutes() 
            }else{
                return false
            }
           
        },
        getDaysInMonth(year: number, month: number): number {
            return new Date(year, month, 0).getDate();
        },
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
        }, setPanel(name: keyof typeof this.panels) {
            this.panels[name] = !this.panels[name];
        },
        selectdata(day: number, month: number, year: number, hour: number, minute: number) {
            const dateData = new Date(year, month - 1, day, hour, minute);
            if (
                this.selectdate != null &&
                dateData.getFullYear() === this.selectdate.getFullYear() &&
                dateData.getMonth() === this.selectdate.getMonth() &&
                dateData.getDate() === this.selectdate.getDate() &&
                dateData.getHours() === this.selectdate.getHours() &&
                dateData.getMinutes() === this.selectdate.getMinutes()
            ) {
                this.selectdate = null;
            } else {
                this.selectdate = dateData;
            }
        },

        setPanelMovile(name: keyof typeof this.movilepanel) {
            this.movilepanel[name] = !this.movilepanel[name];
        },

        nextdate() {
            if (this.exploreday != null) {

                this.getListDates()
            }

        },

    }
}

</script>
<template>
    <div class="w-full bg-gradient-to-r from-gray-100 to-gray-50">
        <Navbar />

        <button v-if="movilepanel.schedule" class="fixed bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden  bg-[var(--blue-1)] flex justify-center gap-2 text-white px-6 py-3 rounded container cursor-pointer" @click="setPanelMovile('schedule')">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
            width="24px" fill="#ffffff">
            <path
                d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
        </svg>
        <h1 class="font-bold">Agendar cita</h1>
        </button>
        <!-- movile shedule -->


        <div v-else
        class="fixed inset-0 z-50 bg-black/50    flex justify-center items-center sm:flex md:flex lg:hidden"
        @click.self="setPanelMovile('schedule')">
        <!-- Contenedor del modal -->
        <div class="bg-white w-[80%] max-w-[80% min-h-[80%] max-h-[80%]  rounded-2xl shadow-lg flex flex-col">
            <!-- Encabezado -->
            <div class="w-full">
                <div class="w-full flex items-center px-2">
                    <button @click="setPanelMovile('schedule')"
                        class="p-2 text-lg font-poppins font-bold cursor-pointer">X</button>
                    <h3 class="flex-1 text-center font-poppins">Servicio</h3>
                     
                </div>
                <hr class="text-gray-200" />
            </div>

            <!-- Contenido desplazable -->
            <div class="flex-1 overflow-auto p-4">
                
                <div
                        class="w-[100%]  ml-auto   min-h-[60vh]   bg-white rounded-2xl  font-poppins text-sm sticky top-5">
                        <h1 class="font-poppins font-bold m-6">{{ `Agendar tu cita con ${specialist?.name?.split(' ')[0]}` }}</h1>
                        <h2 class="font-poppins text-base mx-6">Servicio</h2>
                        <select v-model="service" id="specialist" class="border p-2 w-[80%] rounded-xl mx-6 mt-2 mb-7 ">
                            <option disabled :value="null" class=" ">Selecciona un servicio</option>
                            <option v-for="(data, index) in specialist?.servicesCost" :key="index" :value="data"
                                class="mx-6 ">
                                {{ data.nameService }} ${{ data.price }}
                            </option>
                        </select>
                        <h1 class="mx-8 font-semibold text-base"> {{ monthName }}{{ currentYear }}</h1>
                        <div class="flex   justify-between p-4  px-8"
                            v-if="listDates.length && currentDay != null && currentMonth != null && currentYear != null">
                            <!-- Flecha izquierda -->
                            <button @click="getListDatesBackwards"
                                class="w-5 h-12 mt-3 flex items-center justify-center text-gray-600 hover:text-gray-900  cursor-pointer"
                                v-if="!isToday(listDates[0].day, listDates[0].month, listDates[0].year, currentDay, currentMonth, currentYear)">
                                <img src="@/assets/svg/arrow.svg" alt="Icono"
                                    class="w-4 h-4 transition-transform ml-auto rotate-180">
                            </button>

                            <!-- Grid de 3 columnas -->
                            <div class="w-full grid grid-cols-3 gap-4 ">
                                <div class="  text-black p-4 rounded-lg text-center">
                                    <h1 class="text-[var(--blue-1)] pb-2 font-semibold"
                                        v-if="!isToday(listDates[0].day, listDates[0].month, listDates[0].year, currentDay, currentMonth, currentYear)">
                                        {{ getDayNameSpanish(listDates[0].month, listDates[0].day, listDates[0].year) }}
                                    </h1>
                                    <h1 class="  pb-2 font-semibold"
                                        :class="{ 'text-[var(--blue-1)]': listDates[0].isValid, 'text-[var(--blue-1)]/50': !listDates[0].isValid }"
                                        v-else>Hoy</h1>

                                    <h1 class="mb-5"
                                        :class="{ 'text-black': listDates[0].isValid, 'text-black/50': !listDates[0].isValid }">
                                        {{ listDates[0].day }}</h1>
                                    <div v-for="(data, index) in listDates[0].hours" :key="index"
                                        @click="selectdata(listDates[0].day, listDates[0].month, listDates[0].year,data.hour,data.minute)"
                                        v-if="listDates[0].isValid"
                                        :class="{ 'bg-[var(--blue-1)] text-white border-none': isData(listDates[0].day,listDates[0].month,listDates[0].year,data.hour,data.minute)   }"
                                        class="border rounded-xl px-2 py-4 mb-2 cursor-pointer">
                                        <h1>{{ getTimeString(data.hour, data.minute) }}</h1>
                                    </div>
                                </div>

                                <div class="  text-black p-4 rounded-lg text-center">
                                    <h1 class="  pb-2 font-semibold"
                                        :class="{ 'text-[var(--blue-1)]': listDates[1].isValid, 'text-[var(--blue-1)]/50': !listDates[1].isValid }">
                                        {{
                                            getDayNameSpanish(listDates[1].month, listDates[1].day, listDates[1].year) }}
                                    </h1>
                                    <h1 class="mb-5" :class="{
                                        'text-black': listDates[1].isValid,
                                        'text-black/50': !listDates[1].isValid
                                    }">{{ listDates[1].day }}</h1>
                                    <div v-for="(data, index) in listDates[1].hours" :key="index"
                                        @click="selectdata(listDates[1].day, listDates[1].month, listDates[1].year,data.hour,data.minute)"
                                        v-if="listDates[1].isValid" :class="{ 'bg-[var(--blue-1)] text-white border-none': isData(listDates[1].day,listDates[1].month,listDates[1].year,data.hour,data.minute)   }"
                                        class="border rounded-xl px-2 py-4 mb-2 cursor-pointer">
                                        <h1>{{ getTimeString(data.hour, data.minute) }}</h1>
                                    </div>
                                </div>
                                <div class="  text-black p-4 rounded-lg text-center">
                                    <h1 class="  pb-2 font-semibold"
                                        :class="{ 'text-[var(--blue-1)]': listDates[2].isValid, 'text-[var(--blue-1)]/50': !listDates[2].isValid }">
                                        {{
                                            getDayNameSpanish(listDates[2].month, listDates[2].day, listDates[2].year) }}
                                    </h1>
                                    <h1 class="mb-5"
                                        :class="{ 'text-black': listDates[2].isValid, 'text-black/50': !listDates[2].isValid }">
                                        {{ listDates[2].day }}</h1>
                                    <div v-for="(data, index) in listDates[2].hours" :key="index"
                                        @click="selectdata(listDates[2].day, listDates[2].month, listDates[2].year,data.hour,data.minute)"
                                        v-if="listDates[2].isValid"  :class="{ 'bg-[var(--blue-1)] text-white border-none': isData(listDates[2].day,listDates[2].month,listDates[2].year,data.hour,data.minute)   }"
                                        class="border rounded-xl px-2 py-4 mb-2 cursor-pointer">
                                        <h1>{{ getTimeString(data.hour, data.minute) }}</h1>
                                    </div>
                                </div>
                            </div>

                            <!-- Flecha derecha -->
                            <button
                                class="w-5 h-12 mt-3 flex items-center justify-center text-gray-600 hover:text-gray-900 cursor-pointer "
                                @click="nextdate">
                                <img src="@/assets/svg/arrow.svg" alt="Icono"
                                    class="w-4 h-4 transition-transform ml-auto">
                            </button>
                        </div>
                        <h1 class="text-center font-bold text-[var(--blue-1)]">ver más horarios</h1>
                        
                    </div>

              



            </div>

            <!-- Botón fijo en la parte inferior -->
            <div class="w-full p-4 bg-white shadow-md rounded-2xl">
                <div
                class="flex gap-2 items-center bg-[var(--blue-1)] py-2 px-8 mb-10  w-fit text-white rounded-xl shadow cursor-pointer m-auto my-8">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="#ffffff">
                    <path
                        d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
                </svg>
                <h1 class="font-bold">Agendar cita</h1>
            </div>
            </div>
        </div>
    </div>


        <!-- --------------------- -->

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
            <div class="w-full lg:flex">
                <div class="w-[100%]  m-auto  lg:w-1/2   ">
                    <div class="w-full rounded-2xl border border-gray-300 bg-white font-poppins text-base">
                        <div class="w-full p-8 ">
                            <h1 class="font-bold">Sobre mí</h1>
                            <p class="text-sm mt-6">
                                {{ specialist?.description }}
                            </p>
                            <h2 class="mt-8 text-sm">
                                Especialista en:
                            </h2>
                            <ul class="list-disc pl-5">
                                <li v-for="(item, index) in specialist?.specialist" :key="index" class="text-sm">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full rounded-2xl border mt-6 border-gray-300 bg-white">
                        <div class="w-full p-8 font-poppins text-base">
                            <h1 class="font-bold">Consultorio</h1>
                            <p class="mt-4 text-sm">
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
                                class="font-poppins text-sm font-mono">
                                <p>{{ data.nameService }}</p>
                                <p class="mb-2 mt-2">${{ data.price }}</p>
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
                            <div class="font-poppins text-sm font-mono">
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
                                <!-- first data opinions -->
                                <div class="font-poppins">
                                    <h1 class="font-bold">{{ specialist?.opinions?.length ? specialist.opinions[0].user
                                        : 'Usuario desconocido' }}</h1>
                                    <div class="flex">
                                        <svg v-for="n in (parseInt(specialist?.opinions[0].score.toString() || '0', 10))"
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
                                    <p>Localización: {{ specialist?.opinions[0].lugar }}</p>
                                    <p>Localización: {{ specialist?.opinions[0].text }}</p>
                                    <hr class="text-gray-300" v-if="panels.opinionsData" />
                                </div>


                                <div v-for="(data, index) in specialist?.opinions?.slice(1)" :key="index + 1"
                                    class="font-poppins" v-if="panels.opinionsData">
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
                                    <p>Localización: {{ data.lugar }}</p>
                                    <p>Localización: {{ data.text }}</p>
                                    <hr class="text-gray-300" />
                                </div>
                                <button @click="setPanel('opinionsData')" v-if="!panels.opinionsData"
                                    class="w-full border border-[var(--blue-1)] font-poppins font-semibold p-2 rounded-2xl text-[var(--blue-1)] mt-4 ">
                                    Ver más opiniones
                                </button>
                                <button @click="setPanel('opinionsData')" v-else
                                    class="w-full border border-[var(--blue-1)] font-poppins font-semibold p-2 rounded-2xl text-[var(--blue-1)] mt-4 ">
                                    Ver menos
                                </button>


                            </div>
                        </div>
                    </div>




                </div>
                <!-- derecho -->
                <div class="hidden lg:block w-[50%]">
                    <div
                        class="w-[95%]  ml-auto   min-h-[60vh] border border-gray-300 bg-white rounded-2xl  font-poppins text-sm sticky top-5">
                        <h1 class="font-poppins font-bold m-6">{{ `Agendar tu cita con ${specialist?.name?.split(' ')[0]}` }}</h1>
                        <h2 class="font-poppins text-base mx-6">Servicio</h2>
                        <select v-model="service" id="specialist" class="border p-2 w-[80%] rounded-xl mx-6 mt-2 mb-7 ">
                            <option disabled :value="null" class=" ">Selecciona un servicio</option>
                            <option v-for="(data, index) in specialist?.servicesCost" :key="index" :value="data"
                                class="mx-6 ">
                                {{ data.nameService }} ${{ data.price }}
                            </option>
                        </select>
                        <h1 class="mx-8 font-semibold text-base"> {{ monthName }}{{ currentYear }}</h1>
                        <div class="flex   justify-between p-4  px-8"
                            v-if="listDates.length && currentDay != null && currentMonth != null && currentYear != null">
                            <!-- Flecha izquierda -->
                            <button @click="getListDatesBackwards"
                                class="w-5 h-12 mt-3 flex items-center justify-center text-gray-600 hover:text-gray-900  cursor-pointer"
                                v-if="!isToday(listDates[0].day, listDates[0].month, listDates[0].year, currentDay, currentMonth, currentYear)">
                                <img src="@/assets/svg/arrow.svg" alt="Icono"
                                    class="w-4 h-4 transition-transform ml-auto rotate-180">
                            </button>

                            <!-- Grid de 3 columnas -->
                            <div class="w-full grid grid-cols-3 gap-4 ">
                                <div class="  text-black p-4 rounded-lg text-center">
                                    <h1 class="text-[var(--blue-1)] pb-2 font-semibold"
                                        v-if="!isToday(listDates[0].day, listDates[0].month, listDates[0].year, currentDay, currentMonth, currentYear)">
                                        {{ getDayNameSpanish(listDates[0].month, listDates[0].day, listDates[0].year) }}
                                    </h1>
                                    <h1 class="  pb-2 font-semibold"
                                        :class="{ 'text-[var(--blue-1)]': listDates[0].isValid, 'text-[var(--blue-1)]/50': !listDates[0].isValid }"
                                        v-else>Hoy</h1>

                                    <h1 class="mb-5"
                                        :class="{ 'text-black': listDates[0].isValid, 'text-black/50': !listDates[0].isValid }">
                                        {{ listDates[0].day }}</h1>
                                    <div v-for="(data, index) in listDates[0].hours" :key="index"
                                        @click="selectdata(listDates[0].day, listDates[0].month, listDates[0].year,data.hour,data.minute)"
                                        v-if="listDates[0].isValid"
                                        :class="{ 'bg-[var(--blue-1)] text-white border-none': isData(listDates[0].day,listDates[0].month,listDates[0].year,data.hour,data.minute)   }"
                                        class="border rounded-xl px-2 py-4 mb-2 cursor-pointer">
                                        <h1>{{ getTimeString(data.hour, data.minute) }}</h1>
                                    </div>
                                </div>

                                <div class="  text-black p-4 rounded-lg text-center">
                                    <h1 class="  pb-2 font-semibold"
                                        :class="{ 'text-[var(--blue-1)]': listDates[1].isValid, 'text-[var(--blue-1)]/50': !listDates[1].isValid }">
                                        {{
                                            getDayNameSpanish(listDates[1].month, listDates[1].day, listDates[1].year) }}
                                    </h1>
                                    <h1 class="mb-5" :class="{
                                        'text-black': listDates[1].isValid,
                                        'text-black/50': !listDates[1].isValid
                                    }">{{ listDates[1].day }}</h1>
                                    <div v-for="(data, index) in listDates[1].hours" :key="index"
                                        @click="selectdata(listDates[1].day, listDates[1].month, listDates[1].year,data.hour,data.minute)"
                                        v-if="listDates[1].isValid" :class="{ 'bg-[var(--blue-1)] text-white border-none': isData(listDates[1].day,listDates[1].month,listDates[1].year,data.hour,data.minute)   }"
                                        class="border rounded-xl px-2 py-4 mb-2 cursor-pointer">
                                        <h1>{{ getTimeString(data.hour, data.minute) }}</h1>
                                    </div>
                                </div>
                                <div class="  text-black p-4 rounded-lg text-center">
                                    <h1 class="  pb-2 font-semibold"
                                        :class="{ 'text-[var(--blue-1)]': listDates[2].isValid, 'text-[var(--blue-1)]/50': !listDates[2].isValid }">
                                        {{
                                            getDayNameSpanish(listDates[2].month, listDates[2].day, listDates[2].year) }}
                                    </h1>
                                    <h1 class="mb-5"
                                        :class="{ 'text-black': listDates[2].isValid, 'text-black/50': !listDates[2].isValid }">
                                        {{ listDates[2].day }}</h1>
                                    <div v-for="(data, index) in listDates[2].hours" :key="index"
                                        @click="selectdata(listDates[2].day, listDates[2].month, listDates[2].year,data.hour,data.minute)"
                                        v-if="listDates[2].isValid"  :class="{ 'bg-[var(--blue-1)] text-white border-none': isData(listDates[2].day,listDates[2].month,listDates[2].year,data.hour,data.minute)   }"
                                        class="border rounded-xl px-2 py-4 mb-2 cursor-pointer">
                                        <h1>{{ getTimeString(data.hour, data.minute) }}</h1>
                                    </div>
                                </div>
                            </div>

                            <!-- Flecha derecha -->
                            <button
                                class="w-5 h-12 mt-3 flex items-center justify-center text-gray-600 hover:text-gray-900 cursor-pointer "
                                @click="nextdate">
                                <img src="@/assets/svg/arrow.svg" alt="Icono"
                                    class="w-4 h-4 transition-transform ml-auto">
                            </button>
                        </div>
                        <h1 class="text-center font-bold text-[var(--blue-1)]">ver más horarios</h1>
                        <div class="w-full">
                            <div
                                class="flex gap-2 items-center bg-[var(--blue-1)] py-2 px-8 mb-10  w-fit text-white rounded-xl shadow cursor-pointer m-auto my-8">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="#ffffff">
                                    <path
                                        d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
                                </svg>
                                <h1 class="font-bold">Agendar cita</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer_Color />
    </div>
</template>
<style>
#specialist {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: none;
}
</style>