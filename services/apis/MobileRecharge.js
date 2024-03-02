import Api from './defaultapi'


class MobileRecharge extends Api {
  constructor(_axios) {
    super(_axios)
  }

  storeMobileRecharge(params) {
    return this.post('/mobile-recharge/store', params)
  }

}

export default MobileRecharge