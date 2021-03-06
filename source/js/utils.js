import {marker} from './map.js';
import {TOKYO_LAT, TOKYO_LNG, ERROR_DELAY, ESCAPE_BUTTON} from './constants-data.js';
import {cleanPhotos} from './upload-images.js';

function openErrorDataPopup () {
  let errorPopup = document.createElement('div');
  errorPopup.style.height = '50px';
  errorPopup.style.textAlign = 'center';
  errorPopup.style.backgroundColor = '#ffaa99';
  errorPopup.style.position = 'fixed';
  errorPopup.style.padding = '10px';
  errorPopup.style.fontSize = '20px';
  errorPopup.style.top = '0';
  errorPopup.style.right = '0';
  errorPopup.style.left = '0';
  errorPopup.textContent = 'Ошибка загрузки данных с сервера';

  document.body.appendChild(errorPopup);

  setTimeout(() => {
    errorPopup.remove();
  }, ERROR_DELAY)
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
    if (evt.keyCode === ESCAPE_BUTTON) {
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
  address.value = `${TOKYO_LAT}, ${TOKYO_LNG}`;
  marker.setLatLng([TOKYO_LAT, TOKYO_LNG]);
}

let onSuccess = () => {
  clearForm();
  cleanPhotos();
  let newSuccessPopup = clonePopup('#success', '.success');
  closePopups(newSuccessPopup);
}

let onError = () => {
  let errorPopup = clonePopup('#error', '.error')
  closePopups(errorPopup)
}

export {openErrorDataPopup, onSuccess, onError, clearForm};
