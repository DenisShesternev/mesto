// константа карточек из 'коробки'
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
  ];
 
  const selectors = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible',
  }
  
  // константы для popup редактирования профиля
  const profilePopup = ('.popup_profile');
  const profileEdit = document.querySelector('.profile__edit-button');
  const formProfile = document.querySelector('.popup__form_profile');
  const nameInput = document.querySelector('.popup__input_data_name');
  const jobInput = document.querySelector('.popup__input_data_add');
  
  // константы для popup добавления карточки
  const cardTemplate = ('#template-card')
  const cardPopup = ('.popup_card');
  const cardAdd = document.querySelector('.profile__add-button');
  const formCard = document.querySelector('.popup__form_card');
  // константы открытия изображения
  const popupImage = ('.popup_image');
  const popupImg = ('.popup__img');
  const popupImgName = ('.popup__name')
  
  // константы для данных на главной странице
  const profileName = document.querySelector('.profile__name');
  const profileAdd = document.querySelector('.profile__add');
  const elementsContainer = ('.elements');
  
  export {initialCards,
            selectors,
            profilePopup,
            profileEdit,
            formProfile,
            nameInput,
            jobInput,
            cardPopup,
            cardAdd,
            formCard,
            popupImage,
            popupImg,
            popupImgName,
            profileName,
            profileAdd,
            elementsContainer,
          cardTemplate}