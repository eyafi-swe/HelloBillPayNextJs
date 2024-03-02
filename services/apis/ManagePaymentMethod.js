import Api from './defaultapi'


class ManagePaymentMethod extends Api {
  constructor(_axios) {
    super(_axios)
  }

  addBankAccount(params) {
    return this.post('/bank-account/store', params)
  }

  addCard(params) {
    return this.post('/card-account/store', params)
  }

  getSavedPaymentMethods() {
    return this.get('/all-payment-account')
  }

  makeDefaultPaymentMethod(params) {
    return this.put('/change-default-payment-account', params)
  }

  deletePaymentMethod(params) {
    return this.delete('/delete-payment-account', params)
  }

}

export default ManagePaymentMethod