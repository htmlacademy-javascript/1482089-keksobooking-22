import {FILE_TYPES} from './constants-data.js';

let avatarInput = document.querySelector('#avatar');
let avatarContainer = document.querySelector('.ad-form-header__preview:first-child')
let avatar = avatarContainer.querySelector('img')

let check = (name) => {
  return FILE_TYPES.some((fileEnd) => {
    return name.endsWith(fileEnd);
  })
}

avatarInput.addEventListener('change', () => {
  let uploadedFile = avatarInput.files[0];
  let fileName = uploadedFile.name.toLowerCase();

  if (check(fileName)) {
    let reader = new FileReader;

    reader.readAsDataURL(uploadedFile)

    reader.addEventListener('load', () => {
      avatar.src = reader.result;
    })
  }
})


let offerImagesInput = document.querySelector('#images');
let offerImagesContainer = document.querySelector('.ad-form__photo');
let fieldset = document.querySelector('.ad-form__photo-container')

// Добавляем сразу несколько картинок
offerImagesInput.addEventListener('change', () => {
  let files = offerImagesInput.files;

  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    let fileName = file.name.toLowerCase();

    if (check(fileName)) {
      let reader = new FileReader;

      reader.readAsDataURL(file);

      let newContainer = offerImagesContainer.cloneNode(true);
      let newPic = document.createElement('img');
      newPic.style.width = '100%';
      newPic.style.height = '100%';

      newContainer.appendChild(newPic);
      fieldset.appendChild(newContainer);
      offerImagesContainer.remove();

      reader.addEventListener('load',() => {
        newPic.src = reader.result;
      })
    }
  }
})


// Чистим фото при нажатии кнопки reset
let cleanButton = document.querySelector('.ad-form__reset');

let cleanPhotos = () => {
  let containers = document.querySelectorAll('.ad-form__photo');
  containers.forEach((item) => {item.remove()});


  fieldset.appendChild(offerImagesContainer);

  avatar.src = 'img/muffin-grey.svg';
};

cleanButton.addEventListener('click', cleanPhotos);

export {cleanPhotos};
