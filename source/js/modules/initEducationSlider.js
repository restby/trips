import Swiper from '../vendor/swiper';
const initEducationSlider = () => {
  if (!document.querySelector('[data-education__slider]')) {
    return null;
  }

  const educationSlider = document.querySelector('[data-education__slider]');
  return new Swiper(educationSlider, {
    simulateTouch: false,
    grabCursor: false,
    watchOverflow: true,
    speed: 300,
    navigation: {
      nextEl: '.education__arrow--next',
      prevEl: '.education__arrow--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        autoHeight: true,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        autoHeight: false,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
};
export {initEducationSlider};
