import Swiper from '../vendor/swiper';
const initToursSlider = () => {
  if (!document.querySelector('[data-tours__slider]')) {
    return null;
  }

  const toursSlider = document.querySelector('[data-tours__slider]');
  return new Swiper(toursSlider, {
    simulateTouch: false,
    grabCursor: false,
    watchOverflow: true,
    speed: 300,
    navigation: {
      nextEl: '.tours__arrow--next',
      prevEl: '.tours__arrow--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        autoHeight: true,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        autoHeight: false,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
};
export {initToursSlider};
