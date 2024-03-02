import Api from './defaultapi'


class FAQ extends Api {
  constructor(_axios) {
    super(_axios)
  }

  getFAQ() {
    return this.get('/faqs')
  }

  getFeaturedFAQ() {
    return this.get('/faqs/featured')
  }

  getFAQDetailsById(id) {
    return this.get(`/faqs/${id}`)
  }

  faqsLikeOrDislike(params) {
    return this.post('/faqs/like-dislike', params)
  }

}

export default FAQ