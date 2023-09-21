import Swiper from '../vendor/swiper';
const initToursSlider = () => {
  if (!document.querySelector('[data-tours__slider]')) {
    return null;
  }

  const toursSliderElement = document.querySelector('[data-tours__slider]');
  const toursSlider = new Swiper(toursSliderElement, {
    simulateTouch: false,
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

      767.5: {
        slidesPerView: 2,
        spaceBetween: 18,
        autoHeight: false,
      },

      1199.5: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoHeight: false,
      },
    },
  });
  return toursSlider;
};
export {initToursSlider};
