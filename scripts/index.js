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
const popup = document.querySelector('.popup')
const profileName = document.querySelector('.profile__name');
const profileAdd = document.querySelector('.profile__add');
const elementsContainer = document.querySelector('.elements');

// общие функции открытия popup
function openPopup(popupClass) { // функция открытия
  popupClass.classList.add('popup__opened');
}
function closePopup(popupClass) { // функция закрытия
  popupClass.classList.remove('popup__opened');
}

// функция для формы редактирования профиля
function handleFormSubmitProfile (evt) { // отправка формы
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAdd.textContent = jobInput.value;
  closePopup(profilePopup);
};

//функции popup добавления карточки 
function createCard (name, link) { // функция создания карточек
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true); 

  const cardImage = cardElement.querySelector('.element__img');
  cardImage.src = link;
  cardImage.alt = name;
  cardImage.addEventListener('click', () => {
    imageOpenCard(name, link);
  });

  cardElement.querySelector('.element__mesto').textContent = name;
  cardElement.querySelector('.element__button-like').addEventListener('click', function (evt) { // лайк
    evt.target.classList.toggle('element__button-like_active');
  })
  cardElement.querySelector('.element__button-remuve').addEventListener('click', function (evt) { // удаление карточки
    evt.target.parentElement.remove();
  })

  return cardElement
}

function imageOpenCard(name, link) { // открытие изображения
  openPopup(popupImage);
  popupImg.src = link;
  popupImg.alt = name;
  popupImgName.textContent = name;
}

function renderCard (evt) { // создание карточки при вводе данных
  evt.preventDefault();
  elementsContainer.prepend(createCard (cardInputName.value, cardInputLink.value))
  formCard.reset();
  closePopup(cardPopup);
}

initialCards.forEach(data => { //отображение карточек из 'коробки'
	const name = data.name;
	const link = data.link;
	elementsContainer.append(createCard(name, link));
});

// слушатели
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