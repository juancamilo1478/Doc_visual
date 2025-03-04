<script lang="ts">
import Navbar from '@/Modules/Home/Navbar.vue';
import Footer_Color from '@/common/Footer_Color.vue';
import Module_Myaccount from '@/Modules/MyAccount/Module_Myaccount.vue';
export default {
    name: 'myaccount',
    components: {
        Navbar,
        Footer_Color,
        Module_Myaccount
    }
}
</script>
<template>
    <div class="w-full h-screen bg-amber-100 flex flex-col font-poppins ">
        <Navbar />
        <div class="flex-1 overflow-auto">
            <Module_Myaccount />
        </div>
        <Footer_Color color="#ffffff" />

    </div>
</template>