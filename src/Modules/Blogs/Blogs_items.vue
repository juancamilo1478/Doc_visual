<script lang="ts">
import Mock_data from "./Mocks/data.json"
import Card_Blog from "./Card_Blog.vue";
export default {
    name: "Blogs_items",
    components: {
        Card_Blog
    },
    data() {
        return {
            items: Mock_data
        }
    }
}

</script>
<template>
    <div class="w-screen">
        <h1>items</h1>
        <div class="flex flex-wrap justify-center gap-8 mt-20 w-full">
            <Card_Blog v-for="(item, index) in items" :key="index" :name="item.name" :photo="item.photo"
                :description="item.description" :id="item.id"/>
        </div>
    </div>


</template>