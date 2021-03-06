/* global L:readonly */
import {MARKER_WIDTH, MARKER_HEIGHT, TOKYO_LAT, TOKYO_LNG, MAP_SCALE} from './constants-data.js'
import {generateOffer} from './generate-offer.js';
import {filterTypes, filterPrice, filterRooms, filterGuest, filterFeatures} from './filters.js'

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

let map = L.map(mapContainer)
  .on('load', () => {
    deactivateForm(false)
  })
  .setView(
    {
      lat:  TOKYO_LAT,
      lng: TOKYO_LNG,
    }, MAP_SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

let myIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [MARKER_WIDTH, MARKER_HEIGHT],
  iconAnchor: [MARKER_WIDTH/2 , MARKER_HEIGHT],
});

let marker = L.marker(
  {
    lat:  TOKYO_LAT,
    lng: TOKYO_LNG,
  },
  {
    icon: myIcon,
    draggable: true,
  },
).addTo(map);

export {marker, map}

let coordinates = marker.getLatLng();
let coordinateLat = Number(coordinates.lat.toFixed(5));
let coordinateLng = Number(coordinates.lng.toFixed(5));

addressInput.readOnly = true;
addressInput.value = `${coordinateLat}, ${coordinateLng}`


marker.on('move', (evt) => {
  let newCoordinates = evt.target.getLatLng();
  let newCoordinateLat = Number(newCoordinates.lat.toFixed(5));
  let newCoordinateLng = Number(newCoordinates.lng.toFixed(5));
  addressInput.value = `${newCoordinateLat}, ${newCoordinateLng}`;
})

let profileIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [MARKER_WIDTH, MARKER_HEIGHT],
  iconAnchor: [MARKER_WIDTH/2 , MARKER_HEIGHT],
});

let typeInput = document.querySelector('#housing-type');
let priceInput = document.querySelector('#housing-price');
let roomsInput = document.querySelector('#housing-rooms');
let guestInput = document.querySelector('#housing-guests');
let featuresCheckList = document.querySelector('#housing-features');

let addOffersToMap = (array) => {

  let newArray = array
    .slice()
    .filter(filterTypes)
    .filter(filterPrice)
    .filter(filterRooms)
    .filter(filterGuest)
    .filter(filterFeatures)

  newArray
    .slice(0, 10)
    .forEach((profile) => {
      let lat = profile.location.lat;
      let lng = profile.location.lng;
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
}

export {addOffersToMap, typeInput, priceInput, roomsInput, guestInput, featuresCheckList}

