<script lang="ts">
export default {
    name: 'Modal_date'
}
</script>
<template>
    <div class="w-full  ">
        <div class="w-full">
            <h1 class="text-4xl p-2 font-semibold w-[90%] m-auto my-6">Mis citas</h1>
            <hr class="text-gray-300" />
        </div>
        <div class="w-full h-full flex flex-col justify-center items-center mt-10">
            <div class="flex flex-col items-center gap-4">
                <svg class="w-[250px] h-auto text-[var(--blue-1)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path
                        d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                </svg>
        
                <h1 class="text-2xl font-semibold text-gray-600 text-center">
                    No tiene citas agendadas
                </h1>
        
                <button class="    bg-[var(--blue-1)] p-3 px-20 text-white font-semibold rounded-2xl">
                    Agenda tu primera cita
                </button>
            </div>
        </div>
    </div>


 
</template>