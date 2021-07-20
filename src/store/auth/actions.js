import { api } from 'boot/axios'

export function register({commit}, {username, password}) { 
  return api.post('/createUser', {
    auth: {
      username,
      password
    },
    data: {
      accountName: 'test'
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
  console.log('logging in with:', username, password)
  return api.post('/getToken', {
    auth: {
      username,
      password
    }
  })
    .then(res => {
      const auth = {
        username,
        token: res.data
      }
      commit('setAuth', auth)
    })
    .catch(err => {
      return(err)
    })
}

export function logout(/* context */) {
}