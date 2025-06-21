import { useNavigate } from 'react-router-dom'

const EncuestaCard = ({ id, titulo, respuestas }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/rector/dashboard/respuestas/encuesta/${id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white px-4 py-3 rounded-xl shadow flex justify-between items-center mb-3 cursor-pointer hover:bg-gray-100 transition"
    >
      <p className="font-semibold">Título: {titulo}</p>
      <span className="font-medium text-gray-600">Respuestas: {respuestas}</span>
    </div>
  )
}

export default EncuestaCard