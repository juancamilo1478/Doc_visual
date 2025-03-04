<script lang="ts">
import { MyAcconutTypesModal } from './TypeModal_MyAccount'
import Modal_Init from './Diferents_Modals/Modal_Init.vue';
import Modal_Date from './Diferents_Modals/Modal_Date.vue';
import Modal_Notifications from './Diferents_Modals/Modal_Notifications.vue';
import Modal_Specialists from './Diferents_Modals/Modal_Specialists.vue';
export default {
    name: 'Module_Myaccount',
    data() {
        return {
            modal: MyAcconutTypesModal.INIT
        }
    },
    methods: {
        setModal(type: MyAcconutTypesModal) {
            this.modal = type
        }
    },
    components: {
        Modal_Init,
        Modal_Date,
        Modal_Notifications,
        Modal_Specialists
    }, computed: {
        MyAcconutTypesModal() {
            return MyAcconutTypesModal;
        },

    },
}

</script>
<template>
    <div class="w-full flex h-full font text-xl">
        <div class="w-[20%] bg-white  h-full overflow-hidden">
            <div class="w-full m-auto  h-full flex flex-col justify-center  overflow-hidden items-end text-gray-500">
                <div class="w-[80%]" :class="{
                    ' text-[var(--blue-1)]': modal === MyAcconutTypesModal.INIT,

                }">
                    <div class="flex w-[80%]    gap-4 justify-start my-4 cursor-pointer"
                        @click="setModal(MyAcconutTypesModal.INIT)">
                        <svg class="w-8 h-8   " :class="{ 'text-[var(--blue-1)]': modal === MyAcconutTypesModal.INIT }"
                            :style="{ color: modal === MyAcconutTypesModal.INIT ? 'var(--blue-1)' : '#6a7282' }"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                            <path
                                d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                        </svg>
                        <h1>Inicio</h1>
                    </div>
                    <hr class="text-gray-300" />
                </div>
                <div class="w-[80%]"  :class="{
                    ' text-[var(--blue-1)]': modal === MyAcconutTypesModal.MYDATES,

                }"  >
                    <div class="flex w-[80%]  gap-4 justify-start my-4 cursor-pointer "
                        @click="setModal(MyAcconutTypesModal.MYDATES)"   >
                        <svg class="w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"   :class="{ 'text-[var(--blue-1)]': modal === MyAcconutTypesModal.MYDATES }"
                            :style="{ color: modal === MyAcconutTypesModal.MYDATES? 'var(--blue-1)' : '#6a7282' }"
                            fill="currentColor">
                            <path
                                d="M438-226 296-368l58-58 84 84 168-168 58 58-226 226ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                        </svg>
                        <h1>Mis citas</h1>
                    </div>
                    <hr class="text-gray-300" />
                </div>
                <div class="w-[80%]" :class="{
                    ' text-[var(--blue-1)]': modal === MyAcconutTypesModal.SPECIALISTS,

                }">
                    <div class="flex w-[80%]   gap-4 justify-start my-4 cursor-pointer" 
                        @click="setModal(MyAcconutTypesModal.SPECIALISTS)">
                        <svg class="w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" :class="{ 'text-[var(--blue-1)]': modal === MyAcconutTypesModal.SPECIALISTS }"
                            :style="{ color: modal === MyAcconutTypesModal.SPECIALISTS? 'var(--blue-1)' : '#6a7282' }"
                            fill="currentColor">
                            <path
                                d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                        </svg>
                        <h1>Especialistas</h1>
                    </div>
                    <hr class="text-gray-300" />
                </div>
                <div class="w-[80%]" :class="{
                    ' text-[var(--blue-1)]': modal === MyAcconutTypesModal.NOTIFICATIONS,

                }">
                    <div class="flex w-[80%]   gap-4 justify-start my-4 cursor-pointer"
                        @click="setModal(MyAcconutTypesModal.NOTIFICATIONS)">
                        <svg class="w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" :class="{ 'text-[var(--blue-1)]': modal === MyAcconutTypesModal.NOTIFICATIONS}"
                            :style="{ color: modal === MyAcconutTypesModal.NOTIFICATIONS ? 'var(--blue-1)' : '#6a7282' }"
                            fill="currentColor">
                            <path
                                d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
                        </svg>
                        <h1>Notificaciones</h1>
                    </div>

                </div>
            </div>

        </div>
        <div class="w-[80%] bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
            <Modal_Init v-if="modal === MyAcconutTypesModal.INIT" />
            <Modal_Date v-if="modal === MyAcconutTypesModal.MYDATES" />
            <Modal_Notifications v-if="modal === MyAcconutTypesModal.NOTIFICATIONS" />
            <Modal_Specialists v-if="modal === MyAcconutTypesModal.SPECIALISTS" />
        </div>

    </div>

</template>