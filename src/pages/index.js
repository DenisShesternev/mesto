import '../pages/index.css'

import {initialCards,
        selectors,
        profilePopup,
        profileEdit,
        formProfile,
        nameInput,
        jobInput,
        cardPopup,
        cardAdd,
        formCard,
        popupImage,
        profileName,
        profileAdd,
        elementsContainer,
      cardTemplate} from '../utils/constants.js'

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'

// работа с редактирование профиля
const userInfo = new UserInfo({name: profileName, info: profileAdd})

const addProfileInfo = () => {
  userInfo.setUserInfo(nameInput, jobInput)
}

const popupProfile = new PopupWithForm (profilePopup, addProfileInfo)

popupProfile.setEventListeners()

profileEdit.addEventListener('click', () => {
  const userData = userInfo.getUserInfo()
  profileValidator.resetValidation()
  nameInput.value = userData.name
  jobInput.value = userData.info
  popupProfile.open()
})

// работа с карточками
const popupFigure = new PopupWithImage(popupImage)
popupFigure.setEventListeners()

const createCard = data => {
  const card = new Card({
    data: data,
    handleCardClick: () => {
      popupFigure.open(data)
    }
  }, cardTemplate)
  const cardElement = card.generateCard()
  return cardElement
}

const cardList = new Section ({
  items: initialCards,
  renderer: item => {
    const card = createCard(item)
    cardList.addItem(card)
  }}, elementsContainer)
  cardList.render()

const addPopupCard = data => {
  const card = createCard(data)
  cardList.addItem(card)
}

const newPopupCard = new PopupWithForm(cardPopup, addPopupCard)
newPopupCard.setEventListeners()
cardAdd.addEventListener('click', () => {
  cardValidator.resetValidation()
  newPopupCard.open()
})

// валидация форм
const profileValidator = new FormValidator(selectors, formProfile)
profileValidator.enableValidation()

const cardValidator = new FormValidator(selectors, formCard)
cardValidator.enableValidation()