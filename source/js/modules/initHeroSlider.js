import Swiper from '../vendor/swiper';

const initHeroSlider = () => {
  if (!document.querySelector('[data-hero__slider]')) {
    return null;
  }
  const heroSlider = document.querySelector('[data-hero__slider]');

  const pauseVideoAndReloadIframe = () => {
    if (heroSlider.querySelector('iframe')) {

      let iframe = heroSlider.querySelector('iframe');

      const removeAutoplayParameter = (url) => {
        const parts = url.split('?');
        if (parts.length > 1) {
          const params = parts[1].split('&');
          const filteredParams = params.filter(function (param) {
            return param !== 'autoplay=1';
          });
          return parts[0] + (filteredParams.length > 0 ? '?' + filteredParams.join('&') : '');
        }
        return url;
      };

      const videoUrl = iframe.src;
      const cleanUrl = removeAutoplayParameter(videoUrl);

      iframe.src = cleanUrl;
    }
  };

  return new Swiper(heroSlider, {
    simulateTouch: false,
    watchOverflow: true,
    speed: 300,
    autoHeight: true,
    on: {
      slideChange: () => {
        if (heroSlider.querySelector('iframe')) {
          pauseVideoAndReloadIframe();
        }
      },
    },
    // loop: true,
    breakpoints: {
      768: {
        loop: false,
      },
      1200: {
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
