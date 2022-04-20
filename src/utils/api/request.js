import axios from 'axios'

const request = axios.create({
  baseURL: 'https://qcb559.api.cloudendpoint.cn',
})
export default request