import Api from './defaultapi'


class Auth extends Api {
  constructor(_axios) {
    super(_axios)
  }

  registration(params) {
    return this.post('/register', params)
  }
}

export default Auth