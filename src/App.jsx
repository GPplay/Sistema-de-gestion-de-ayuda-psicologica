import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import PrivateRoute from './Components/PrivateRoute'
import NotFound from './Pages/NotFound'

// Públicas
import Login from './Pages/Login'
import LandingPage from './Pages/LandingPage'
import RegistroOrganizacion from './Pages/RegistroOrganizacion'

// Rector
import DashboardRector from './Pages/Rector/DashboardRector'
import RegistroEstudiante from './Pages/Rector/RegistroEstudiante'

// Estudiante
import DashboardEstudiante from './Pages/Estudiante/DashboardEstudiante'
import Encuestas from './Pages/Estudiante/Encuestas'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Públicas */}
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="registro/organizacion" element={<RegistroOrganizacion />} />

          {/* Rector (privado) */}
          <Route element={<PrivateRoute allowedRoles={['rector']} />}>
            <Route path="rector/dashboard" element={<DashboardRector />} />
            <Route path="rector/registro/estudiante" element={<RegistroEstudiante />} />
          </Route>

          {/* Estudiante (privado) */}
          <Route element={<PrivateRoute allowedRoles={['estudiante']} />}>
            <Route path="estudiante/dashboard" element={<DashboardEstudiante />} />
            <Route path="estudiante/encuestas" element={<Encuestas />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


/*
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<About />} />
          </Route>
        </Routes>
    </Router>
  )
}


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<LandingPage />} />
            <Route path="registro" element={<LandingPage />} />
          </Route>
        </Routes>
    </Router>
  )
}*/