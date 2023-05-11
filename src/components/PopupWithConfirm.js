import Popup from './Popup.js'

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
    super(popupSelector)
    this._popupForm = this._popup.querySelector('.popup__form')
    this._popupButton = this._popupForm.querySelector('.popup__save-button')
    this._popupButtonText = this._popupButton.textContent
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupForm.addEventListener('submit', e => {
            e.preventDefault()
            this._handleSubmitCallback()
        })
    }

    setSubmitAction(action) {
        this._handleSubmitCallback = action
    }

    renderLoadingWhileDelete(isLoading) {
        if(isLoading) {
            this._popupButton.textContent = 'Удаление...'
        } else {
            this._popupButton.textContent = this._popupButtonText
        }
    }
}