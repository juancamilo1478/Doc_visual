<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "BulletingForm",
    data() {
        return {
            nombre: "",
            correo: ""
        };
    }
});
</script>

<template>
    <div class="w-full h-full flex items-center justify-center" :style="{ background: 'linear-gradient(to right, white, #c4d1e4)' }">
        <div class="w-fit mx-auto">
            <h1 class="max-w-max font-poppins text-center text-3xl lg:text-4xl font-light   mx-auto"
                style="color: var(--blue-1);">
                Suscríbete a nuestro boletín
            </h1>
            <div class="flex flex-col gap-4 items-center   mt-7">
                <input type="text" v-model="nombre" placeholder="Nombre"
                    class="w-full max-w-3xl p-3 border rounded-2xl font-poppins  text-xl border-gray-400 font-semibold"
                    style="color: var(--blue-1);" />
                <input type="email" v-model="correo" placeholder="Email"
                    class="mt-1 w-full max-w-3xl p-3 rounded-2xl font-poppins text-xl border border-gray-400 font-semibold"
                    style="color: var(--blue-1);" />
            </div>
            <div class="px-3 w-full flex justify-end mt-1">
                <h2 class="max-w-max font-poppins text-lg mt-2 font-light text-right"
                    style="color: var(--blue-1);">
                    Política de Habeas DATA
                </h2>
            </div>
            
        </div>
        
    </div>
</template>