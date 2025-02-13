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
        <div class="w-11/12">
            <h1 class="w-11/12 max-w-3xl font-sans text-center sm:text-3xl lg:text-5xl font-semibold mx-auto"
                style="color: var(--blue-1);">Suscríbete a nuestro boletín</h1>
            <div class="flex flex-col gap-4 items-center   px-7 mt-7">
                <input type="text" v-model="nombre" placeholder="Nombre"
                    class="w-11/12 max-w-3xl p-3 border rounded-2xl font-sans  text-2xl border-gray-400" style="color: var(--blue-1); "   />
                    <input 
                    type="email" 
                    v-model="correo" 
                    placeholder="Email"
                    class="mt-1 w-11/12 max-w-3xl p-3 rounded-2xl font-sans text-2xl border-2 border-gray-400"  
                    style="color: var(--blue-1);"
                />
            </div>
            <div class="px-3">
                <h2 class="w-11/12 max-w-3xl font-sans text-2xl  mt-2  font-semibold mx-auto text-right"  style="color: var(--blue-1);">Política de Habeas DATA</h2>
            </div>
        </div>
    </div>
</template>