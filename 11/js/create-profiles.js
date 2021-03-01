import {generateNumber, getRandomElementNoRepeat, getRandomElement, getNoRepeatList} from './utils.js';

import {
  MIN_COORDINATE_X,
  MAX_COORDINATE_X,
  MIN_COORDINATE_Y,
  MAX_COORDINATE_Y,
  NUMBERS_AFTER_POINT,
  photosLinks,
  houseTypes,
  times,
  featuresArr,
  photosArr,
  NUMBER_PROFILES
} from './constants-data.js';

let getCoordinateX = () => {
  return generateNumber(MIN_COORDINATE_X, MAX_COORDINATE_X, NUMBERS_AFTER_POINT)
}

let getCoordinateY = () => {
  return generateNumber(MIN_COORDINATE_Y, MAX_COORDINATE_Y, NUMBERS_AFTER_POINT)
}

let createProfile = () => {
  let coordinateX = getCoordinateX();
  let coordinateY = getCoordinateY();

  return {
    author: {
      avatar: 'img/avatars/user' + '0' + getRandomElementNoRepeat(photosLinks) + '.png', //строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются.
    },

    offer: {
      title: 'Объявление об аренде',

      address: coordinateX + ', ' + coordinateY, //строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.

      price: generateNumber(1000, 5000), //число — стоимость. Любое положительное число.

      type: getRandomElement(houseTypes), //строка — одно из четырёх фиксированных значений: palace, flat, house или bungalow.

      rooms: generateNumber(1, 10), //число — количество комнат. Любое положительное число.

      guests:  generateNumber(1, 10), //число — количество гостей, которое можно разместить. Любое положительное число.

      checkin: getRandomElement(times), //строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

      checkout: getRandomElement(times), //строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

      features:  getNoRepeatList(featuresArr), //массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

      description: 'Лучшее место для отдыха и работы', //строка — описание помещения. Придумайте самостоятельно.

      photos: getNoRepeatList(photosArr), //массив строк — массив случайной длины из значений: http://o0.github.io/assets/images/tokyo/hotel1.jpg, http://o0.github.io/assets/images/tokyo/hotel2.jpg, http://o0.github.io/assets/images/tokyo/hotel3.jpg.
    },

    location: {
      x: coordinateX, //число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
      y: coordinateY, //число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
    },
  }
}

let createProfilesArray = () => {
  let profiles = [];

  for (let i = 0; i <= NUMBER_PROFILES - 1; i++) {
    profiles[i] = createProfile();
  }

  return profiles
}

export {createProfilesArray};
