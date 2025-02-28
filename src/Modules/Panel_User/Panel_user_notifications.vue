<script lang="ts">
import data from './Mock/data.json'
export default {
    name: 'Panel_user_notifications',
    data() {
        return {
            data: data.notifications,
            search: '',
            NotificationSelect: null as { title: string; text: string } | null,
            notifications: null as { title: string; text: string }[] | null
        };
    },
    methods: {
        filtertitle(name: string) {
            if (!name.trim()) {
                this.notifications = this.data; // Si el campo está vacío, restablece
            } else {
                this.notifications = this.data.filter((notification) =>
                    notification.title.toLowerCase().includes(name.toLowerCase())
                );
            }
        },
        selectNotification(notification: { title: string; text: string }) {
            this.NotificationSelect = notification;
        }
    }, watch: {
        // Observa cambios en 'search' y aplica el filtro automáticamente
        search(newValue) {
            this.filtertitle(newValue);
        },
    },
    mounted() {
        if (data.notifications.length) {
            this.data = data.notifications
            this.notifications = data.notifications
        }
    },
}   
</script>
<template>
    <div class="w-full flex items-stretch font-poppins" v-if="data?.length">
        <!-- Columna Izquierda (30%) -->
        <div class="w-[30%] h-auto flex flex-col min-h-96">
            <div class="w-[90%] m-auto mt-8 border rounded-xl bg-white flex-1">
                <div class="w-[90%] m-auto">
                    <h1 class="  font-bold my-5">Notificaciones</h1>
                    <div class="w-full border rounded-2xl p-2 mb-4">
                        <input v-model="search" type="text" placeholder="Buscar notificación..."
                            class="      border-gray-200  focus:outline-none focus:ring-0" />
                    </div>
                    <div v-for="(data, index) in notifications" :key="index" @click="selectNotification(data)"
                        class="  mb-1 cursor-pointer hover:text-[var(--blue-1)]">
                        <h1 class="mb-3">{{ data.title }}</h1>
                        <hr />
                    </div>
                </div>
            </div>
        </div>

        <!-- Columna Derecha (65%) -->
        <div class="w-[65%] h-auto">
            <div class="w-[85%] m-auto my-10">
                <div v-if="NotificationSelect != null" class="w-full mb-6">
                    <div class="w-full border p-5 rounded-2xl bg-white mb-5">
                        <h1 class="font-bold">{{ NotificationSelect.title }}</h1>
                    </div>
                    <div class="w-full border p-10 rounded-2xl bg-white min-h-96 flex flex-col">
                        <div class="m-1 bg-gray-200 flex-1 flex items-center justify-center">
                            <h1 class=" ">{{ NotificationSelect?.text }}</h1>
                        </div>
                    </div>
                </div>
                <div class="w-full  flex flex-col items-end">
                    <button class="px-16  bg-[var(--blue-1)]   text-white rounded-2xl  py-2  cursor-pointer ">Enviar</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <h1>No existen notificaciones</h1>
    </div>
</template>