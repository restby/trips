import Swiper from '../vendor/swiper';
import {isMobileDevice} from '../utils/is-mobile-device';

const initHeroSlider = () => {
  const heroSlider = document.querySelector('[data-hero__slider]');
  if (!heroSlider) {
    return null;
  }
  return new Swiper(heroSlider, {
    simulateTouch: false,
    watchOverflow: true,
    speed: 500,
    autoHeight: true,
    loop: true,
    breakpoints: {
      768: {
        loop: false,
      },
    },
    allowTouchMove: isMobileDevice(),
    pagination: {
      el: '.hero__slider-pagination',
      clickable: true,
    },
  });
};
export {initHeroSlider};
