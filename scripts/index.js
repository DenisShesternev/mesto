// константы для popup редактирования профиля
const profilePopup = document.querySelector('.popup_profile');
const profileClosePopup = profilePopup.querySelector('.popup__close-button');
const profileEdit = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.popup__form_profile');
const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_add');

// константы для popup добавления карточки
const cardTemplate = document.querySelector('#template-card').content;
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

// общие функции popup
function openPopup(popupClass) { // функция открытия
  popupClass.classList.add('popup__opened');
  document.addEventListener('keydown', popupCloseEscape);
}
function closePopup(popupClass) { // функция закрытия
  popupClass.classList.remove('popup__opened');
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

// функция для формы редактирования профиля
function handleFormSubmitProfile (evt) { // отправка формы
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAdd.textContent = jobInput.value;
  closePopup(profilePopup);
};

//функции popup добавления карточки 
function createCard (cardData) { // функция создания карточек
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true); 

  const cardImage = cardElement.querySelector('.element__img');
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardImage.addEventListener('click', () => {
    imageOpenCard(cardData.name, cardData.link);
  });

  cardElement.querySelector('.element__mesto').textContent = cardData.name;
  cardElement.querySelector('.element__button-like').addEventListener('click', cardLike);
  cardElement.querySelector('.element__button-remuve').addEventListener('click', cardDelete);

  return cardElement
}

function cardLike (evt) { // лайк карточки
  evt.target.classList.toggle('element__button-like_active');
}

function cardDelete (evt) { // удаление карточки
  evt.target.parentElement.remove();
}

function imageOpenCard(name, link) { // открытие изображения
  openPopup(popupImage);
  popupImg.src = link;
  popupImg.alt = name;
  popupImgName.textContent = name;
}

function renderCard (evt) { // создание карточки при вводе данных
  evt.preventDefault();
  const newPlaceName = cardInputName.value;
  const newPlaceUrl = cardInputLink.value;
  elementsContainer.prepend(createCard ({name: newPlaceName, link: newPlaceUrl}));
  formCard.reset();
  closePopup(cardPopup);
}

initialCards.forEach(cardData => { //отображение карточек из 'коробки'
	const name = cardData.name;
	const link = cardData.link;
	elementsContainer.append(createCard(cardData));
});

// Слушатели
document.addEventListener('click', popupCloseOverlay); // слушатель клика на overlay

profileEdit.addEventListener('click', function() { // слушатели окна редактирования профиля
  openPopup(profilePopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileAdd.textContent;
});
profileClosePopup.addEventListener('click', function() {
  closePopup(profilePopup)
});
formProfile.addEventListener('submit', handleFormSubmitProfile);

cardAdd.addEventListener('click', function() { // слушатели окна добавления карточки
  openPopup(cardPopup)
});
cardClosePopup.addEventListener('click', function() {
  closePopup(cardPopup)
});
formCard.addEventListener('submit', renderCard);

imageClosePopup.addEventListener('click', function() { // слушатель закрытия окна изображения
  closePopup(popupImage)
});