import './assets/styles/main.scss';
import 'swiper/scss';
import 'swiper/scss/keyboard';
import 'swiper/scss/effect-fade';
import Swiper, { Navigation, Keyboard, EffectFade } from 'swiper';

const imageSwiper = new Swiper("#slider-image", {
    modules: [Navigation, Keyboard],
    resistanceRatio: 0,
    grabCursor: true,
    navigation: {
        nextEl: '#slider-image-next',
        prevEl: '#slider-image-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});

const textSwiper = new Swiper("#slider-text", {
    modules: [EffectFade],
    allowTouchMove: false,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
});

imageSwiper.on("slideChange", (swiper) => textSwiper.slideTo(swiper.activeIndex));