import Swiper from '../vendor/swiper';
const initEducationSlider = () => {
  if (!document.querySelector('[data-education__slider]')) {
    return null;
  }

  const educationSliderElement = document.querySelector('[data-education__slider]');
  const educationSlider = new Swiper(educationSliderElement, {
    simulateTouch: false,
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
      767.5: {
        slidesPerView: 3,
        spaceBetween: 10,
        autoHeight: false,
      },
      1199.5: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
  return educationSlider;
};
export {initEducationSlider};
