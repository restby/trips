const playAudio = () => {
  if (document.querySelector('[data-id="audio"]')) {
    const audioPlayer = document.querySelector('[data-id="audio"]');

    const audioButton = audioPlayer.querySelector('[data-audio__play]');

    const iframe = `<iframe frameborder="0" style="border:none;width:340px;height:220px;" width="340" height="220" src="${audioPlayer.dataset.src}">Слушайте <a href='https://music.yandex.ru/album/25474374/track/112912322'>001. Конец фронтенда, одинаковые фреймворки и логические свойства</a> на Яндекс Музыке</iframe>`;

    audioButton.addEventListener('click', () => {

      audioPlayer.insertAdjacentHTML('beforeend', iframe);

    }, {once: true});
  }
  return null;
};

export {playAudio};
