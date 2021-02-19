import {markerWidth, markerHeight, tokyoLat, tokyoLng, mapScale} from './constants-data.js'
import {createProfilesArray} from './create-profiles.js';
import {generateOffer} from './generate-offer.js';


let adForm = document.querySelector('.ad-form');
let adFieldsets = adForm.querySelectorAll('fieldset');
let filter = document.querySelector('.map__filters');
let mapFilters = filter.querySelectorAll('.map__filter')
let mapFeatures = filter.querySelector('.map__features');
let mapContainer = document.querySelector('.map__canvas');
let addressInput =  adForm.querySelector('#address');


let deactivateForm = (isDeactivate) => {
  if (isDeactivate) {
    adForm.classList.add('ad-form--disabled');
    adFieldsets.forEach((field) => {
      field.disabled = true;
    });

    mapFeatures.disabled = true;
    filter.classList.add('map__filters--disabled')
    mapFilters.forEach((field) => {
      field.disabled = true;
    });
  } else {
    adForm.classList.remove('ad-form--disabled');
    adFieldsets.forEach((field) => {
      field.disabled = false;
    });

    mapFeatures.disabled = false;
    filter.classList.remove('map__filters--disabled')
    mapFilters.forEach((field) => {
      field.disabled = false;
    });
  }
}

deactivateForm(true)

// eslint-disable-next-line no-undef
let map = L.map(mapContainer)
  .on('load', () => {
    deactivateForm(false)
  })
  .setView(
    {
      lat:  tokyoLat,
      lng: tokyoLng,
    }, mapScale);

// eslint-disable-next-line no-undef
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
// eslint-disable-next-line no-undef
let myIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [markerWidth, markerHeight],
  iconAnchor: [markerWidth/2 , markerHeight],
});

// eslint-disable-next-line no-undef
let marker = L.marker(
  {
    lat:  tokyoLat,
    lng: tokyoLng,
  },
  {
    icon: myIcon,
    draggable: true,
  },
).addTo(map);

let coordinates = marker.getLatLng();
let coordinateLat = Number(coordinates.lat.toFixed(5));
let coordinateLng = Number(coordinates.lng.toFixed(5));

addressInput.readOnly = true;
addressInput.value = `${coordinateLat}, ${coordinateLng}`


marker.on('move', (evt) => {
  let newCoordinates = evt.target.getLatLng();
  let newCoordinateLat = Number(newCoordinates.lat.toFixed(5));
  let newCoordinateLng = Number(newCoordinates.lng.toFixed(5));
  addressInput.value = `${newCoordinateLat}, ${newCoordinateLng}`
})

// eslint-disable-next-line no-undef
let profileIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [markerWidth, markerHeight],
  iconAnchor: [markerWidth/2 , markerHeight],
});

createProfilesArray().forEach((profile) => {
  let lat = profile.location.x;
  let lng = profile.location.y;
  // eslint-disable-next-line no-undef
  let profileMarker = L.marker({
    lat,
    lng,
  },
  {
    icon: profileIcon,
  },
  )

  profileMarker.addTo(map).bindPopup(generateOffer(profile))
})
