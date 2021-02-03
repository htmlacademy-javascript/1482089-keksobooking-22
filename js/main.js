let generateNumber = function (min, max, point) {
  if (max < 0 || min < 0 || point < 0 || max < min) {
    return 'INVALID DATA'
  }

  let coordinate = Math.random() * (max - min) + min; // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE_%D1%87%D0%B8%D1%81%D0%BB%D0%B0_%D0%B2_%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE%D0%BC_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D0%B0%D0%BB%D0%B5
  return Number(coordinate.toFixed(point));  //https://learn.javascript.ru/number#okruglenie
}

let houseTypes = ['palace', 'flat', 'house', 'bungalow'];
let times = ['12:00', '13:00', '14:00'];
let featuresArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
let photosArr = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

let createProfile = () => {
  return {
    author: {
      avatar: 'img/avatars/user' + '0' + generateNumber(1, 8) + '.png', //строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются.
    },

    offer: {
      title: 'Объявление об аренде',

      address: location.x + ', ' + generateNumber(139.70000, 139.80000, 5), //строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.

      price: generateNumber(0, 1000000), //число — стоимость. Любое положительное число.

      type: houseTypes[generateNumber(0, houseTypes.length -1)], //строка — одно из четырёх фиксированных значений: palace, flat, house или bungalow.

      rooms: generateNumber(0, 10), //число — количество комнат. Любое положительное число.

      guests:  generateNumber(0, 20), //число — количество гостей, которое можно разместить. Любое положительное число.

      checkin: times[generateNumber(0, times.length -1)], //строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

      checkout: times[generateNumber(0, times.length -1)], //строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

      features: new Array(generateNumber(0, featuresArr.length)).fill(null).map(() => { return featuresArr[generateNumber(0, featuresArr.length -1)]}), //массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

      description: 'Лучшее место для отдыха и работы', //строка — описание помещения. Придумайте самостоятельно.

      photos: new Array(generateNumber(0, photosArr.length)).fill(null).map(() => {return photosArr[generateNumber(0, photosArr.length -1)]}), //массив строк — массив случайной длины из значений: http://o0.github.io/assets/images/tokyo/hotel1.jpg, http://o0.github.io/assets/images/tokyo/hotel2.jpg, http://o0.github.io/assets/images/tokyo/hotel3.jpg.
    },

    location: {
      x: generateNumber(35.65000, 35.70000, 5), //число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
      y: generateNumber(139.70000, 139.80000, 5), //число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
    },
  }
}

let profiles = new Array(10).fill(null).map(() => createProfile());

profiles.forEach();
