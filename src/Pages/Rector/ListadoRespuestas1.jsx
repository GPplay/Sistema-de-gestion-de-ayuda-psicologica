import { useState } from 'react'

import SearchBar from '../../Components/SearchBar'
import CreateButton from '../../Components/CreateButton'
import SmartCard from '../../Components/SmartCard'

const ListadoRespuestas1 = () => {
  const [busqueda, setBusqueda] = useState('')

  const estudiantes = [
    { id: '1', nombre: 'Diego Guardo', curso: 8 },
    { id: '2', nombre: 'Ana Torres', curso: 7 },
    { id: '3', nombre: 'Luis Pérez', curso: 9 },
    { id: '4', nombre: 'Daniela Ruiz', curso: 6 },
  ]

  const estudiantesFiltrados = estudiantes.filter((est) =>
    est.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#f3ebdd] p-6">
      <header className="text-center mb-4">
        <h2 className="text-2xl font-bold text-teal-700">FAMILIA</h2>
      </header>

      <div className="bg-white rounded-xl p-4 shadow-lg mb-6 max-w-2xl mx-auto">
        <SearchBar onChange={(e) => setBusqueda(e.target.value)} />
        {busqueda && (
          <div
            className="text-right mt-2 text-sm text-gray-500 cursor-pointer"
            onClick={() => setBusqueda('')}
          >
            Limpiar búsqueda
          </div>
        )}
      </div>

      <div className="space-y-4 max-w-2xl mx-auto">
        {estudiantesFiltrados.map((est) => (
          <SmartCard key={est.id} type="estudiante" data={est} />
        ))}
        {estudiantesFiltrados.length === 0 && (
          <p className="text-center text-gray-500">No se encontraron coincidencias.</p>
        )}
      </div>

      <CreateButton to="/rector/dashboard/crear-encuesta">
        Crear encuesta
      </CreateButton>
    </div>
  )
}

export default ListadoRespuestas1
