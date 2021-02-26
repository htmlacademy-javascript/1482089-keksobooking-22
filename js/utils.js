import {marker} from './map.js';
import {tokyoLat, tokyoLng} from './constants-data.js';

let generateNumber = function (min, max, point) {
  if (max < 0 || min < 0 || point < 0 || max < min) {
    return 'INVALID DATA'
  }

  let coordinate = Math.random() * (max - min) + min; // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE_%D1%87%D0%B8%D1%81%D0%BB%D0%B0_%D0%B2_%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE%D0%BC_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D0%B0%D0%BB%D0%B5
  return Number(coordinate.toFixed(point));  //https://learn.javascript.ru/number#okruglenie
};

let getRandomElementNoRepeat = function (array) {
  let randomElementIndex = generateNumber(0, array.length - 1);
  let randomElement = array[randomElementIndex];
  array.splice(randomElementIndex, 1);
  return randomElement;
}

let getRandomElement = function (array) {
  let randomElementIndex = generateNumber(0, array.length - 1);
  return array[randomElementIndex];
}

let randomPositiveNumber = () => {
  return generateNumber(0 , Number.MAX_SAFE_INTEGER)
}

let getNoRepeatList = (array) => {
  return array.slice(0, generateNumber(0,array.length))
}

function openErrorDataPopup () {
  let errorPopup = document.createElement('div');
  errorPopup.style.height = '50px';
  errorPopup.style.textAlign = 'center';
  errorPopup.style.backgroundColor = '#ffaa99';
  errorPopup.style.position = 'fixed';
  errorPopup.style.padding = '10px';
  errorPopup.style.fontSize = '20px';
  errorPopup.style.top = 0;
  errorPopup.style.right = 0;
  errorPopup.style.left = 0;
  errorPopup.textContent = 'Ошибка загрузки данных с сервера';

  document.body.appendChild(errorPopup);

  setTimeout(() => {
    errorPopup.remove();
  }, 3000)
}

let closePopups = (element) => {
  let closeButton = element.querySelector('button');

  if (element.contains(closeButton)) {
    closeButton.addEventListener('click', () => {
      element.remove();
    })
  }

  element.addEventListener('click', () => {
    element.remove();
  })

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      element.remove();
    }
  })
}

let clonePopup = (idSelector, classSelector) => {
  let template = document.querySelector(idSelector).content.querySelector(classSelector);
  let popup = template.cloneNode(true);
  let container = document.querySelector('main')
  let mapContainer = container.querySelector('.map');
  mapContainer.style.zIndex = '1';
  return container.appendChild(popup);
}

let clearForm = () => {
  let filters = document.querySelector('.map__filters');
  let form = document.querySelector('.ad-form');
  let address = form.querySelector('#address');
  form.reset();
  filters.reset();
  address.value = `${tokyoLat}, ${tokyoLng}`;
  marker.setLatLng([tokyoLat, tokyoLng]);
}

let onSuccess = () => {
  clearForm();
  let newSuccessPopup = clonePopup('#success', '.success');
  closePopups(newSuccessPopup);
}

let onError = () => {
  let errorPopup = clonePopup('#error', '.error')
  closePopups(errorPopup)
}

export {generateNumber, getRandomElementNoRepeat, getRandomElement, randomPositiveNumber, getNoRepeatList, openErrorDataPopup, onSuccess, onError, clearForm};
