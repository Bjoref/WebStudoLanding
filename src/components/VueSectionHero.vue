<script> 
import { printText } from '../js/functions/printText.js';
export default {
    data() {
        return {
            hText: "Слоган",
            pText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sit facilis ex debitis sed similique ullam, minus laborum eos maiores delectus!",
            printedText: "Tempore unde quod, dolores quam blanditiis iusto doloribus assumenda!",
            btnText: "Текст кнопки",
            limiterForFunction: 0,
        }
    },
    mounted () {
        while (this.limiterForFunction == 0) {
            printText(document.querySelector('.section-hero__text_printed'), this.printedText)
            this.limiterForFunction++
            console.log()
        }
    }
}

</script>

<template>
    <div class="section-hero__content section-hero__img">
        <h1 class="section-hero__title text-xxxl">
            {{ hText }}
        </h1>
        <p class="section-hero__text text-l mb-0">
            {{ pText }}
        </p>
        <p class="section-hero__text section-hero__text_printed text-l">
            {{ printedText }}
        </p>
        <button class="section-hero__button btn text-l">
            {{ btnText }}
        </button>
        <div class="section-hero__video-block">
            <video muted="muted" playsinline autoplay="autoplay" loop="loop" class="section-hero__video">
                <source src="../img/section-hero/section-hero__video_webm.webm" type="video/webm">
                <source src="../img/section-hero/section-hero__video_mp4.mp4" type="video/mp4">
            </video>
        </div>
    </div>
</template>

