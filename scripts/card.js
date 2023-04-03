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
  }

  _handleCardLike(evt) {
    evt.target.classList
    .toggle('element__button-like_active')
  }

  _handleDelete(evt) {
    evt.target.parentElement.remove();
  }

  _imageOpenCard () {
    popupImg.src = this._link
    popupImg.alt = this._name
    popupImgName.textContent = this._name
    openPopup(popupImage)
  }
  _setEventListeners() {
    this._elementCard
    .querySelector('.element__img')
    .addEventListener('click', (e) => {
      this._imageOpenCard()
    })

    this._elementCard
    .querySelector('.element__button-like')
    .addEventListener('click', (e) => {
      this._handleCardLike(e)
    })

    this._elementCard
    .querySelector('.element__button-remuve')
    .addEventListener('click', (e) => {
      this._handleDelete(e)
    })
  }

  generateCard(container) {
    this._getTemplateCard()
    this._setEventListeners()
    this._cardImage = this._elementCard.querySelector('.element__img')
    this._cardImage.src = this._link
    this._cardImage.alt = this._name
    this._elementCard.querySelector('.element__mesto').textContent = this._name
    container.prepend(this._elementCard)
  }
}