<script lang="ts">
import data from './Mock/data.json'
export default{
    name:'panel_user_diarie',
    data() {
        return {
            data: data
        };
    },
    
}
</script>
<template>
    <div class="w-full flex ">
        <div class="w-[30%] h-40 bg-amber-200">

        </div>
        <div class="w-[65%] h-40 bg-amber-400">
            <h1> </h1>
        </div>
    </div>
</template>