export default class UserInfo {
    constructor({profileName, profileAdd, profileAvatar}) {
        this._profileName = profileName
        this._profileAdd = profileAdd
        this._profileAvatar = profileAvatar
    }

    getUserInfo() {
        const userData = {
            profile: this._profileName.textContent,
            info: this._profileAdd.textContent
        }
        return userData
    }

    setUserAvatar(data) {
        this._profileAvatar.src = data.avatar
    }

    setUserInfo(userData) {
        this._profileName.textContent = userData.name
        this._profileAdd.textContent = userData.about
        this.setUserAvatar(userData)
    }
}