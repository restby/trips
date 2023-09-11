import Swiper from '../vendor/swiper';
const initReviewsSlider = () => {
  const reviewsSlider = document.querySelector('[data-reviews__slider]');
  if (!reviewsSlider) {
    return null;
  }
  return new Swiper(reviewsSlider, {
    simulateTouch: false,
    grabCursor: false,
    watchOverflow: true,
    speed: 500,
    autoHeight: true,
    navigation: {
      nextEl: '.reviews__arrow--next',
      prevEl: '.reviews__arrow--prev',
    },
    slidesPerView: 'auto',
    breakpoints: {
      767: {
        spaceBetween: 30,
      },
      1199: {
        spaceBetween: 30,
      },
    },
  });
};
export {initReviewsSlider};
