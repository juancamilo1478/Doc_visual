<script lang="ts">
 
import data from './Mock/data.json'
import { getMonthName, getDayName, isValidDate, getDayNameSpanish } from '@/utils/DateUtils'
export default {
    name: 'panel_user_diarie',
    data() {
        return {
            alldata:false,
            data: data,
            myDiary: [],
            listDates: [] as {
                day: number | 0;
                month: number | 0;
                year: number | 0;
                isValid: boolean;
                hours: { hour: number; minute: number }[] | null;
            }[],
            selectdate: [new Date("2025-03-01T08:00:00"),
            new Date("2025-03-05T10:00:00"),
            new Date("2025-03-10T14:00:00"),
            new Date("2025-03-15T16:00:00"),
            new Date("2025-03-20T09:00:00"),
            new Date("2025-03-25T11:00:00"),
            new Date("2025-04-01T13:00:00"),
            new Date("2025-04-10T17:00:00"),
            new Date("2025-04-20T19:00:00"),
            new Date("2025-05-01T22:00:00"),] as Date[],
            currentDay: null as number | null,
            currentMonth: null as number | null,
            currentYear: null as number | null,
            daysInMonth: null as number | null,
            exploreday: null as number | null,
            exploreMonth: null as number | null,
            exploreYear: null as number | null,
        };
    },
    computed: {
        monthName(): string | null {
            if (this.listDates.length === 0) {
                return null;
            }
            const firstMonth = this.listDates[0].month;
            const lastMonth = this.listDates[this.listDates.length - 1].month;
            const firstMonthName = getMonthName(firstMonth);
            const lastMonthName = getMonthName(lastMonth);
            return firstMonth === lastMonth ? firstMonthName : `${firstMonthName} - ${lastMonthName}`;
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

    }, methods: {
        setOption(){
            this.alldata = !this.alldata
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
                let times: { hour: number; minute: number }[] = [];
                for (let i = 8; i < 17; i++) {
                    times.push({ hour: i, minute: 0 })
                }
                this.listDates.unshift({
                    day: prevDate.getDate(),
                    month: prevDate.getMonth() + 1,
                    year: prevDate.getFullYear(),
                    isValid: isValidDate(prevDate.getDate(), prevDate.getMonth() + 1, prevDate.getFullYear()),
                    hours: times,
                });

            }
            // Actualizamos los valores de explore con la fecha más antigua generada
            if (this.listDates.length > 0) {
                const earliest = this.listDates[0];
                this.exploreday = earliest.day;
                this.exploreMonth = earliest.month;
                this.exploreYear = earliest.year;
            }
        },
        nextdate() {
            if (this.exploreday != null) {

                this.getListDates()
            }

        },
        getTimeString(hour: number, minutes: number): string {
            const hourStr = hour.toString().padStart(2, '0');
            const minutesStr = minutes.toString().padStart(2, '0');
            return `${hourStr}:${minutesStr}`;
        },
        getDayNameSpanish,
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
        getDaysInMonth(year: number, month: number): number {
            return new Date(year, month, 0).getDate();
        },
        isDate(day: number, month: number, year: number, hour: number, minute: number): boolean {
    return this.selectdate.some((date: Date) => 
        date.getDate() === day &&
        date.getMonth() + 1 === month &&
        date.getFullYear() === year &&
        date.getHours() === hour &&
        date.getMinutes() === minute
    );
}     
        , getListDates() {
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

                    let times: { hour: number; minute: number }[] = [];
                    // optenemos los horarios de ese dia ejemplo datos siempre van a ser de 
                    for (let i = 8; i < 17; i++) {
                        times.push({ hour: i, minute: 0 })
                    }

                    // Agregamos el objeto con la fecha a la lista
                    this.listDates.push({
                        day,
                        month,
                        year,
                        isValid: isValidDate(day, month, year),
                        hours: times
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
    }

}
</script>
<template>
    <div class="w-full   text-[9px] md:text-base" v-if="listDates.length && listDates != null">
        <div class=" w-[80%] md:w-[70%]  m-auto  mt-10">
            <h1 class="mx-3   font-semibold text-xs  md:text-base"> {{ monthName }}-{{ currentYear }}</h1>
            <div class="flex justify-between    "
                v-if="listDates.length && currentDay != null && currentMonth != null && currentYear != null">
                <div class="w-full  flex  relative justify-between ">
                    <div class="absolute top-0 left-0 w-full flex justify-between  ">
                        <!-- Flecha izquierda -->
                        <button @click="getListDatesBackwards" class="w-12 h-12 mt-0 md:mt-2   flex items-center justify-center text-gray-600 hover:text-gray-900 cursor-pointer 
                        transition-opacity duration-300" :class="isToday(listDates[0].day, listDates[0].month, listDates[0].year, currentDay, currentMonth, currentYear)
                            ? 'opacity-0 invisible'
                            : 'opacity-100 visible'">
                            <img src="@/assets/svg/arrow.svg" alt="Icono" class="w-4 h-4  md:w-6 md:h-6 rotate-180">
                        </button>

                        <!-- Flecha derecha -->
                        <button
                            class="w-12 h-12 mt-0 md:mt-2 flex items-center justify-center text-gray-600 hover:text-gray-900 cursor-pointer"
                            @click="nextdate">
                            <img src="@/assets/svg/arrow.svg" alt="Icono" class="w-4 h-4  md:w-6 md:h-6">
                        </button>
                    </div>
                    <div class="  text-black p-4 rounded-lg text-center w-[28%]  md:w-[30%] ">
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
                            <div v-for="(data, index) in  (!alldata ? listDates[0].hours.slice(0, 5) : listDates[0].hours)" :key="index" v-if="listDates[0].isValid && listDates[0].hours?.length"
                            class="border rounded-xl px-0 md:px-2 py-4 mb-2 cursor-pointer"
                            :class="{ 'bg-gray-400 text-white': isDate(listDates[0].day, listDates[0].month, listDates[0].year, data.hour, data.minute) }">

                            <h1>{{ getTimeString(data.hour, data.minute) }}</h1>
                        </div>
                    </div>

                    <div class="  text-black p-4 rounded-lg text-center  w-[28%]  md:w-[30%]">
                        <h1 class="  pb-2 font-semibold"
                            :class="{ 'text-[var(--blue-1)]': listDates[1].isValid, 'text-[var(--blue-1)]/50': !listDates[1].isValid }">
                            {{
                                getDayNameSpanish(listDates[1].month, listDates[1].day, listDates[1].year) }}
                        </h1>
                        <h1 class="mb-5" :class="{
                            'text-black': listDates[1].isValid,
                            'text-black/50': !listDates[1].isValid
                        }">{{ listDates[1].day }}</h1>
                        <div v-for="(data, index) in  (!alldata ? listDates[1].hours.slice(0, 5) : listDates[1].hours)" :key="index" v-if="listDates[1].isValid && listDates[1].hours?.length"
                            class="border rounded-xl px-0 md:px-2 py-4 mb-2 cursor-pointer"
                            :class="{ 'bg-gray-400 text-white': isDate(listDates[1].day, listDates[1].month, listDates[1].year, data.hour, data.minute) }"
                            >
                            <h1>{{ getTimeString(data.hour, data.minute) }}</h1>
                        </div>
                    </div>
                    <div class="  text-black p-4 rounded-lg text-center  w-[28%]  md:w-[30%]">
                        <h1 class="  pb-2 font-semibold"
                            :class="{ 'text-[var(--blue-1)]': listDates[2].isValid, 'text-[var(--blue-1)]/50': !listDates[2].isValid }">
                            {{
                                getDayNameSpanish(listDates[2].month, listDates[2].day, listDates[2].year) }}
                        </h1>
                        <h1 class="mb-5"
                            :class="{ 'text-black': listDates[2].isValid, 'text-black/50': !listDates[2].isValid }">
                            {{ listDates[2].day }}</h1>
                        <div v-for="(data, index) in  (!alldata ? listDates[2].hours.slice(0, 5) : listDates[2].hours)"  :key="index" v-if="listDates[2].isValid && listDates[2].hours?.length" 
                            class="border rounded-xl px-0 md:px-2 py-4 mb-2 cursor-pointer"
                            :class="{ 'bg-gray-400 text-white': isDate(listDates[2].day, listDates[2].month, listDates[2].year, data.hour, data.minute) }">
                            
                      
                            <h1>{{ getTimeString(data.hour, data.minute) }}</h1>
                        </div>
                    </div>
                </div>

            </div>
            <div class="w-full text-center text-[var(--blue-1)] font-bold" >
                <h1 v-if="!alldata" class="cursor-pointer" @click="setOption">Ver más horarios</h1>
                <h1 v-else class="cursor-pointer"  @click="setOption">Ver menos</h1>
            </div>
        </div>
    </div>
</template>