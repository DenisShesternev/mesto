import '../pages/index.css'

import {selectors,
        profilePopup,
        profileEdit,
        formProfile,
        nameInput,
        jobInput,
        cardPopup,
        cardAdd,
        formCard,
        popupDelete,
        popupImage,
        profileName,
        profileAdd,
        elementsContainer,
        cardTemplate,
        profileAvatar,
        popupAvatar,
        formAvatar,
        avatarEditButton} from '../utils/constants.js'

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api'
import PopupWithConfirm from '../components/PopupWithConfirm.js'

let userId

const api = new Api ({
  url: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: 'f3e5c3a4-5a46-4d8c-bdab-9d8800626ab4',
    'Content-Type': 'application/json'
  }
})

api.getAllNeededData()
.then(([cards, userData]) => {
  userId = userData._id
  cardList.render(cards)
  userInfo.setUserInfo(userData)
})
.catch((err) => console.log(err))

// редактирование профиля
const userInfo = new UserInfo({
  profileName: profileName, 
  profileAdd: profileAdd,
  profileAvatar: profileAvatar})

const popupProfile = new PopupWithForm (profilePopup, newValues => {
  popupProfile.renderLoading(true)
  api.setUserInfoApi(newValues)
    .then((data) => {
      userInfo.setUserInfo(data)
      popupProfile.close()
    })
    .catch((err) => console.log(err))
    .finally(() => popupProfile.renderLoading(false))
})
popupProfile.setEventListeners()

profileEdit.addEventListener('click', () => {
  const userData = userInfo.getUserInfo()
  profileValidator.resetValidation()
  popupProfile.open()
  nameInput.value = userData.profile
  jobInput.value = userData.info
})

// аватар
const popupAvatarEdit = new PopupWithForm(popupAvatar, newValues => {
  popupAvatarEdit.renderLoading(true)
  api.handleUserAvatar(newValues)
    .then((data) => {
      userInfo.setUserAvatar(data)
      popupAvatarEdit.close()
    })
    .catch((err) => console.log(err))
    .finally(() => popupAvatarEdit.renderLoading(false))
})
popupAvatarEdit.setEventListeners()

avatarEditButton.addEventListener('click', () => {
  avatarValidator.resetValidation()
  popupAvatarEdit.open()
})

// карточки
const popupFigure = new PopupWithImage(popupImage)
popupFigure.setEventListeners()

const confirmDeletePopup = new PopupWithConfirm (popupDelete)
confirmDeletePopup.setEventListeners()


const createCard = data => {
  const card = new Card({
    data: data,
    handleCardClick: () => {
      popupFigure.open(data)
    },
    handleLikeClick: () => {
      card.handleCardLike()
    }, 
    handleConfirmDelete: () => {
      confirmDeletePopup.setSubmitAction(() => {
        confirmDeletePopup.renderLoadingWhileDelete(true)
        api.delete(data._id)
        .then(() => {
          card.handleDelete()
          confirmDeletePopup.close()
        })
        .catch((err) => console.log(err))
        .finally(() => confirmDeletePopup.renderLoadingWhileDelete(false))
      })
      confirmDeletePopup.open()
    }
  }, cardTemplate, api, userId)
  const cardElement = card.generateCard()
  return cardElement
}

const cardList = new Section ({
  renderer: item => {
    const card = createCard(item)
    cardList.addItem(card)
  }}, elementsContainer)


const newPopupCard = new PopupWithForm(cardPopup, newValues => {
  newPopupCard.renderLoading(true)
  api.addUserCard(newValues)
    .then((data) => {
      const card = createCard(data)
      cardList.addItem(card)
      newPopupCard.close()
    })
    .catch((err) => console.log(err))
    .finally(() => newPopupCard.renderLoading(false))
})
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

const avatarValidator = new FormValidator(selectors, formAvatar) 
avatarValidator.enableValidation()