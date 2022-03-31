import './assets/styles/main.scss';
import 'swiper/scss';
import Swiper, { Navigation, Keyboard } from 'swiper';

const imageSwiper = new Swiper("#slider-image", {
    modules: [Navigation, Keyboard],
    resistanceRatio: 0,
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
    allowTouchMove: false,
});

imageSwiper.on("slideChange", (swiper) => textSwiper.slideTo(swiper.activeIndex));