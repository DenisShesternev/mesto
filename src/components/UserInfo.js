export default class UserInfo {
    constructor({profileName, profileAdd}) {
        this._profileName = profileName
        this._profileAdd = profileAdd
    }

    getUserInfo() {
        const userData = {
            profile: this._profileName.textContent,
            info: this._profileAdd.textContent
        }
        return userData
    }

    setUserInfo(userData) {
        this._profileName.textContent = userData.profile
        this._profileAdd.textContent = userData.info
    }
}