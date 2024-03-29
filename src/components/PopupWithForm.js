import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector)
        this._submitCallback = submitCallback
        this._popupForm = this._popup.querySelector('.popup__form')
        this._inputList = this._popupForm.querySelectorAll('.popup__input')
        this._popupButton = this._popupForm.querySelector('.popup__save-button')
        this._popupButtonText = this._popupButton.textContent
    }

  _getInputValues() {
    this._newValues = {}
    this._inputList.forEach(inputElement => {
        this._newValues[inputElement.name] = inputElement.value
    })
    return this._newValues
  }

    close() {
        super.close()
        this._popupForm.reset()
    }

    renderLoading(isLoading) {
        if(isLoading) {
            this._popupButton.textContent = 'Сохранение...'
            } else {
                this._popupButton.textContent = this._popupButtonText
            }
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupForm.addEventListener('submit', e => {
            e.preventDefault()
            this._submitCallback(this._getInputValues())
        })
    }
}