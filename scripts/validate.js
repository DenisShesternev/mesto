  const showInputError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

  const hideInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement, arrayForm) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, arrayForm);
    } else {
      hideInputError(formElement, inputElement, arrayForm);
    }
  };


  const setEventListeners = (formElement, {inputSelector, submitButtonSelector, ...arrayForm}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
     toggleButtonState(inputList, buttonElement, arrayForm);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement, arrayForm);
        toggleButtonState(inputList, buttonElement, arrayForm);
      });
    });
  };


  const enableValidation = ({formSelector, ...arrayForm}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
  const fieldsetList = Array.from(document.querySelectorAll(formSelector));  
  fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet, arrayForm);
  });
    });
  };
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }
  
  function toggleButtonState (inputList, buttonElement, {inactiveButtonClass}) {
      if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

 enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
});