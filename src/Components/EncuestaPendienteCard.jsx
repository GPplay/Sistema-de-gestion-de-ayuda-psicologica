import { useNavigate } from 'react-router-dom'

const EncuestaPendienteCard = ({ titulo }) => {
  const navigate = useNavigate()

  return (
    <div className="bg-gray-300 rounded-xl p-4 flex items-center justify-between shadow-md">
      <span className="font-semibold text-lg">{titulo}</span>
      <button
        onClick={() => navigate('/estudiante/encuesta')}
        className="bg-teal-700 text-white font-bold px-6 py-2 rounded-full hover:bg-teal-900 transition"
      >
        Iniciar
      </button>
    </div>
  )
}

export default EncuestaPendienteCard