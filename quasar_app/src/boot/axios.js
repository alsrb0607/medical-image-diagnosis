// API와 연결할 수 있도록 설정
import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
// const api = axios.create({ baseURL: 'https://api.example.com' })

// const ipAdress = 'http://localhost:'
const ipAdress = 'http://192.168.1.95:'

const api = axios.create({ baseURL: ipAdress + '5000' })
const api_brain = axios.create({ baseURL: ipAdress + '5001' })
const api_skin = axios.create({ baseURL: ipAdress + '5002' })
const apiDB = axios.create({ baseURL: ipAdress + '3030' })

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  app.config.globalProperties.$api = api_brain
  app.config.globalProperties.$api = api_skin
  app.config.globalProperties.$api = apiDB
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { axios, api, api_brain, api_skin, apiDB }
