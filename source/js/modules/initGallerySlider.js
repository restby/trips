import Swiper from '../vendor/swiper';
const initGallerySlider = () => {
  if (!document.querySelector('[data-gallery__slider]')) {
    return null;
  }

  const gallerySlider = document.querySelector('[data-gallery__slider]');
  return new Swiper(gallerySlider, {
    simulateTouch: false,
    grabCursor: false,
    watchOverflow: true,
    speed: 300,
    navigation: {
      nextEl: '.gallery__arrow--next',
      prevEl: '.gallery__arrow--prev',
    },

    slidesPerView: 'auto',
    breakpoints: {
      320: {
        spaceBetween: 3,
      },

      767.5: {
        spaceBetween: 5,
      },

      1199.5: {
        spaceBetween: 5,
      },
    },
  });
};
export {initGallerySlider};
