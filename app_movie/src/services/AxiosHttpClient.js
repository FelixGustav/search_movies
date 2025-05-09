import axios from 'axios'
import { HttpClient } from './HttpClient.js'

export class AxiosHttpClient extends HttpClient {
  async get(url, params = {}) {
    const response = await axios.get(url, { params })
    return response.data
  }
}