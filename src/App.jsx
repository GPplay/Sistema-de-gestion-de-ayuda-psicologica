import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import DashboardEstudiante  from './Pages/DashboardEstudiante.jsx'
import DashboardProfesor    from './Pages/DashboardProfesor.jsx'
import Encuestas            from './Pages/Encuestas.jsx'
import LandingPage          from './Pages/LandingPage.jsx'
import Login                from './Pages/Login.jsx'
import RegistroEstudiante   from './Pages/RegistroEstudiante.jsx'
import RegistroOrganizacion from './Pages/RegistroOrganizacion.jsx'
import Navbar               from './Components/navBar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro/estudiante" element={<RegistroEstudiante />} />
        <Route path="/registro/organizacion" element={<RegistroOrganizacion />} />
        <Route path="/dashboard/estudiante" element={<DashboardEstudiante />} />
        <Route path="/dashboard/profesor" element={<DashboardProfesor />} />
        <Route path="/encuestas" element={<Encuestas />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App