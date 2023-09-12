
import {map as createMap, tileLayer as createTitleLayers, icon as createIcon, marker as createMarker} from '../vendor/leaflet';
const mapContainer = document.querySelector('.map__container');
const mapImgContainer = document.querySelector('.map__img-container');
const initMap = () => {
  if (mapContainer) {
    mapImgContainer.classList.add('map__img-container--hide');

    const coordinate = [55.774836, 37.632664];
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const markerText = `
<p>г. Москва, пр-т Мира, д. 14, офис 101</p>
<p>Номер телефона: <a href="tel:89837454545">8 983 745 45 45</a></p>
`;

    const map = createMap('map', {
      center: coordinate,
      zoom: 16,
      scrollWheelZoom: false,
    });

    const icon = createIcon({
      iconUrl: './img/svg/pin-filled.svg',
      iconSize: [42, 42],
      iconAnchor: [21, 42],
    });

    createTitleLayers(url).addTo(map);
    createMarker(coordinate, {icon}).bindPopup(markerText).addTo(map);
  }
};

export {initMap};
