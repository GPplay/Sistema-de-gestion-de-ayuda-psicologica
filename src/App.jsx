import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import PrivateRoute from './Components/PrivateRoute'
import NotFound from './Pages/NotFound'

// Públicas
import Login from './Pages/Login'
import LandingPage from './Pages/LandingPage'
import RegistroOrganizacion from './Pages/RegistroOrganizacion'
import Configuracion from './Pages/Configuracion'

// Rector
import DashboardRector from './Pages/Rector/DashboardRector'
import RegistroEstudiante from './Pages/Rector/RegistroEstudiante'
import CrearEncuesta from './Pages/Rector/CrearEncuesta'
import RespuestasEstudiante from './Pages/Rector/RespuestasEstudiante'
import ListadoRespuestas1 from './Pages/Rector/ListadoRespuestas1'

// Estudiante
import DashboardEstudiante from './Pages/Estudiante/DashboardEstudiante'
import Encuesta from './Pages/Estudiante/Encuesta'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Públicas */}
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="registro/organizacion" element={<RegistroOrganizacion />}/>
          <Route path="configuracion" element={<Configuracion />}/>

          {/* Rector (privado) */}
          <Route element={<PrivateRoute allowedRoles={['rector']} />}>
            <Route path="rector/dashboard" element={<DashboardRector />} />
            <Route path="rector/dashboard/registro/estudiante" element={<RegistroEstudiante />} />
            <Route path="rector/dashboard/crear-encuesta" element={<CrearEncuesta />} />
            <Route path="rector/dashboard/respuestas/estudiante/:estudianteId" element={<RespuestasEstudiante />} />
            <Route path="rector/dashboard/respuestas/encuesta/:encuestaId" element={<ListadoRespuestas1 />} />
          </Route>

          {/* Estudiante (privado) */}
          <Route element={<PrivateRoute allowedRoles={['estudiante']} />}>
            <Route path="estudiante/dashboard" element={<DashboardEstudiante />} />
            <Route path="estudiante/encuesta" element={<Encuesta />} />
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