import Swiper from '../vendor/swiper';

const initHeroSlider = () => {
  const heroSlider = document.querySelector('[data-hero__slider]');
  if (!heroSlider) {
    return null;
  }
  return new Swiper(heroSlider, {
    simulateTouch: false,
    watchOverflow: true,
    speed: 300,
    // autoHeight: true,
    loop: true,
    breakpoints: {
      768: {
        loop: false,
      },
    },
    pagination: {
      el: '.hero__slider-pagination',
      clickable: true,
    },
  });
};
export {initHeroSlider};
