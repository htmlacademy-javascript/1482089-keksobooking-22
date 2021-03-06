// Значения для карты
const MARKER_WIDTH = 60;
const MARKER_HEIGHT = 60;
const TOKYO_LAT = 35.683377;
const TOKYO_LNG = 139.754519;
const MAP_SCALE = 9;

// Значения для валидации длины заголовка
const MIN_TITLE_LENGTH = 30;
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

const TIMES = ['12:00', '13:00', '14:00'];
const ROOMS_AND_CAPA_TOKYO_MAP = {'bungalow': 0, 'flat': 1000, 'house': 5000, 'palace': 10000 };

// Константы для фильтрации объявлений
const MAX_FILTER_PRICE = 50000;
const MIN_FILTER_PRICE = 10000;
const LOW_PRICE_LEVEL = 'low';
const MIDDLE_PRICE_LEVEL = 'middle';
const HIGH_PRICE_LEVEL = 'high';
const DEFAULT_FILTER_VALUE = 'any';

// Допустимые форматы картинок
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

// Задержка вызова
const RERENDER_DELAY = 500;
const ERROR_DELAY = 3000;

const ESCAPE_BUTTON = 27;

export {
  TIMES,
  ROOMS_AND_CAPA_TOKYO_MAP,
  MARKER_WIDTH,
  MARKER_HEIGHT,
  TOKYO_LAT,
  TOKYO_LNG,
  MAP_SCALE,
  MIN_TITLE_LENGTH,
  MAX_PRICE,
  ONE_ROOM,
  TWO_ROOMS,
  THREE_ROOMS,
  MANY_ROOMS,
  NOT_FOR_GUEST,
  FOR_ONE_GUEST,
  FOR_TWO_GUEST,
  FOR_THREE_GUEST,
  MAX_FILTER_PRICE,
  MIN_FILTER_PRICE,
  LOW_PRICE_LEVEL,
  MIDDLE_PRICE_LEVEL,
  HIGH_PRICE_LEVEL,
  DEFAULT_FILTER_VALUE,
  FILE_TYPES,
  RERENDER_DELAY,
  ERROR_DELAY,
  ESCAPE_BUTTON
}
