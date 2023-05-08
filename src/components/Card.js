export default class Card {
  constructor({data, handleCardClick, handleLikeClick, handleConfirmDelete}, templateSelector, api, userId) {
    this._name = data.name
    this._link = data.link
    this._likes = data.likes
    this._handleCardClick = handleCardClick
    this._handleLikeClick = handleLikeClick
    this._handleConfirmDelete = handleConfirmDelete
    this._templateSelector = templateSelector
    this._api = api
    this._id = data._id
    this._ownerId = data.owner._id
    this._userId = userId
  }

  _getTemplateCard() {
    this._elementCard = document
    .querySelector(this._templateSelector)
    .content.
    querySelector('.element')
    .cloneNode(true)
    this._buttonLike = this._elementCard.querySelector('.element__button-like')
  }

  handleCardLike() {
    const  buttonLike = this._elementCard.querySelector('.element__button-like')
    const likeCount = this._elementCard.querySelector('.element__like_count')
    if(!(buttonLike.classList.contains('element__button-like_active'))) {
      this._api.like(this._id)
      .then((data) => {
        buttonLike.classList.add('element__button-like_active')
        likeCount.textContent = data.likes.length
      })
      .catch((err) => {
        console.log(err)
      })
    } else {
      this._api.disLike(this._id)
      .then((data) => {
        buttonLike.classList.remove('element__button-like_active')
        likeCount.textContent = data.likes.length
      })
      .catch((err) => {
        console.log(err)
    })
  }}

  handleDelete() {
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
      this._handleLikeClick()
    })

    this._elementCard
    .querySelector('.element__button-remuve')
    .addEventListener('click', (e) => {
      this._handleConfirmDelete()
    })
  }

  generateCard() {
    this._getTemplateCard()
    this._setEventListeners()
    this._cardImage = this._elementCard.querySelector('.element__img')
    this._cardImage.src = this._link
    this._cardImage.alt = this._name
    this._elementCard.querySelector('.element__mesto').textContent = this._name
    this._elementCard.querySelector('.element__like_count').textContent = this._likes.length
    if(!(this._ownerId === this._userId)) {
     this._elementCard.querySelector('.element__button-remuve').style.display = 'none'
      }
    if(this._likes.find((obj) => this._userId === obj._id)) {
      this._buttonLike.classList.add('element__button-like_active')
    }
    return this._elementCard
  }}