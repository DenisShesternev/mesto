export default class FormValidator {
    constructor(data, formElement) {
      this._inputSelector = data.inputSelector
      this._submitButtonSelector = data.submitButtonSelector
      this._inactiveButtonClass = data.inactiveButtonClass
      this._inputErrorClass = data.inputErrorClass
      this._errorClass = data.errorClass
      this._formElement = formElement
      this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
        inputElement.classList.add(this._inputErrorClass)
        errorElement.textContent = errorMessage
        errorElement.classList.add(this._errorClass)
      };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
        inputElement.classList.remove(this._inputErrorClass)
        errorElement.classList.remove(this._errorClass)
        errorElement.textContent = ''
      };

    _checkInputValidity (inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement, inputElement.validationMessage);
        } else {
          this._hideInputError(inputElement)
        }
      };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid
        })
      }

    _toggleButtonState () {
      if (this._hasInvalidInput()) {
        this.submitButtonDisabled()
      } else {
        this._buttonElement.classList.remove(this._inactiveButtonClass)
        this._buttonElement.disabled = false
      }
    }

    _setEventListeners() {
      this._toggleButtonState();
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
        });
      });
    };

    submitButtonDisabled() {
      this._buttonElement.classList.add(this._inactiveButtonClass)
      this._buttonElement.disabled = true
    }

    resetValidation() {
      this._inputList.forEach((input) => {
        this._hideInputError(input)
      })
      this._toggleButtonState()
    }

    enableValidation() {
        this._setEventListeners()
    }
  }