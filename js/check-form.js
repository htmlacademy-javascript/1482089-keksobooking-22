import {times, roomsAndCapaTokyoMap, MIN_TITLE_LENGTH} from './constants-data.js'

let typesOffer = Object.keys(roomsAndCapaTokyoMap);
let minPricesOfTypesOffer = Object.values(roomsAndCapaTokyoMap);

let form = document.querySelector('.ad-form');
let inputTypeOffer = form.querySelector('#type');
let inputPrice = form.querySelector('#price');
let inputOfferTitle = form.querySelector('#title');

inputPrice.placeholder = minPricesOfTypesOffer[1];
inputPrice.min = minPricesOfTypesOffer[1];

inputTypeOffer.addEventListener('change', () => {
  for (let i = 0; i < typesOffer.length; i++) {
    if (inputTypeOffer.value === typesOffer[i]) {
      inputPrice.placeholder = minPricesOfTypesOffer[i]
      inputPrice.min = minPricesOfTypesOffer[i]
    }
  }
})

// Не знаю как лучше поступить: оставить функцию(ниже) добавить атрибут max через JS или просто в HTML добавить max="1000000"

// inputPrice.addEventListener('input', () => {
//   if (inputPrice.value > 1000000) {
//     inputPrice.setCustomValidity('Максимальная цена 1.000.000')
//   } else {
//     inputPrice.setCustomValidity('')
//   }
//
//   inputPrice.reportValidity();
// })

form.addEventListener('submit', (evt) => {
  for (let i = 0; i < typesOffer.length; i++) {
    if (inputTypeOffer.value === typesOffer[i] && inputPrice.value < minPricesOfTypesOffer[i]) {
      evt.preventDefault();
    }
  }
});

inputOfferTitle.addEventListener('input', () => {
  let titleLength = inputOfferTitle.value.length;
  if (titleLength < MIN_TITLE_LENGTH) {
    inputOfferTitle.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - titleLength) +' симв.')
  } else {
    inputOfferTitle.setCustomValidity('')
  }

  inputOfferTitle.reportValidity();
})

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
