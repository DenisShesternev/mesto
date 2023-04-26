export default class Card {
  constructor({data, handleCardClick}, templateSelector) {
    this._name = data.name
    this._link = data.link
    this._handleCardClick = handleCardClick
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
    this._elementCard = null
  }

  _setEventListeners() {
    this._elementCard
    .querySelector('.element__img')
    .addEventListener('click', (e) => {
      this._handleCardClick({
        name: this._name,
        link: this._link
      })
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