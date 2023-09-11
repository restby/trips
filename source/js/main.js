import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {editInputsPlaceholder} from './modules/form-validate/form-fields';
import {Burger} from './modules/header/burger';
import {playVideo} from './modules/video-player';
import {playAudio} from './modules/audio-player';
import {initHeroSlider} from './modules/initHeroSlider';
import {initToursSlider} from './modules/initToursSlider';
import {initEducationSlider} from './modules/initEducationSlider';
import {initReviewsSlider} from './modules/initReviewsSlider';
import {initFeaturesSlider} from './modules/initFeaturesSlider';
import {initGallerySlider} from './modules/initGallerySlider';
import {initMap} from './vendor/init-leaflet';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  const burger = new Burger();
  burger.init();
  initHeroSlider();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    editInputsPlaceholder();
    initToursSlider();
    playVideo();
    playAudio();
    initEducationSlider();
    initReviewsSlider();
    initFeaturesSlider();
    initGallerySlider();
    initMap();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
