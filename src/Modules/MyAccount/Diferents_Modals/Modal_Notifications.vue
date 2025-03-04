<script lang="ts">
export default {
    name: 'Modal_Notifications'
}
</script>
<template>
    <div class="w-full  ">
        <div class="w-full">
            <h1 class="text-4xl p-2 font-semibold w-[90%] m-auto my-6">Notificaciones</h1>
            <hr class="text-gray-300" />
        </div>
        <div class="w-full h-full flex flex-col justify-center items-center mt-10">
            <svg class="w-[250px] h-auto text-[var(--blue-1)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                fill="currentColor">
                <path
                    d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-4q-37-8-67.5-27.5T600-720H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h404q-4 20-4 40t4 40H160v525l46-45h594v-324q23-5 43-13.5t37-22.5v360q0 33-23.5 56.5T800-240H240L80-80Zm80-720v480-480Zm600 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
            </svg>
            <h1 class="text-4xl font-semibold text-gray-600">Agenda una cita</h1>
        </div>
    </div>
</template>