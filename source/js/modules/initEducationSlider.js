import Swiper from '../vendor/swiper';
const initEducationSlider = () => {
  const educationSlider = document.querySelector('[data-education__slider]');
  if (!educationSlider) {
    return null;
  }
  return new Swiper(educationSlider, {
    simulateTouch: false,
    grabCursor: false,
    watchOverflow: true,
    speed: 500,
    autoHeight: true,
    navigation: {
      nextEl: '.education__arrow--next',
      prevEl: '.education__arrow--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      767: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      1199: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
};
export {initEducationSlider};
