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

    setUserInfo(userName, userInfo) {
        this._profileName.textContent = userName.value
        this._profileAdd.textContent = userInfo.value
    }
}