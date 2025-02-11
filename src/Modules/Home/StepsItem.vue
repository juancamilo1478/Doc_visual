<script lang="ts">
import ButtonNumber from "@/common/Button_Number.vue"; // Nombre corregido según la convención
export default {
  name: "StepsItem",
  components: {
    ButtonNumber,
  },
  props: {
    title:String,
    number:String,
    text: {
      type: String,
      required: false, // Opcional
      default: "", // Valor por defecto si no se pasa
    }, 
  },
};
</script>

<template>
  <div class="w-full flex bg-white   items-center p-5 my-4" style="border: solid var(--gray-1); border-radius: 25px;">
    <ButtonNumber  
      :element= number  
      :size="50" 
      :color="'#769bd2'"
      class="mx-4"
    />
    <div>
        <h1 class="font-[Poppins] text-3xl font-light">{{ title }}</h1>
        <h1 v-if="text !== ''" class="font-[Poppins] text-xl font-light">{{ text }}</h1> 
    </div>
  </div>
</template>
