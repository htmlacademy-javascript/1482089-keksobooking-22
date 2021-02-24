import {openErrorDataPopup} from './utils.js';

let getData = () => {
  return fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then(
      (response) => response.json())
    .catch(openErrorDataPopup)
}
export {getData}
