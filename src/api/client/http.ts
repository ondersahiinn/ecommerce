
import axios from 'axios'

let instance = axios.create({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  }
})

instance.interceptors.request.use((config) => {
  const apiToken = localStorage.getItem('access_token')
  config.headers = {
    Authorization: `Bearer ${apiToken}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  return response;
}, error => {

  console.log('interceptor', error);
  if (error.response.status === 401) {
    console.log(error.response.status)
  }
  if (error.response) {
    return error.response.data;
  } else {
    return Promise.reject(error)
  }
})

export const http = instance