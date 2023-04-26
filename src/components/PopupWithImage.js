import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupImage = this._popup.querySelector('.popup__img')
        this._popupNameImg = this._popup.querySelector('.popup__name')
    }

    open(data) {
        super.open()
        this._popupImage.alt = data.name
        this._popupImage.src = data.link
        this._popupNameImg.textContent = data.name
    }
}