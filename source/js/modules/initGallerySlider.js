import Swiper from '../vendor/swiper';
const initGallerySlider = () => {
  if (!document.querySelector('[data-gallery__slider]')) {
    return null;
  }

  const gallerySliderElement = document.querySelector('[data-gallery__slider]');
  const gallerySlider = new Swiper(gallerySliderElement, {
    simulateTouch: false,
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
  return gallerySlider;
};
export {initGallerySlider};
