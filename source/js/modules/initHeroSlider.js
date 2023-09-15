import Swiper from '../vendor/swiper';
import {playAudio} from '../modules/audio-player';
import {playVideo} from '../modules/video-player';

const initHeroSlider = () => {
  if (!document.querySelector('[data-hero__slider]')) {
    return null;
  }
  const heroSlider = document.querySelector('[data-hero__slider]');

  return new Swiper(heroSlider, {
    simulateTouch: false,
    watchOverflow: true,
    speed: 300,
    autoHeight: true,
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
    // loop: true,
    breakpoints: {
      767.5: {
        loop: false,
      },
      1199.5: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: '.hero__slider-pagination',
      clickable: true,
    },
  });
};
export {initHeroSlider};
