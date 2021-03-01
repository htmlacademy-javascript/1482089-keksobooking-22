// Постоянные значения координат для вспомогательных функций
const MIN_COORDINATE_X = 35.65000;
const MAX_COORDINATE_X = 35.70000;
const MIN_COORDINATE_Y = 139.70000;
const MAX_COORDINATE_Y = 139.80000;
const NUMBERS_AFTER_POINT = 5;
const NUMBER_PROFILES = 10;

// Значения для карты
const markerWidth = 60;
const markerHeight = 60;
const tokyoLat = 35.683377;
const tokyoLng = 139.754519;
const mapScale = 12;

// Значения для валидации длины заголовка
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

// Значения для валидации зависимости кол-ва гостей от кол-ва комнат
const ONE_ROOM = '1'
const TWO_ROOMS = '2'
const THREE_ROOMS = '3'
const MANY_ROOMS = '100'
const NOT_FOR_GUEST = '0';
const FOR_ONE_GUEST = '1';
const FOR_TWO_GUEST = '2';
const FOR_THREE_GUEST = '3';

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
  roomsAndCapaTokyoMap,
  markerWidth,
  markerHeight,
  tokyoLat,
  tokyoLng,
  mapScale,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  MAX_PRICE,
  ONE_ROOM,
  TWO_ROOMS,
  THREE_ROOMS,
  MANY_ROOMS,
  NOT_FOR_GUEST,
  FOR_ONE_GUEST,
  FOR_TWO_GUEST,
  FOR_THREE_GUEST
}
