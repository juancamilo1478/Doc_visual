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
        <div class="w-full  h-96  md:w-1/2 ">
            <img 
            src="@/assets/images/optica1.jpg" 
            alt="Imagen 1" 
             class="w-full h-full object-cover"
          />
        </div>
        <div class="w-full  h-96  md:w-1/2 ">
            <BulletingForm />
        </div>
      </div>
      


</template>