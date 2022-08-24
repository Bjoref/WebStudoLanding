<script setup>
import ClickableList from './UI/ClickableList.vue'

</script>
<script>

export default {
    data() {
        return {
            LinksContent: [
                {
                    link: '#',
                    text: 'Discord',
                    img: '/src/img/section-social/discord.svg'
                },
                {
                    link: '#',
                    text: 'Vkontakte',
                    img: '/src/img/section-social/vk.svg'
                },
                {
                    link: '#',
                    text: 'Telegram',
                    img: '/src/img/section-social/telegram.svg'
                },
                {
                    link: '#',
                    text: 'Instagram',
                    img: '/src/img/section-social/instagram.svg'
                },
            ],
        }
    }
}

</script>

<template>
      <div class="section-social__content">
        <div>
          <h2 class="section-social__title">
            Социальные сети
          </h2>
        </div>
        <ClickableList
          is-social = 'true'
          ul-class="section-social__nav-list"
          id="social"
          item-class="section-social__nav-item"
          link-class="section-social__nav-link"
          :links-content="this.LinksContent"
        />
      </div>
</template>