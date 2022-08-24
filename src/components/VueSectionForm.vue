<script setup>
</script>
<script>

export default {
    data() {
        return {
            
        }
    },
    methods: {
      labelUp: function(event) {
        let parent;
        if(event.target.classList.contains('section-form__placeholder-container')) {
          parent = event.target;
          parent.classList.add('active-label');
        }
        if(event.target.classList.contains('section-form__input')) {
          parent = event.target.closest('.section-form__placeholder-container');
          parent.classList.add('active-label');
        }
      },
      labelDown: function(event) {
        let parent;
        parent = event.target.closest('.section-form__placeholder-container');
        parent.classList.remove('active-label');
      }

    }
}

</script>

<template>
  <div class="section-form__content">
    <form class="section-form__form d-flex" action="https://jsonplaceholder.typicode.com/posts" method="POST">
        <h2 class="section-form__title mb-2">
          Оставить заявку
        </h2>
        <div @click="labelUp" class="section-form__placeholder-container d-flex">
          <label  class="section-form__label" for="fullname">Фамилия, имя и отчество*</label>
          <input @blur="labelDown" @focusout="labelDown" class="section-form__input mb-2" type="text" placeholder=" " name="fullname" required id="fullname"/>
        </div>
        <div @click="labelUp"  class="section-form__placeholder-container d-flex">
          <label  class="section-form__label" for="mail">E-mail*</label>
          <input @blur="labelDown" @focusout="labelDown" class="section-form__input mb-2" type="email" name="email" placeholder=" " required id="mail"/>
        </div>
        <div class="section-form__form-bottom">
          <button  type="submit" class="btn section-form__button mb-1">
            Отправить данные
          </button>
          <div tabindex="1000000" class="section-form__checkbox-form">
            <input aria-label="Согласен на обработку данных, обязательный пункт" class="section-form__checkbox" type="checkbox" required id="check">
            <label class="section-form__checkbox-text" for="check">Согласен на обработку данных</label>
          </div>
        </div>
    </form>
  </div>
</template>

<style>
.section-form__label {
  transition: transform 150ms ease-out, font-size 150ms ease-out;
}

.active-label .section-form__label {
  transform: translateY(-87%);
}

</style> 