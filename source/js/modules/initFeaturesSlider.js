import Swiper from '../vendor/swiper';
const createFeaturesSlider = () => {
  const featuresSlider = document.querySelector('[data-features__slider]');
  if (featuresSlider) {
    return new Swiper(featuresSlider, {
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      speed: 500,
      autoHeight: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: '.features__arrow--next',
        prevEl: '.features__arrow--prev',
      },
      spaceBetween: 30,
      initialSlide: 2,
    });
  }
  return null;
};
const initFeaturesSlider = () => {
  let swiper = null;
  const isValid = () => {
    const desktopWidth = window.matchMedia('(min-width: 1199px)');
    return desktopWidth.matches;
  };

  if (isValid()) {
    swiper = createFeaturesSlider();
  }

  window.addEventListener('resize', () => {
    if (isValid()) {
      if (!swiper) {
        swiper = createFeaturesSlider();
      }
    } else {
      if (swiper) {
        swiper.destroy();
        swiper = null;
      }
    }
  });
};
export {initFeaturesSlider};
