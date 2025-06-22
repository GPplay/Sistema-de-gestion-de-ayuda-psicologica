import { useNavigate } from 'react-router-dom'

const SmartCard = ({ type, data, onClick }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) return onClick()

    switch (type) {
      case 'estudiante':
        return navigate(`/rector/dashboard/respuestas/estudiante/${data.id}`)
      case 'encuesta':
        return navigate(`/rector/dashboard/respuestas/encuesta/${data.id}`)
      case 'pendiente':
        return navigate('/estudiante/encuesta')
      default:
        return
    }
  }

  const baseCardClass =
    'rounded-xl p-4 shadow transition'

  switch (type) {
    case 'estudiante':
      return (
        <div
          onClick={handleClick}
          className={`bg-white cursor-pointer hover:bg-gray-100 flex justify-between items-center ${baseCardClass}`}
        >
          <span className="font-semibold">Nombre: {data.nombre}</span>
          <span className="font-semibold">Curso: {data.curso}</span>
        </div>
      )

    case 'encuesta':
      return (
        <div
          onClick={handleClick}
          className={`bg-white cursor-pointer hover:bg-gray-100 flex justify-between items-center ${baseCardClass}`}
        >
          <span className="font-semibold">Título: {data.titulo}</span>
          <span className="font-medium text-gray-600">Respuestas: {data.respuestas}</span>
        </div>
      )

    case 'pendiente':
      return (
        <div className={`bg-gray-300 flex justify-between items-center ${baseCardClass}`}>
          <span className="font-semibold text-lg">{data.titulo}</span>
          <button
            onClick={handleClick}
            className="bg-teal-700 text-white font-bold px-6 py-2 rounded-full hover:bg-teal-900 transition"
          >
            Iniciar
          </button>
        </div>
      )

    case 'info':
      return (
        <div className="bg-rose-50 px-4 py-6 rounded-lg text-center shadow w-48">
          <h3 className="text-teal-700 font-bold text-lg mb-1">{data.label}</h3>
          <p className="text-2xl font-semibold">{data.value}</p>
        </div>
      )

    case 'pregunta':
      return (
        <div className="bg-gray-200 p-4 rounded-lg mb-4 shadow">
          <h3 className="font-semibold mb-2">{data.pregunta}</h3>
          {data.tipo === 'texto' ? (
            <textarea
              value={data.value}
              onChange={(e) => data.onChange(e.target.value)}
              placeholder="Escriba su respuesta aquí..."
              className="w-full px-3 py-2 border rounded-xl bg-white"
              rows="4"
            />
          ) : (
            <div className="flex flex-col gap-2">
              {data.opciones.map((opcion, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`pregunta-${data.id}`}
                    value={opcion}
                    checked={data.value === opcion}
                    onChange={() => data.onChange(opcion)}
                  />
                  {opcion}
                </label>
              ))}
            </div>
          )}
        </div>
      )

    case 'editable-question':
      return (
        <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
          {/* Input pregunta */}
          <input
            type="text"
            value={data.question}
            onChange={(e) => data.onChangeText(data.id, e.target.value)}
            placeholder={`Pregunta #${data.index + 1}`}
            className="w-full border rounded-xl px-3 py-2 font-semibold"
          />

          {/* Selector de tipo */}
          <div className="flex items-center gap-2">
            <label className="font-semibold">Tipo:</label>
            <button
              onClick={() => data.onToggleType(data.id)}
              className="px-4 py-1 bg-teal-600 text-white rounded-full hover:bg-teal-800"
            >
              {data.type === 'options' ? 'Opciones' : 'Texto Libre'}
            </button>
          </div>

          {/* Opciones si aplica */}
          {data.type === 'options' && (
            <div className="space-y-2">
              {data.options.map((opcion, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={opcion}
                    onChange={(e) => data.onChangeOption(data.id, i, e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-lg"
                    placeholder={`Opción #${i + 1}`}
                  />
                  <button
                    onClick={() => data.onRemoveOption(data.id, i)}
                    className="text-red-600 hover:text-red-800 font-bold"
                  >
                    ✖
                  </button>
                </div>
              ))}
              <button
                onClick={() => data.onAddOption(data.id)}
                className="mt-2 text-sm text-teal-700 hover:underline"
              >
                + Agregar opción
              </button>
            </div>
          )}

          {/* Botón eliminar pregunta */}
          <div className="text-right">
            <button
              onClick={() => data.onDelete(data.id)}
              className="text-red-700 font-semibold hover:underline"
            >
              Eliminar pregunta
            </button>
          </div>
        </div>
      )

    default:
      return <div className="text-red-500">Tipo de tarjeta no soportado</div>
  }
}

export default SmartCard
