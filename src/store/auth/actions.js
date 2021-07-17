import { api } from 'boot/axios'

export function register({commit}, {username, password}) {
  // console.log(username, password)
  // return api.get('/posts')
  //   .then(res => {
  //     return res
  //   })
  //   .catch(err => {
  //     reject(err)
  //   })

  return api.post('/createUser', {
    auth: {
      username,
      password
    }
  })
    .then(res => {
      return res
    })
    .catch(err => {
      reject(err)
    })
}

export function login({commit}, {username, password}) {
  commit('setToken', 'xxxooo')

  console.log(username, password)
  return api.post('/getToken', {
    auth: {
      username,
      password
    }
  })
    .then(res => {
      commit('setToken', res.data)
    })
    .catch(err => {
      reject(err)
    })
}

export function logout(/* context */) {
}