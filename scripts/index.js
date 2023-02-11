let profileEdit = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup')
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_add');
let profileName = document.querySelector('.profile__name');
let profileAdd = document.querySelector('.profile__add');

// функция равенства полей на странице и в popup

function initializePopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileAdd.textContent;
}
initializePopup();

// функция открытия popup

function open() {
    popup.classList.add('popup__opened');
}
profileEdit.addEventListener('click', open);

// функция закрытия popup

function close() {
    popup.classList.remove('popup__opened');
}
closePopup.addEventListener('click', close);

//функция отправки формы

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAdd.textContent = jobInput.value;

    close();
}

formElement.addEventListener('submit', handleFormSubmit);
