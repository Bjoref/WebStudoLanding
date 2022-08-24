<script setup>
</script>
<script>

export default {
    data() {
        return {
            links: [
                {
                    link: '#',
                    text: 'Какая-то ссылка'
                },
                {
                    link: '#',
                    text: 'Какая-то ссылка'
                },
                {
                    link: '#',
                    text: 'Какая-то ссылка'
                },
                {
                    link: '#',
                    text: 'Какая-то ссылка'
                },
                {
                    link: '#',
                    text: 'Какая-то ссылка'
                },
            ]
        }
    }
}

</script>

<template>
    <div class="footer__content d-flex">
        <ul>
            <li v-for="link in links">
                <a :href="link.link">
                    {{ link.text }}
                </a>
            </li>
        </ul>
        <p>Пользовательское соглашение</p>
    </div>
</template>

<style scoped>
    a,
    p {
        color: var(--white-color);
    }
</style> 