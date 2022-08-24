<script setup>
import VueHeader from './components/VueHeader.vue'
import VueSectionHero from './components/VueSectionHero.vue'
import VueSectionSwiper from './components/VueSectionSwiper.vue'
import VueSectionExample from './components/VueSectionExample.vue'
import VueSectionPartners from './components/VueSectionPartners.vue'
import VueSectionForm from './components/VueSectionForm.vue'
import VueFooter from './components/VueFooter.vue'
import VueSectionSocial from './components/VueSectionSocial.vue'


</script>
<script> 
export default {
    data() {
        return {
            LinksContent: [
                'Текст_1',
                'Текст_2',
                'Текст_3',
                'Текст_4',
            ],
            haveExample: true
        }
    }
}

</script>

<template>
  <header class="header">
    <div class="container header__container">
      <VueHeader/>
    </div>
  </header>

  <section class="section-hero">
    <div class="container section-hero__container">
      <VueSectionHero/>
    </div>
  </section>

  <section class="section-employees">
    <div class="container section-employees__container">
      <VueSectionSwiper 
        :slides-per-view="1"
      />
    </div>
  </section>

  <section v-if="haveExample" class="section-example">
    <div class="container section-example__container">
      <VueSectionExample/>
    </div>
  </section>

  <section class="section-partners">
    <div class="container section-partners__container">
      <VueSectionPartners
        slides-per-view="auto"
      />
    </div>
  </section>

  <section class="section-form">
    <div class="container section-form__container">
      <VueSectionForm/>
    </div>
  </section>

  <footer class="footer">
    <div class="container footer__container">
      <VueSectionSocial/>
      <VueFooter/>
    </div>
  </footer>
</template>

<style scoped>
</style>
