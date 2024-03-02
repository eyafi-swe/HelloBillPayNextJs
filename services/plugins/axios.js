import axios from "axios";

// export default axios.create({
//   baseURL: "http://18.208.156.8:8000/api",
//   headers: {
//     "Content-type": "application/json"
//   }
// });

axios.defaults.baseURL = "http://18.208.156.8:8000/api"
axios.defaults.headers.common = {
  Accept: 'application/json',
}

export const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}


export default axios