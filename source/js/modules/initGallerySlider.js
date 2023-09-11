import Swiper from '../vendor/swiper';
const initGallerySlider = () => {
  const gallerySlider = document.querySelector('[data-gallery__slider]');
  if (!gallerySlider) {
    return null;
  }
  return new Swiper(gallerySlider, {
    simulateTouch: false,
    grabCursor: false,
    watchOverflow: true,
    speed: 500,
    navigation: {
      nextEl: '.gallery__arrow--next',
      prevEl: '.gallery__arrow--prev',
    },

    slidesPerView: 'auto',
    breakpoints: {
      320: {
        spaceBetween: 3,
      },

      767: {
        spaceBetween: 5,
      },

      1199: {
        spaceBetween: 5,
      },
    },
  });
};
export {initGallerySlider};
