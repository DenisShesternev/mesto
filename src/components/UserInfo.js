export default class UserInfo {
    constructor(userSelectors) {
        this._profileName = document.querySelector(userSelectors.name)
        this._profileAdd = document.querySelector(userSelectors.info)
    }

    getUserInfo() {
        this._userData = {
            name: this._profileName.textContent,
            info: this._profileAdd.textContent
        }
        return this._userData
    }

    setUserInfo(profileNameInput, profileAddInput) {
        this._profileName.textContent = profileNameInput.value
        this._profileAdd.textContent = profileAddInput.value
    }
}