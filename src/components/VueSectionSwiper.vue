<script setup>
import Swiper from './UI/Swiper.vue'
</script>
<script>

export default {
    data() {
        return {
            hText: "Наши сотрудники:",
            pText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sit facilis ex debitis sed similique ullam, minus laborum eos maiores delectus! Tempore unde quod, dolores quam blanditiis iusto doloribus assumenda!",
            employeesData: {
                OlegH: {
                    name: 'Олег Харин',
                    role: 'Project manager',
                    img: '/src/img/section-employees/OlegH.png'
                },
                Den: {
                    name: 'Денис Багин',
                    role: 'Backend developer',
                    img: '/src/img/section-employees/Denis.jpg'
                },
                OlegM: {
                    name: 'Олег Макаров',
                    role: 'Frontend developer',
                    img: '/src/img/section-employees/OlegM.png'
                },
                Natya: {
                    name: 'Анастасия Соболева',
                    role: 'Backend developer',
                    img: '/src/img/section-employees/Nastya.png'
                },
                Lesya: {
                    name: 'Леся Багина',
                    role: 'Designer',
                    img: '/src/img/section-employees/Lesya.jpg'
                }
            }
        }
    },
    props: [
        'slidesPerView'
    ]
}

</script>

<template>
    <Swiper 
        :slides-per-view="slidesPerView"
        employees="true"
        :employeesData="employeesData"
    />
</template>

