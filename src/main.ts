import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/controller';
import 'swiper/scss/keyboard';
import 'swiper/scss/effect-fade';
import './assets/styles/main.scss';
import Swiper, { Navigation, Keyboard, EffectFade, Controller, A11y } from 'swiper';

const textSwiper = new Swiper("#slider-text", {
    modules: [EffectFade, A11y],
    allowTouchMove: false,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
});

const imageSwiper = new Swiper("#slider-image", {
    modules: [Navigation, Keyboard, Controller, A11y],
    resistanceRatio: 0,
    grabCursor: true,
    navigation: {
        nextEl: '#slider-image-next',
        prevEl: '#slider-image-prev',
        disabledClass: "-disabled",
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    controller: {
        control: textSwiper,
    },
    a11y: {
        notificationClass: "notification",
    }
});
