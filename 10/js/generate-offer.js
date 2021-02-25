let offerTemplate = document.querySelector('#card').content.querySelector('.popup');


// Функция для определения типа жилья и перевода в читаемое значения
let checkTypeOffer = (obj) => {
  let typeName = 'Квартира';
  if (obj.offer.type === 'bungalow') {typeName = 'Бунгало'}
  if (obj.offer.type === 'house') {typeName = 'Дом'}
  if (obj.offer.type === 'palace') {typeName = 'Дворец'}

  return typeName
}

let generateOffer = (profile) => {
  let newOffer = offerTemplate.cloneNode(true);

  let offerTitle = newOffer.querySelector('.popup__title');
  let offerAddress = newOffer.querySelector('.popup__text--address');
  let offerPrice = newOffer.querySelector('.popup__text--price');
  let offerType = newOffer.querySelector('.popup__type');
  let offerRoomsForGuest = newOffer.querySelector('.popup__text--capacity');
  let offerTimes = newOffer.querySelector('.popup__text--time');
  let featuresList = newOffer.querySelector('.popup__features');
  let featuresItems = featuresList.children;
  let offerDescription = newOffer.querySelector('.popup__description');
  let offerPhotosContainer = newOffer.querySelector('.popup__photos');
  let offerPhoto = offerPhotosContainer.querySelector('.popup__photo');
  let offerAvatar = newOffer.querySelector('.popup__avatar');

  offerTitle.textContent = profile.offer.title; // заголовок объявления
  offerAddress.textContent = profile.offer.address; // адрес
  offerPrice.textContent = profile.offer.price + ' ₽/ночь'; // цена
  offerType.textContent = checkTypeOffer(profile); // тип жилья

  // Корректные слова в зависимости от чисел
  let roomsForText = ' комната для '
  let guest = ' гостя'

  if (profile.offer.rooms > 1) {roomsForText = ' комнаты для '}
  if (profile.offer.rooms > 4) {roomsForText = ' комнат для '}
  if (profile.offer.guests > 1) {guest = ' гостей'}

  offerRoomsForGuest.textContent = profile.offer.rooms + roomsForText + profile.offer.guests + guest; // количество гостей и комнат
  offerTimes.textContent = 'Заезд после ' + profile.offer.checkin + ' выезд до ' + profile.offer.checkout; // Время заезда и выезда

  for (let i = featuresItems.length - 1; i >= 0; i--) {
    let featureName = profile.offer.features[i];
    let className = 'popup__feature--' + featureName;
    if (!featuresItems[i].classList.contains(className)) {featuresItems[i].remove()}
  }

  offerDescription.textContent = profile.offer.description;

  // Копируем тег фотографии из шаблона, добавляем src из полученного массива и вставляем в контейнер
  for (let i = 0; i < profile.offer.photos.length; i++) {
    let newPhoto = offerPhoto.cloneNode(true);
    newPhoto.src = profile.offer.photos[i];
    offerPhotosContainer.appendChild(newPhoto);
  }

  offerPhotosContainer.children[0].remove(); // Удаляем шаблон тега из контейнера

  if (offerPhotosContainer.children.length === 0) {offerPhotosContainer.remove()} // Если нет данных о фотографиях удаляем контейнер с фотографиями

  offerAvatar.src = profile.author.avatar;

  if (profile.author.avatar === 'img/avatars/user0undefined.png') {offerAvatar.remove()} // Удаляем аватар, если нет ссылки на фотографию

  return newOffer
}

export {generateOffer};
