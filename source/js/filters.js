import {MAX_FILTER_PRICE,  MIN_FILTER_PRICE,  LOW_PRICE_LEVEL,  MIDDLE_PRICE_LEVEL,  HIGH_PRICE_LEVEL,  DEFAULT_FILTER_VALUE} from './constants-data.js'

let typeInput = document.querySelector('#housing-type');
let priceInput = document.querySelector('#housing-price');
let roomsInput = document.querySelector('#housing-rooms');
let guestInput = document.querySelector('#housing-guests');
let featuresCheckList = document.querySelector('#housing-features');

let setListener = (cb, listenerTarget) => {
  listenerTarget.addEventListener('change', () => {
    let markers = document.querySelectorAll('.leaflet-marker-icon:not(:first-of-type)');
    markers.forEach((marker) => {marker.remove()});

    let popup = document.querySelector('.leaflet-popup');
    if (popup) {
      popup.style.display = 'none';
    }

    cb();
  })
}

let filterTypes =  (item) => {
  return typeInput.value === item.offer.type || typeInput.value === DEFAULT_FILTER_VALUE;
}

let filterPrice = (item) => {
  let priceLevel = priceInput.value;
  switch (priceLevel) {
    case LOW_PRICE_LEVEL:
      return item.offer.price < MIN_FILTER_PRICE;
    case MIDDLE_PRICE_LEVEL:
      return item.offer.price >= MIN_FILTER_PRICE && item.offer.price < MAX_FILTER_PRICE;
    case HIGH_PRICE_LEVEL:
      return item.offer.price >= MAX_FILTER_PRICE;
    default:
      return true;
  }
}

let filterRooms = (item) => {
  return item.offer.rooms >= roomsInput.value || roomsInput.value === DEFAULT_FILTER_VALUE;
}

let filterGuest = (item) => {
  return item.offer.guests >= guestInput.value || guestInput.value === DEFAULT_FILTER_VALUE;
}

let filterFeatures = (item) => {
  let features = featuresCheckList.querySelectorAll('input:checked');
  let offerFeatures = item.offer.features;

  return offerFeatures.every.call(features,  (it) => {

    return item.offer.features.indexOf(it.value) !== -1;

  });
}

export {filterTypes, filterPrice, filterRooms, filterGuest, filterFeatures, setListener}
