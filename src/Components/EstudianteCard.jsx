import { useNavigate } from 'react-router-dom'

const EstudianteCard = ({ id, nombre, curso }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/rector/dashboard/respuestas/estudiante/${id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl p-4 shadow-lg cursor-pointer flex justify-between items-center hover:bg-gray-100 transition"
    >
      <span className="font-semibold">Nombre: {nombre}</span>
      <span className="font-semibold">Curso: {curso}</span>
    </div>
  )
}

export default EstudianteCard