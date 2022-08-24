<script setup>
import Swiper from './UI/Swiper.vue'
</script>
<script>
export default {
    data() {
        return {
            hText: "Наши партнёры",
            partnersData: [
                { img: '/src/img/section-partners/citistreet.svg' },
                { img: '/src/img/section-partners/red-star-fc-logo.svg' },
                { img: '/src/img/section-partners/google.svg' },
                { img: '/src/img/section-partners/indus-international-1.svg' },
                { img: '/src/img/section-partners/ancient-order-of-hibernians-in-america-77630.svg' },
                { img: '/src/img/section-partners/kif-montage.svg' },
            ]
        }
    },
    props: [
        'slidesPerView'
    ]
}

</script>

<template>
    <div class="section-partners__content">
        <h2>
            {{ hText }}
        </h2>
        <div class="section-partners__swiper">
            <Swiper 
                :slides-per-view="slidesPerView"
                partners="true"
                :partnersData="partnersData"
            />
        </div>

    </div>
</template>

