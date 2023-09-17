import Swiper from '../vendor/swiper';
import {playAudio} from '../modules/audio-player';
import {playVideo} from '../modules/video-player';

const initHeroSlider = () => {
  if (!document.querySelector('[data-hero__slider]')) {
    return null;
  }
  const heroSliderElement = document.querySelector('[data-hero__slider]');

  const heroSlider = new Swiper(heroSliderElement, {
    simulateTouch: false,
    watchOverflow: true,
    speed: 300,
    autoHeight: true,
    loop: true,
    on: {
      slideChange: () => {
        if (document.querySelector('[data-id="audio"]').querySelector('iframe')) {
          document.querySelector('[data-id="audio"]').querySelector('iframe').remove();
          playAudio();
        }
        if (document.querySelector('[data-id="video"]').querySelector('iframe')) {
          document.querySelector('[data-id="video"]').querySelector('iframe').remove();
          playVideo();
        }
      },
    },
    slidesPerView: 1,
    pagination: {
      el: '.hero__slider-pagination',
      clickable: true,
    },
  });
  let duplicatedSlides = document.querySelectorAll('[class*="duplicate"]');
  duplicatedSlides.forEach((slide) => {
    slide.setAttribute('tabindex', '-1');
  });
  return heroSlider;
};
export {initHeroSlider};
