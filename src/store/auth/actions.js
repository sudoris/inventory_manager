import { api } from 'boot/axios'

export function register({commit}, {username, password}) { 
  return api.post('/createUser', 
    {
      accountName: 'test'
    },
    {
      auth: {
        username,
        password
    }  
  })
    .then(res => {      
      return res
    })
    .catch(err => {      
      throw new Error(err)
    })
}

export function login({commit}, {username, password}) {
  return api.post('/getToken', 
    {
      accountName: 'test'
    },
    {
      auth: {
        username,
        password
    }  
  })
    .then(res => {
      if (!res.data) return false

      const auth = {
        username,
        token: res.data
      }
      commit('setAuth', auth)
    })
    .catch(err => {
      throw new Error(err)
    })
}

export function logout(/* context */) {
}