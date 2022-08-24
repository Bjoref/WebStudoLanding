<template>
  <div>
    <swiper
      v-if="examples"
      :slides-per-view="slidesPerView ? slidesPerView : 3"
      :space-between="20"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :autoplay='{
          "delay": 2500,
          "disableOnInteraction": false
      }'
    >
      <swiper-slide v-for="slide in slides">
          <a class="slide-link">
              <img class="slide-img" :src="slide.img"/>
          </a>
      </swiper-slide>
  
    </swiper>
    <swiper
      v-if="employees"
      :slides-per-view="slidesPerView ? slidesPerView : 3"
      :space-between="20"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      navigation
      :pagination="{ clickable: true }"
      :autoplay='{
          "delay": 5000,
          "disableOnInteraction": false
      }'

    >
      <swiper-slide v-for="employee in employeesData">
        <div class="section-employees__main">
          <h2 class="section_employees__title text-xxl"> 
            Наши сотрудники
          </h2>
          <div class="section-employees__content d-flex">
            <div class="seciton-employees__left-content">
              <h3 class="section-employess__title">
                {{ employee.name }}
              </h3>
              <p class="seciton-employees__role">
                {{ employee.role }}
              </p>
            </div>
            <div class="seciton-employees__right-content">
              <img class="seciton-employees__slide-img" :src="employee.img"/>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <swiper
      v-if="partners"
      :slides-per-view="slidesPerView ? slidesPerView : 3"
      :space-between="100"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="partner in partnersData">
        <div class="section-partners__main">
          <img class="section-partners__slide-img" :src="partner.img"/>
        </div>
      </swiper-slide>  
    </swiper>
          
  </div>
</template>
<script>
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { Swiper, SwiperSlide } from 'swiper/vue';

    import SwiperCore, {
    Autoplay,Pagination,Navigation
    } from 'swiper/core';

    SwiperCore.use([Autoplay,Pagination,Navigation]);
    import 'swiper/css';

  export default {
    data () {
        return {
            slides: {
                slideOne: {
                    img: '/src/img/section-swiper/swiper/swiper__img-one.png'
                },
                slideTwo: {
                    img: '/src/img/section-swiper/swiper/swiper__img-two.png'
                },
                slideThree: {
                    img: '/src/img/section-swiper/swiper/swiper__img-three.png'
                },
                slideFour: {
                    img: '/src/img/section-swiper/swiper/swiper__img-four.png'
                },
                slideFive: {
                    img: '/src/img/section-swiper/swiper/swiper__img-five.png'
                }
            }

        }
    },
    props: [
      'examples',
      'slidesPerView',
      'employees',
      'employeesData',
      'partners',
      'partnersData',
    ],
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {

      };
      const onSlideChange = () => {

      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>

<style>
.slide-img {
    width: 100%;
    height: 300px;
}

.section-partners__swiper .swiper-slide {
    max-width: fit-content;
}

.section-partners__swiper .swiper-wrapper {
    justify-content: space-between;
}
</style>