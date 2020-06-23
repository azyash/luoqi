import axios from 'axios'

export function request(config: any) {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_BASEURL,
    timeout: 10000,
  })

  return instance(config)
}
