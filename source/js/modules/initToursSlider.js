import Swiper from '../vendor/swiper';
const initToursSlider = () => {
  const toursSlider = document.querySelector('[data-tours__slider]');
  if (!toursSlider) {
    return null;
  }
  return new Swiper(toursSlider, {
    simulateTouch: false,
    grabCursor: false,
    watchOverflow: true,
    speed: 500,
    // autoHeight: true,
    navigation: {
      nextEl: '.tours__arrow--next',
      prevEl: '.tours__arrow--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      767: {
        slidesPerView: 2,
        spaceBetween: 18,
      },

      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
};
export {initToursSlider};
