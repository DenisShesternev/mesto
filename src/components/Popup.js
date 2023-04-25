export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
        this._handleEsc = this._handleEsc.bind(this)
    }

    open() {
        this._popup.classList.add('popup__opened')
        document.addEventListener('keyup', this._handleEsc)
    }

    close() {
        this._popup.classList.remove('popup__opened')
        document.addEventListener('keyup', this._handleEsc)
    }

    _handleEsc(e) {
        if (e.key === 'Escape') {
            this.close()
        }
    }

    _handleOverlay(e) {
        if (e.target.classList.contains('popup__opened')) {
            this.close(e.target)
        }
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close-button')
        .addEventListener('click', () => this.close())
        this._popup.addEventListener('click', this._handleOverlay.bind(this))
    }
}