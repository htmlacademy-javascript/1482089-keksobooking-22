let form = document.querySelector('.ad-form');
let inputTypeOffer = form.querySelector('#type');
let inputPrice = form.querySelector('#price');
inputPrice.placeholder = 1000;

inputTypeOffer.addEventListener('change', () => {
  if (inputTypeOffer.value === 'flat') {inputPrice.placeholder = 1000}
  if (inputTypeOffer.value === 'bungalow') {inputPrice.placeholder = 0}
  if (inputTypeOffer.value === 'house') {inputPrice.placeholder = 5000}
  if (inputTypeOffer.value === 'palace') {inputPrice.placeholder = 10000}
})

form.addEventListener('submit', (evt) => {
  if (inputTypeOffer.value === 'flat') {
    if(inputPrice.value < 1000) {
      evt.preventDefault();
      alert('некорректная цена для квартиры')
    }
  }

  if (inputTypeOffer.value === 'bungalow') {
    if(inputPrice.value < 0) {
      evt.preventDefault();
      alert('некорректная цена для бунгало')
    }
  }

  if (inputTypeOffer.value === 'house') {
    if(inputPrice.value < 5000) {
      evt.preventDefault();
      alert('некорректная цена для дома')
    }
  }

  if (inputTypeOffer.value === 'palace') {
    if(inputPrice.value < 10000) {
      evt.preventDefault();
      alert('некорректная цена для дворца')
    }
  }
});


let inputTimeIn = form.querySelector('#timein');
let inputTimeOut = form.querySelector('#timeout');

inputTimeIn.addEventListener('change', () => {
  if (inputTimeIn.value === '12:00') {inputTimeOut.value = '12:00'}
  if (inputTimeIn.value === '13:00') {inputTimeOut.value = '13:00'}
  if (inputTimeIn.value === '14:00') {inputTimeOut.value = '14:00'}
})

inputTimeOut.addEventListener('change', () => {
  if (inputTimeOut.value === '12:00') {inputTimeIn.value = '12:00'}
  if (inputTimeOut.value === '13:00') {inputTimeIn.value = '13:00'}
  if (inputTimeOut.value === '14:00') {inputTimeIn.value = '14:00'}
})
