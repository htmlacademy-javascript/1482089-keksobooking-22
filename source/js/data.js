import {openErrorDataPopup} from './utils.js';

function getData (onSuccess) {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then(
      (response) => response.json())
    .then((profiles) => {onSuccess(profiles)})
    .catch(openErrorDataPopup)
}

let postData = (formData) => {

  return fetch('https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
}

export {getData, postData}

