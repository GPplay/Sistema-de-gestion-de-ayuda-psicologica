import { useNavigate } from 'react-router-dom'

const SmartCard = ({ type, data }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (type === 'estudiante') {
      navigate(`/rector/dashboard/respuestas/estudiante/${data.id}`)
    } else if (type === 'encuesta') {
      navigate(`/rector/dashboard/respuestas/encuesta/${data.id}`)
    }
  }

  const baseCardClass =
    'bg-white rounded-xl p-4 shadow-lg cursor-pointer hover:bg-gray-100 transition'

  switch (type) {
    case 'estudiante':
      return (
        <div onClick={handleClick} className={baseCardClass + ' flex justify-between items-center'}>
          <span className="font-semibold">Nombre: {data.nombre}</span>
          <span className="font-semibold">Curso: {data.curso}</span>
        </div>
      )

    case 'encuesta':
      return (
        <div onClick={handleClick} className={baseCardClass + ' flex justify-between items-center'}>
          <span className="font-semibold">Título: {data.titulo}</span>
          <span className="font-medium text-gray-600">Respuestas: {data.respuestas}</span>
        </div>
      )

    case 'info':
      return (
        <div className="bg-rose-50 px-4 py-6 rounded-lg text-center shadow w-48">
          <h3 className="text-teal-700 font-bold text-lg mb-1">{data.label}</h3>
          <p className="text-2xl font-semibold">{data.value}</p>
        </div>
      )

    default:
      return <div className="text-red-500">Tipo de tarjeta no soportado</div>
  }
}

export default SmartCard