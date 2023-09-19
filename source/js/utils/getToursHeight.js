const getToursHeight = () => {
  if (document.querySelector('[data-header-element]')) {
    const toursSidesContent = document.querySelectorAll('[data-tours-slide__content]');

    let maxHeight = 0;
    const setHeight = (elements) => {
      elements.forEach((toursSideContent) => {
        const elementHeight = toursSideContent.offsetHeight;
        if (elementHeight > maxHeight) {
          maxHeight = elementHeight;
        }
        toursSideContent.style.marginTop = `-${maxHeight}px`;
      });
    };
    setHeight(toursSidesContent);
    console.log('Максимальная высота элементов: ' + maxHeight);

    // const observer = new MutationObserver(setHeight);
    // observer.observe(toursSidesContent, {
    //   childList: true,
    //   subtree: true,
    // });

    // setHeight();

    // window.addEventListener('resize', () => {
    //   setHeight();
    // });
  }
  return null;
};

export {getToursHeight};
