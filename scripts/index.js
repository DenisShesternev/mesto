import { FormValidator } from './FormValidator.js'

import {initialCards,
        selectors,
        profilePopup,
        profileClosePopup,
        profileEdit,
        formProfile,
        nameInput,
        jobInput,
        cardPopup,
        cardClosePopup,
        cardAdd,
        formCard,
        cardInputName,
        cardInputLink,
        popupImage,
        imageClosePopup,
        profileName,
        profileAdd,
        elementsContainer} from './constants.js'

import {openPopup,
        closePopup,
        popupCloseOverlay} from './utils.js'

import { Card } from './Card.js';

function handleFormSubmitProfile (evt) { // функция для формы редактирования профиля
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAdd.textContent = jobInput.value;
  closePopup(profilePopup);
};

function handleRenderCard (evt) { // создание карточки при вводе данных
  evt.preventDefault();
  const newValues = {
    name: cardInputName.value,
    link: cardInputLink.value
  }
  handleAddCard(newValues)
  formCard.reset();
  closePopup(cardPopup);
}

function handleAddCard (cardData) {
  const newCard = new Card(cardData, '#template-card')
  elementsContainer.prepend(newCard.generateCard())
}

initialCards.forEach(cardData => { //отображение карточек из 'коробки'
	handleAddCard(cardData);
});


// Слушатели

profilePopup.addEventListener('mousedown', popupCloseOverlay); //слушатели клика по overlay
cardPopup.addEventListener('mousedown', popupCloseOverlay); 
popupImage.addEventListener('mousedown', popupCloseOverlay); 

profileEdit.addEventListener('click', () => { // слушатели окна редактирования профиля
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAdd.textContent;
  profileValidator.resetValidation()
});
profileClosePopup.addEventListener('click', () => {
  closePopup(profilePopup);
});
formProfile.addEventListener('submit', handleFormSubmitProfile);

cardAdd.addEventListener('click', () => { // слушатели окна добавления карточки
  cardValidator.resetValidation()
  openPopup(cardPopup);
});
cardClosePopup.addEventListener('click', () => {
  closePopup(cardPopup);
});
formCard.addEventListener('submit', handleRenderCard);

imageClosePopup.addEventListener('click', () => { // слушатель закрытия окна изображения
  closePopup(popupImage);
});

const profileValidator = new FormValidator(selectors, formProfile)
profileValidator.enableValidation()

const cardValidator = new FormValidator(selectors, formCard)
cardValidator.enableValidation()