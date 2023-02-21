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
  }
];

// константы для popup редактирования профиля
const profilePopup = document.querySelector('.popup_profile');
const closePopupProfile = profilePopup.querySelector('.popup__close-button');
const profileEdit = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.popup__form_profile');
const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_add');

// константы для popup добавления карточки
const cardPopup = document.querySelector('.popup_card');
const closePopupCard = cardPopup.querySelector('.popup__close-button');
const cardAdd = document.querySelector('.profile__add-button');
const formCard = document.querySelector('.popup__form_card');
const cardInputName = document.querySelector('.popup__input_card_name');
const cardInputLink = document.querySelector('.popup__input_card_link');

// константы открытия изображения
const popupImage = document.querySelector('.popup_image');
const closePopupImage = popupImage.querySelector('.popup__close-button');
const popupImg = popupImage.querySelector('.popup__img');
const popupImgName = popupImage.querySelector('.popup__name')

// константы для данных на главной странице
const profileName = document.querySelector('.profile__name');
const profileAdd = document.querySelector('.profile__add');
const elementsContainer = document.querySelector('.elements');

// popup редактирования профиля
function openEditProfile() { // функция открытия
  profilePopup.classList.add('popup__opened');
}
function closeEditProfile() { // функция закрытия
  profilePopup.classList.remove('popup__opened');
}

function handleFormSubmitProfile (evt) { // отправка формы
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAdd.textContent = jobInput.value;

    closeEditProfile();
};

//функции popup добавления карточки 
function openCardPopup() { // функция открытия
  cardPopup.classList.add('popup__opened');
}
function closeCardPopup() { // функция закрытия
  cardPopup.classList.remove('popup__opened');
}

function addCard (name, link) { // функция создания карточек
  const cardTemplate = document.querySelector('#template-card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true); 

  cardElement.querySelector('.element__img').src = link;
  cardElement.querySelector('.element__img').alt = name;
  cardElement.querySelector('.element__mesto').textContent = name;
  cardElement.querySelector('.element__button-like').addEventListener('click', function (evt) { // лайк
    evt.target.classList.toggle('element__button-like_active');
  })
  cardElement.querySelector('.element__button-remuve').addEventListener('click', function (evt) { // удаление карточки
    evt.target.parentElement.remove();
  })
  cardElement.querySelector('.element__img').addEventListener('click', function() { // открытие изображения
    openImage();
    popupImg.src = link;
    popupImg.alt = name;
    popupImgName.textContent = name;
  })

elementsContainer.prepend(cardElement); // вставка карточки в начало массива
}

function handleFormSubmitCard (evt) { // создание карточки при вводе данных
  evt.preventDefault();
  addCard (cardInputName.value, cardInputLink.value);
  cardInputName.value = '';
  cardInputLink.value = '';
  closeCardPopup();
}

initialCards.forEach(data => { //отображение карточек из 'коробки'
	const name = data.name;
	const link = data.link;
	addCard(name, link);
});
// функции для изображения 
function openImage() {
  popupImage.classList.add('popup__opened');
}
function closeImage() {
  popupImage.classList.remove('popup__opened');
}

// слушатели
profileEdit.addEventListener('click', function() { // слушатели окна редактирования профиля
  openEditProfile();
    nameInput.value = profileName.textContent;
    jobInput.value = profileAdd.textContent;
});
closePopupProfile.addEventListener('click', closeEditProfile);
formProfile.addEventListener('submit', handleFormSubmitProfile);

cardAdd.addEventListener('click', openCardPopup); // слушатели окна добавления карточки
closePopupCard.addEventListener('click', closeCardPopup);
formCard.addEventListener('submit', handleFormSubmitCard);

closePopupImage.addEventListener('click', closeImage); // слушатель закрытия окна изображения