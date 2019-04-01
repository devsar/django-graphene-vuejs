import axios from 'axios'

var drf = axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000
})

export default {
  drf
}
