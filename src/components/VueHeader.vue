<template>
    <div class="header__content">
        <a href="index.html" class="header__link">
            <img src="../img/logo/logo-img.svg" alt="Логотип" class="header__logo-img">
        </a>
        <div class="header__right-content">
            <nav class="header__nav">
                <ul class="header__nav-list">
                    <li @mouseenter="changeCaretColorEnter" @mouseleave="changeCaretColorOut" :class="link.select" class="header__nav-item" v-for="link in links">
                        <a v-if="!link.select" class="header__nav-link text-m" :href="link.href">
                            {{ link.text }}
                        </a>
                        <button v-if="link.select" class="header__nav-button text-m">
                            {{ link.text }}
                        </button>
                        <img class="header__arrow-img" v-if="link.select" src="../img/header/icons/caret-down_white.svg" alt="arrow">
                        <div v-if="link.select" class="header__select-block">
                            <ul class="header__select-list">
                                <li v-for="item in list">
                                    <a class="header__select-link" :href="item.href">
                                        {{ item.text }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <ul class="header__contact-list">
                <li @mouseenter="changeCaretColorEnter" @mouseleave="changeCaretColorOut"  class="header__contact-item" v-for="contact in contacts">
                    <img class="header__mobile-img header__contact-icon" v-if="contact.mobile" src="../img/header/icons/telephone_white.svg" alt="mobile icon">
                    <img class="header__mail-img header__contact-icon" v-if="contact.mail" src="../img/header/icons/envelope_white.svg" alt="mail icon">
                    <a class="header__contact-link text-s" :href="contact.href">
                        {{ contact.text }}
                    </a>
                </li>
            </ul>

        </div>
    </div>
</template>

<script> 
export default {
    data() {
        return {
            links: {
                test1: {
                    text: 'Тест1',
                    href: '#'
                },
                test2: {
                    text: 'Тест2',
                    href: '#'
                },
                social: {
                    text: 'Социальные сети',
                    href: '#social'
                },
                test: {
                    text: 'Селектор',
                    select: 'selectLink'
                },
            },
            contacts: {
                mobile: {
                    mobile: true,
                    text: '+7999999999',
                    href: 'tel:+7999999999'
                },
                mail: {
                    mail: true,
                    text: 'test@yandex.ru',
                    href: 'mailto: test@yandex.ru'
                }
            },
            list: {
                item: {
                    text: 'Какой-то текст',
                    href: '#'
                },
                itemOne: {
                    text: 'Какой-то текст',
                    href: '#'
                },
                itemTwo: {
                    text: 'Какой-то текст',
                    href: '#'
                },
                itemThree: {
                    text: 'Какой-то текст',
                    href: '#'
                },
            }
        }
    },
    methods: {
        changeCaretColorEnter: function(event) {
            let parent = event.target; 
            let childImg; 
            let childText;

            if(parent.querySelector('.header__arrow-img')) {
                childImg = parent.querySelector('.header__arrow-img');
                childImg.setAttribute('src', 'src/img/header/icons/caret-down_light-accent.svg');
                childText = parent.querySelector('.header__nav-button');
                childText.classList.add('selector-button-hover');
            };

            if(parent.querySelector('.header__contact-icon')) {
                childText = parent.querySelector('.header__contact-link');
                childText.classList.add('link-hover')
                childImg = parent.querySelector('.header__contact-icon');

                if(childImg.classList.contains('header__mobile-img')) {
                    childImg.setAttribute('src', 'src/img/header/icons/telephone_light-accent.svg'); 
                };

                if(childImg.classList.contains('header__mail-img')) {
                    childImg.setAttribute('src', 'src/img/header/icons/envelope_light-accent.svg');
                };
            };
        },
        changeCaretColorOut: function(event) {
            let parent = event.target;
            let childImg;
            let childText;
            
            if(parent.querySelector('.header__arrow-img')) {
                childImg = parent.querySelector('.header__arrow-img');
                childText = parent.querySelector('.header__nav-button');
                childText.classList.remove('selector-button-hover');

                childImg.setAttribute('src', 'src/img/header/icons/caret-down_white.svg');
            };
            if(parent.querySelector('.header__contact-icon')) {
                childText = parent.querySelector('.header__contact-link');
                childText.classList.remove('link-hover');

                childImg = parent.querySelector('.header__contact-icon');
                if(childImg.classList.contains('header__mobile-img')) {
                    childImg.setAttribute('src', 'src/img/header/icons/telephone_white.svg'); 
                };

                if(childImg.classList.contains('header__mail-img')) {
                    childImg.setAttribute('src', 'src/img/header/icons/envelope_white.svg');
                };
            };
        }
    }

}

</script>

<style scoped>
.selectLink:hover .header__arrow-img {
    transform: rotate(180deg)
}

.selectLink:hover .header__select-block {
    display: block;
}

.selectLink .header__arrow-img {
    transition: all .2s ease-in-out;
}

</style>
