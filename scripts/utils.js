// общие функции popup
function openPopup(popupClass) { // функция открытия
    popupClass.classList.add('popup__opened');
    document.addEventListener('keydown', popupCloseEscape);
  }
  function closePopup(popupClass) { // функция закрытия
    popupClass.classList.remove('popup__opened');
    document.removeEventListener('keydown', popupCloseEscape);
  }
  
  function popupCloseEscape(evt) { // выход из popup с помощью Escape
    if (evt.key === 'Escape') {
      const popupOpened = document.querySelector('.popup__opened')
      closePopup(popupOpened);
    }
  }
  function popupCloseOverlay(evt) { // выход из popup кликом на overlay
    if (evt.target.classList.contains('popup__opened')) {
      closePopup(evt.target);
    }
  }

  export {openPopup,
    closePopup,
    popupCloseOverlay
  }