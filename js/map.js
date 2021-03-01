import {markerWidth, markerHeight, tokyoLat, tokyoLng, mapScale} from './constants-data.js'
import {generateOffer} from './generate-offer.js';
import {getData} from './data.js';


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

// eslint-disable-next-line no-undef
let profileIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [markerWidth, markerHeight],
  iconAnchor: [markerWidth/2 , markerHeight],
});

let typeInput = document.querySelector('#housing-type');
let priceInput = document.querySelector('#housing-price');
let roomsInput = document.querySelector('#housing-rooms');
let guestInput = document.querySelector('#housing-guests');
let featuresCheckList = document.querySelector('#housing-features');

let setTypes = (cb) => {
  typeInput.addEventListener('change', () => {
    let markers = document.querySelectorAll('.leaflet-marker-icon:not(:first-of-type)')
    markers.forEach((marker) => {marker.remove()})
    cb()
  })
}

let setPrice = (cb) => {
  priceInput.addEventListener('change', () => {
    let markers = document.querySelectorAll('.leaflet-marker-icon:not(:first-of-type)')
    markers.forEach((marker) => {marker.remove()})
    cb()
  })
}

let setRooms = (cb) => {
  roomsInput.addEventListener('change', () => {
    let markers = document.querySelectorAll('.leaflet-marker-icon:not(:first-of-type)')
    markers.forEach((marker) => {marker.remove()})
    cb()
  })
}

let setGuest = (cb) => {
  guestInput.addEventListener('change', () => {
    let markers = document.querySelectorAll('.leaflet-marker-icon:not(:first-of-type)')
    markers.forEach((marker) => {marker.remove()})
    cb()
  })
}

let setFeatures = () => {
  featuresCheckList.addEventListener('click', (evt) => {
    if (evt.target.checked === true) {console.log(evt.target.value)}

  } )
}
setFeatures()
let filterTypes = (item) => {
  let type = typeInput.value;
  let same = false;

  if (item.offer.type === type) {
    same = true
  }

  if (type === 'any') {
    same = true;
  }

  return same
}

let filterPrice = (item) => {
  let priceLevel = priceInput.value;
  let same = false;

  if (priceLevel === 'low' && item.offer.price < 10000) {
    same = true;
  }

  if (priceLevel === 'middle' && item.offer.price > 10000 && item.offer.price < 50000) {
    same = true;
  }

  if (priceLevel === 'high' && item.offer.price > 50000) {
    same = true;
  }

  if (priceLevel === 'any') {
    same = true;
  }

  return same
}

let filterRooms = (item) => {
  let roomsNumber = roomsInput.value;
  let same = false;

  if (item.offer.rooms >= roomsNumber) {
    same = true;
  }

  if (roomsNumber === 'any') {
    same = true;
  }

  return same
}

let filterGuest = (item) => {
  let guestNumber = guestInput.value;
  console.log(guestNumber)
  let same = false;

  if (item.offer.guests >= guestNumber) {
    same = true;
  }

  if (guestNumber === 'any') {
    same = true;
  }

  return same
}

let addOffersToMap = (array) => {

  let newArray = array
    .filter(filterTypes)
    .filter(filterPrice)
    .filter(filterRooms)
    .filter(filterGuest)
  console.log(newArray)

  newArray
    .slice()
    .slice(0, 10)
    .forEach((profile) => {
      let lat = profile.location.lat;
      let lng = profile.location.lng;
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
}

getData((profiles) => {
  console.log(profiles)
  addOffersToMap(profiles)
  setTypes(() => {addOffersToMap(profiles)})
  setPrice(() => {addOffersToMap(profiles)});
  setRooms(() => {addOffersToMap(profiles)});
  setGuest(() => {addOffersToMap(profiles)});

});

export{addOffersToMap}

// getData()
//   .then((profiles) => {
//     let cutProfiles = profiles.slice(0, 10)
//     console.log(cutProfiles)
//
//     cutProfiles.forEach((profile) => {
//       let lat = profile.location.lat;
//       let lng = profile.location.lng;
//       // eslint-disable-next-line no-undef
//       let profileMarker = L.marker({
//         lat,
//         lng,
//       },
//       {
//         icon: profileIcon,
//       },
//       )
//
//       profileMarker.addTo(map).bindPopup(generateOffer(profile))
//     })
//   })
