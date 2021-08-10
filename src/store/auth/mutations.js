export function setAuth (state, auth) {  
  state.auth = auth
  localStorage.setItem('inventory-manager-jwt', state.auth.token)
}

export function logout (state) {  
  state.auth = null
}



