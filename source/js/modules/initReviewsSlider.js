import Swiper from '../vendor/swiper';
const initReviewsSlider = () => {
  if (!document.querySelector('[data-reviews__slider]')) {
    return null;
  }

  const reviewsSliderElement = document.querySelector('[data-reviews__slider]');
  const reviewsSlider = new Swiper(reviewsSliderElement, {
    simulateTouch: false,
    speed: 300,
    spaceBetween: 10,
    navigation: {
      nextEl: '.reviews__arrow--next',
      prevEl: '.reviews__arrow--prev',
    },
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        autoHeight: true,
      },
      767.5: {
        autoHeight: false,
      },
    },
  });
  return reviewsSlider;
};
export {initReviewsSlider};
