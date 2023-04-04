import {popupImage, popupImg, popupImgName} from './constants.js'

import {openPopup} from './utils.js'

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name
    this._link = data.link
    this._templateSelector = templateSelector
  }

  _getTemplateCard() {
    this._elementCard = document
    .querySelector(this._templateSelector)
    .content.
    querySelector('.element')
    .cloneNode(true)
    this._buttonLike = this._elementCard.querySelector('.element__button-like')
  }

  _handleCardLike() {
    this._buttonLike.classList.toggle("element__button-like_active") 
  }

  _handleDelete() {
    this._elementCard.remove()
  }

  _openCardImage () {
    popupImg.src = this._link
    popupImg.alt = this._name
    popupImgName.textContent = this._name
    openPopup(popupImage)
  }
  _setEventListeners() {
    this._elementCard
    .querySelector('.element__img')
    .addEventListener('click', (e) => {
      this._openCardImage()
    })

    this._buttonLike
    .addEventListener('click', (e) => {
      this._handleCardLike()
    })

    this._elementCard
    .querySelector('.element__button-remuve')
    .addEventListener('click', (e) => {
      this._handleDelete()
    })
  }

  generateCard() {
    this._getTemplateCard()
    this._setEventListeners()
    this._cardImage = this._elementCard.querySelector('.element__img')
    this._cardImage.src = this._link
    this._cardImage.alt = this._name
    this._elementCard.querySelector('.element__mesto').textContent = this._name
    return this._elementCard
  }
}