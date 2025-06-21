import { useState } from "react"

import Sidebar from "../../Components/Sidebar"
import InfoCard from "../../Components/InfoCard"
import EncuestaCard from "../../Components/EncuestaCard"
import SearchBar from "../../Components/SearchBar"
import CreateButton from "../../Components/CreateButton"

const encuestas = [
  { titulo: "Familia", respuestas: 10 },
  { titulo: "Casa", respuestas: 10 },
  { titulo: "Salud Mental", respuestas: 10 },
  { titulo: "Sentimientos", respuestas: 10 }
]

const DashboardRector = () => {
  const [filtro, setFiltro] = useState("")

  const encuestasFiltradas = encuestas.filter((e) =>
    e.titulo.toLowerCase().includes(filtro.toLowerCase())
  )


  return (
    <div className="flex h-screen overflow-hidden bg-[#f2ebdc]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6">
        <h1 className="text-center text-3xl font-bold text-teal-800 mb-6">
          Inicio
        </h1>

        {/* Cards de resumen */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <InfoCard label="Total de alumnos" value="120" />
          <InfoCard label="Encuestas realizadas" value="30" />
          <InfoCard label="Respuestas de Alumnos" value="130" />
        </div>

        {/* Buscador + Lista */}
        <div className="max-w-2xl mx-auto">
          <SearchBar onChange={(e) => setFiltro(e.target.value)} />
          <div className="overflow-y-auto max-h-[300px] pr-2">
            {encuestasFiltradas.map((e, i) => (
              <EncuestaCard
                key={i}
                titulo={e.titulo}
                respuestas={e.respuestas}
              />
            ))}
          </div>
        </div>

        {/* Botón crear encuesta */}
        <CreateButton to="/rector/dashboard/crear-encuesta">
          Crear encuesta
        </CreateButton>
      </main>
    </div>
  )
}

export default DashboardRector