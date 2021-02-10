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

export {generateNumber, getRandomElementNoRepeat, getRandomElement, randomPositiveNumber, getNoRepeatList};
