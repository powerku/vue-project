import axios from 'axios'
import product from '@/plugins/api/product.js'

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/'
})

export default {
  install: (app) => {
    Object.assign(axiosInstance, {
      product: product({ axios: axiosInstance })
    })

    app.config.globalProperties.api = axiosInstance
    app.provide('api', axiosInstance)
  }
}
