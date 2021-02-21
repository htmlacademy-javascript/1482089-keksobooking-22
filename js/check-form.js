import {times, roomsAndCapaTokyoMap, MIN_TITLE_LENGTH, MAX_PRICE, ONE_ROOM, TWO_ROOMS, THREE_ROOMS, MANY_ROOMS, NOT_FOR_GUEST, FOR_ONE_GUEST, FOR_TWO_GUEST, FOR_THREE_GUEST} from './constants-data.js'

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

// Кастомная валидация максимальной цены
inputPrice.addEventListener('input', () => {
  if (inputPrice.value > MAX_PRICE) {
    inputPrice.setCustomValidity('Максимальная цена 1.000.000')
  } else {
    inputPrice.setCustomValidity('')
  }

  inputPrice.reportValidity();
})

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

let roomNumber = form.querySelector('#room_number')
let guestSelect = form.querySelector('#capacity')
let capacityOptions = guestSelect.querySelectorAll('option');

// Функция отключающая переданные option
let setDisabledValue = (elements, whichOptionsToDisable) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].disabled = false;
    let valuePosition = whichOptionsToDisable.indexOf(elements[i].value);

    if (valuePosition > -1) {
      elements[i].disabled = true;
    }
  }
};

// Функция отключает поля гостей, в зависимости от выбранного поля кол-ва комнат
let calculateRoomsAndCapacity = () => {
  let roomsInputValue = roomNumber.value;

  switch (roomsInputValue) {
    case ONE_ROOM: // Зависимость от выбора кол-ва комнат
      setDisabledValue(capacityOptions, [NOT_FOR_GUEST, FOR_TWO_GUEST, FOR_THREE_GUEST]); // Массив строк значений option поля кол-ва гостей позволяет отключить ненужные значения
      capacityOptions[2].selected = true;
      break;
    case TWO_ROOMS:
      setDisabledValue(capacityOptions, [NOT_FOR_GUEST, FOR_THREE_GUEST]);
      capacityOptions[1].selected = true;
      break;
    case THREE_ROOMS:
      setDisabledValue(capacityOptions, [NOT_FOR_GUEST]);
      capacityOptions[0].selected = true;
      break;
    case MANY_ROOMS:
      setDisabledValue(capacityOptions, [FOR_ONE_GUEST, FOR_TWO_GUEST, FOR_THREE_GUEST]);
      capacityOptions[3].selected = true;
      break;
  }
};

let roomsInputChangeHandler = () => {
  calculateRoomsAndCapacity();
};

roomNumber.addEventListener('change', roomsInputChangeHandler);
