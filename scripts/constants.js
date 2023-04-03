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
  const profilePopup = document.querySelector('.popup_profile');
  const profileClosePopup = profilePopup.querySelector('.popup__close-button');
  const profileEdit = document.querySelector('.profile__edit-button');
  const formProfile = document.querySelector('.popup__form_profile');
  const nameInput = document.querySelector('.popup__input_data_name');
  const jobInput = document.querySelector('.popup__input_data_add');
  
  // константы для popup добавления карточки
  const cardPopup = document.querySelector('.popup_card');
  const cardClosePopup = cardPopup.querySelector('.popup__close-button');
  const cardAdd = document.querySelector('.profile__add-button');
  const formCard = document.querySelector('.popup__form_card');
  const cardInputName = document.querySelector('.popup__input_card_name');
  const cardInputLink = document.querySelector('.popup__input_card_link');
  
  // константы открытия изображения
  const popupImage = document.querySelector('.popup_image');
  const imageClosePopup = popupImage.querySelector('.popup__close-button');
  const popupImg = popupImage.querySelector('.popup__img');
  const popupImgName = popupImage.querySelector('.popup__name')
  
  // константы для данных на главной странице
  const profileName = document.querySelector('.profile__name');
  const profileAdd = document.querySelector('.profile__add');
  const elementsContainer = document.querySelector('.elements');
  
  export {initialCards,
            selectors,
            profilePopup,
            profileClosePopup,
            profileEdit,
            formProfile,
            nameInput,
            jobInput,
            cardPopup,
            cardClosePopup,
            cardAdd,
            formCard,
            cardInputName,
            cardInputLink,
            popupImage,
            imageClosePopup,
            popupImg,
            popupImgName,
            profileName,
            profileAdd,
            elementsContainer}