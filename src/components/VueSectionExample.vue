<script setup>
import Swiper from './UI/Swiper.vue'
</script>
<script>

export default {
    data() {
        return {
            hText: "Примеры работ:",
        }
    }
}

</script>

<template>
    <div class="section-example__content">
        <h2 class="section-exmaple__title"> 
            {{ hText}}
        </h2>
        <Swiper
            examples='true'
        />
    </div>
</template>

