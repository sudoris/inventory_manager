import Vue from 'vue'
import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:8090'})
// const api = axios.create({ baseURL: 'http://18.118.0.171:8090'})
// const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com'})

Vue.prototype.$api = api

export { axios, api }
