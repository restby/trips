const mapContainer = document.querySelector('.map__container');
const mapImgContainer = document.querySelector('.map__img-container');

const initMap = () => {
  if (mapContainer) {
    mapImgContainer.classList.add('map__img-container--hide');

    const map = L.map('map', { scrollWheelZoom: false })
      .setView({
        lat: 55.774836,
        lng: 37.632664,
      }, 15);
    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      },
    ).addTo(map);
    const marker = L.marker(
      {
        lat: 55.774836,
        lng: 37.632664,
      }
    );
    const mainPinIcon = L.icon({
      iconUrl: './../../img/svg/pin-filled.svg',
      iconSize: [42, 42],
      iconAnchor: [21, 42],
    });

    const mainPinMarker = L.marker(
      {
        lat: 55.774836,
        lng: 37.632664,
      },
      {
        icon: mainPinIcon,
      },
    );

    mainPinMarker.addTo(map);
  }
}

export { initMap }
