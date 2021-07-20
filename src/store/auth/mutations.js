export function setAuth (state, auth) {  
  console.log('token', auth)
  state.auth = auth
  localStorage.setItem('inventory-manager-jwt', state.auth.token)
}
