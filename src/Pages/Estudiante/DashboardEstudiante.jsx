import SmartCard from '../../Components/SmartCard'

const DashboardEstudiante = () => {
  const encuestas = Array(100).fill("Esto debe ser dinámico")

  return (
    <div className="bg-[#f9f1dc] min-h-screen p-6">
      <h2 className="text-3xl font-bold text-teal-800 mb-6">Encuestas Pendientes</h2>
      <div className="space-y-4">
        {encuestas.map((titulo, index) => (
          <SmartCard key={index} type="pendiente" data={{ titulo }} />

        ))}
      </div>
    </div>
  )
}

export default DashboardEstudiante