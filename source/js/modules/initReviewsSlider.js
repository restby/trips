import Swiper from '../vendor/swiper';
const initReviewsSlider = () => {
  if (!document.querySelector('[data-reviews__slider]')) {
    return null;
  }

  const reviewsSlider = document.querySelector('[data-reviews__slider]');
  return new Swiper(reviewsSlider, {
    simulateTouch: false,
    grabCursor: false,
    watchOverflow: true,
    speed: 300,
    navigation: {
      nextEl: '.reviews__arrow--next',
      prevEl: '.reviews__arrow--prev',
    },
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        spaceBetween: 10,
        autoHeight: true,
      },
      768: {
        spaceBetween: 10,
        autoHeight: false,
      },
      1200: {
        spaceBetween: 10,
      },
    },
  });
};
export {initReviewsSlider};
