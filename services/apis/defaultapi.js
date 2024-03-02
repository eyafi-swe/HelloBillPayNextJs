class Api {
  constructor(_axios, _prefix = '') {
    this.axios = _axios
    this.prefix = _prefix
  }

  get(url, params = {}) {
    return this.axios
      .get(`${this.prefix}${url}`, {
        params,
      })
      .then((res) => res.data)
  }

  post(url, params = {}) {
    return this.axios.post(`${this.prefix}${url}`, params).then((res) => {
      return res.data
    })
  }

  put(url, params = {}) {
    return this.axios.put(`${this.prefix}${url}`, params).then((res) => res.data)
  }

  delete(url, params = {}) {
    return this.axios
      .delete(`${this.prefix}${url}`, {
        params,
      })
      .then((res) => res.data)
  }

  // postFormData(url, params = {}) {
  //   const headers = {
  //     'Content-Type': 'multipart/form-data',
  //     Accept: 'application/json',
  //   }
  //   // eslint-disable-next-line no-undef
  //   const formData = new FormData()

  //   for (const key in params) {
  //     if (Array.isArray(params[key])) {
  //       params[key].forEach((item, i) => {
  //         if (typeof item === 'object') {
  //           for (let itemKey in item) {
  //             formData.append(`${key}[${i}][${itemKey}]`, item[itemKey])
  //           }
  //         }
  //       })
  //     } else {
  //       if (typeof params[key] === 'boolean') {
  //         params[key] = params[key] ? 1 : 0
  //       }

  //       formData.append(key, params[key])
  //     }
  //   }

  //   return this.axios
  //     .post(`${this.prefix}${url}`, formData, {
  //       headers,
  //     })
  //     .then((res) => res.data)
  // }
}

export default Api
