<script   lang="ts">
import BulletingForm from "./BulletingForm.vue";
export default {
    name:"Bulletin",
    components:{
        BulletingForm
    }
}

</script>

<template>
    <div class="w-screen flex flex-col md:flex-row">
        <div class="w-1/2 h-96 bg-blue-500">
            <img 
            src="@/assets/images/optica1.jpg" 
            alt="Imagen 1" 
             class="w-full h-full object-cover"
          />
        </div>
        <div class="w-1/2 h-96  ">
            <BulletingForm />
        </div>
      </div>
      


</template>