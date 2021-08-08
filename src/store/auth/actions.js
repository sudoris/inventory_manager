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
      return(err)
    })
}

export function login({commit}, {username, password}) {
  // console.log('logging in with:', username, password)
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
      // console.log(res)
      if (!res.data) return false

      const auth = {
        username,
        token: res.data
      }
      commit('setAuth', auth)
    })
    .catch(err => {
      return 'error'
    })
}

export function logout(/* context */) {
}