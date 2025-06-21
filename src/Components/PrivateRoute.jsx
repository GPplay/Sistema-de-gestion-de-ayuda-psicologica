import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated, getUserRole } from '../utils/auth'

/**
 * Componente que restringe acceso a rutas según el rol.
 * @param {Array<string>} allowedRoles - Lista de roles que pueden acceder
 */
const PrivateRoute = ({ allowedRoles }) => {
  const auth = isAuthenticated()
  const role = getUserRole()

  if (!auth) {
    return <Navigate to="/login" replace />
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default PrivateRoute