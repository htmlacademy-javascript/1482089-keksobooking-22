const MIN_COORDINATE_X = 35.65000;
const MAX_COORDINATE_X = 35.70000;
const MIN_COORDINATE_Y = 139.70000;
const MAX_COORDINATE_Y = 139.80000;
const NUMBERS_AFTER_POINT = 5;
const NUMBER_PROFILES = 10;

let photosLinks = [1, 2, 3, 4, 5, 6, 7, 8];
let houseTypes = ['palace', 'flat', 'house', 'bungalow'];
let times = ['12:00', '13:00', '14:00'];
let featuresArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
let photosArr = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const roomsAndCapaTokyoMap = {'bungalow': 0, 'flat': 1000, 'house': 5000, 'palace': 10000 };

export {
  MIN_COORDINATE_X,
  MAX_COORDINATE_X,
  MIN_COORDINATE_Y,
  MAX_COORDINATE_Y,
  NUMBERS_AFTER_POINT,
  NUMBER_PROFILES,
  photosLinks,
  houseTypes,
  times,
  featuresArr,
  photosArr,
  roomsAndCapaTokyoMap
}
