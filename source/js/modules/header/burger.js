import {ScrollLock} from './scroll-lock';
import {FocusLock} from './focus-lock';

export class Burger {
  constructor() {
    this._header = document.querySelector('[data-header]');
    this._burger = document.querySelector('[data-burger]');
    this._navHeader = document.querySelector('[data-nav-header]');
    this.__overlay = document.querySelector('[data-overlay]');
    this._scrollLock = new ScrollLock();
    this._focusLock = new FocusLock();
    this._isMenuOpen = false;

    this._onBurgerClick = this._onBurgerClick.bind(this);
    this._onDocumentKeydown = this._onDocumentKeydown.bind(this);
    this._onDocumentClick = this._onDocumentClick.bind(this);
  }

  init() {
    if (!this._burger) {
      return;
    }

    this._burger.addEventListener('click', this._onBurgerClick);
    this.__overlay.addEventListener('click', () =>{
      this._closeMenu();
    });
  }

  _openMenu() {
    this._isMenuOpen = true;
    this._header.classList.add('is-open');
    this.__overlay.style.opacity = '1';
    this.__overlay.style.zIndex = '1';
    this._navHeader.style.top = `${this._header.offsetHeight}px`;
    this._scrollLock.disableScrolling();
    document.addEventListener('keydown', this._onDocumentKeydown);
    document.querySelector('[data-close-menu]').classList.toggle('wrapper__overlay--hide');
    document.addEventListener('click', this._onDocumentClick);
    this._focusLock.lock('[data-header]');
    if (window.ls) {
      window.ls.stop();
    }
  }

  _closeMenu() {
    this._isMenuOpen = false;
    this._header.classList.remove('is-open');
    this.__overlay.style.opacity = '0';
    this.__overlay.style.zIndex = '-1';
    this._scrollLock.enableScrolling();
    this._focusLock.unlock('[data-header]');
    document.removeEventListener('keydown', this._onDocumentKeydown);
    document.removeEventListener('click', this._onDocumentClick);
    document.querySelector('[data-close-menu]').classList.toggle('wrapper__overlay--hide');
    if (window.ls) {
      window.ls.start();
    }
  }

  _onBurgerClick() {
    if (this._isMenuOpen) {
      this._closeMenu();
    } else {
      this._openMenu();
    }
  }

  _onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      this._closeMenu();
    }
  }

  // _onDocumentClick(evt) {
  //   if (evt.target.hasAttribute('data-close-menu')) {
  //     this._closeMenu();
  //   }
  // }

  _onDocumentClick(evt) {
    if (evt.target.hasAttribute('data-close-menu')) {
      this._closeMenu();
    }
    if (this._isMenuOpen) {
      const closeMenuButton = evt.target.closest('[data-close-menu]');
      const linkMenuButton = evt.target.closest('[data-link-menu]');

      if (closeMenuButton || linkMenuButton) {
        this._closeMenu();
      }
    }
  }
}
