import {times, roomsAndCapaTokyoMap} from './constants-data.js'

let typesOffer = Object.keys(roomsAndCapaTokyoMap);
let minPricesOfTypesOffer = Object.values(roomsAndCapaTokyoMap);

let form = document.querySelector('.ad-form');
let inputTypeOffer = form.querySelector('#type');
let inputPrice = form.querySelector('#price');
inputPrice.placeholder = minPricesOfTypesOffer[1];

inputTypeOffer.addEventListener('change', () => {
  for (let i = 0; i < typesOffer.length; i++) {
    if (inputTypeOffer.value === typesOffer[i]) {inputPrice.placeholder = minPricesOfTypesOffer[i]}
  }
})

form.addEventListener('submit', (evt) => {
  for (let i = 0; i < typesOffer.length; i++) {
    if (inputTypeOffer.value === typesOffer[i] && inputPrice.value < minPricesOfTypesOffer[i]) {
      evt.preventDefault();
      alert('некорректная цена')
    }
  }
});

let inputTimeIn = form.querySelector('#timein');
let inputTimeOut = form.querySelector('#timeout');

inputTimeIn.addEventListener('change', () => {
  for (let i = 0; i < times.length; i++) {
    if (inputTimeIn.value === times[i]) {inputTimeOut.value = times[i]}
  }
})

inputTimeOut.addEventListener('change', () => {
  for (let i = 0; i < times.length; i++) {
    if (inputTimeOut.value === times[i]) {inputTimeIn.value = times[i]}
  }
})
