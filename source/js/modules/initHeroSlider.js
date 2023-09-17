import Swiper from '../vendor/swiper';
import {playAudio} from '../modules/audio-player';
import {playVideo} from '../modules/video-player';

const initHeroSlider = () => {
  if (!document.querySelector('[data-hero__slider]')) {
    return null;
  }
  const heroSliderElement = document.querySelector('[data-hero__slider]');

  const initActiveSlide = () => {
    if (document.querySelector('.swiper-slide-active')) {
      let activeSlide = document.querySelector('.swiper-slide-active');

      let allSlides = document.querySelectorAll('.hero-slide');
      allSlides.forEach((slide) => {
        // slide.removeAttribute('tabindex');
        // slide.setAttribute('tabindex', '-1');
        if (slide.querySelectorAll('a')) {
          slide.querySelectorAll('a').forEach((slideLink) => {
            slideLink.removeAttribute('tabindex');
            slideLink.setAttribute('tabindex', '-1');
          });
        }
        if (slide.querySelectorAll('button')) {
          slide.querySelectorAll('button').forEach((slideButton) => {
            slideButton.removeAttribute('tabindex');
            slideButton.setAttribute('tabindex', '-1');
          });
        }
      });

      // activeSlide.removeAttribute('tabindex');
      // activeSlide.setAttribute('tabindex', '0');

      if (activeSlide.querySelectorAll('a')) {
        let slideLinks = activeSlide.querySelectorAll('a');
        slideLinks.forEach((slideLink) => {
          slideLink.removeAttribute('tabindex');
          slideLink.setAttribute('tabindex', '0');
        });
      }

      if (activeSlide.querySelectorAll('button')) {
        let slideButtons = activeSlide.querySelectorAll('button');
        slideButtons.forEach((slideButton) => {
          slideButton.removeAttribute('tabindex');
          slideButton.setAttribute('tabindex', '0');
        });
      }
    }
  };

  const heroSlider = new Swiper(heroSliderElement, {
    simulateTouch: false,
    watchOverflow: true,
    speed: 300,
    autoHeight: true,
    loop: true,
    on: {
      init: () => {
        let duplicatedSlides = document.querySelectorAll('[class*="duplicate"]');
        duplicatedSlides.forEach((slide) => {
          slide.removeAttribute('tabindex');
          slide.setAttribute('tabindex', '-1');
        });
        initActiveSlide();
      },
      slideChange: () => {
        if (document.querySelector('[data-id="audio"]').querySelector('iframe')) {
          document.querySelector('[data-id="audio"]').querySelector('iframe').remove();
          playAudio();
        }
        if (document.querySelector('[data-id="video"]').querySelector('iframe')) {
          document.querySelector('[data-id="video"]').querySelector('iframe').remove();
          playVideo();
        }

        initActiveSlide();

        if (document.querySelector('.swiper-slide-active').querySelector('a')) {
          let slideLink = document.querySelector('.swiper-slide-active').querySelector('a');
          slideLink.focus();
        }
      },
      slideChangeTransitionStart: () => {
        initActiveSlide();
      },
    },
    slidesPerView: 1,
    pagination: {
      el: '.hero__slider-pagination',
      clickable: true,
    },
  });
  // let swiperActiveSlide = document.querySelector('.swiper-slide-active');
  // swiperActiveSlide.removeAttribute('tabindex');
  // swiperActiveSlide.setAttribute('tabindex', '0');

  return heroSlider;
};
export {initHeroSlider};
