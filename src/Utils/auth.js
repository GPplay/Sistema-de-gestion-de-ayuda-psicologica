
export const isAuthenticated = () => {
  return !!localStorage.getItem('token')
}

export const getUserRole = () => {
  return localStorage.getItem('role') // 'rector' o 'estudiante'
}

export const login = (role) => {
  localStorage.setItem('token', 'fake-token')
  localStorage.setItem('role', role)
}

export const logout = () => {
  localStorage.clear()
}