export function setToken (state, token) {  
  state.token = token
  localStorage.setItem('inventory-manager-jwt', state.token)
}
