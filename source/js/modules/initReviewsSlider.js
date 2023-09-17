import Swiper from '../vendor/swiper';
const initReviewsSlider = () => {
  if (!document.querySelector('[data-reviews__slider]')) {
    return null;
  }

  const reviewsSliderElement = document.querySelector('[data-reviews__slider]');
  const reviewsSlider = new Swiper(reviewsSliderElement, {
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
      767.5: {
        spaceBetween: 10,
        autoHeight: false,
      },
      1199.5: {
        spaceBetween: 10,
      },
    },
  });
  return reviewsSlider;
};
export {initReviewsSlider};
