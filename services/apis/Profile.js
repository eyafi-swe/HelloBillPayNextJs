import Api from './defaultapi'


class Profile extends Api {
  constructor(_axios) {
    super(_axios)
  }

  updateProfile(params) {
    return this.put('/update-profile', params)
  }

  changePassword(params) {
    return this.post('/change-password', params)
  }

}

export default Profile