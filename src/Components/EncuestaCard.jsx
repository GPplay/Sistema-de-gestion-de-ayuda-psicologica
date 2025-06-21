const EncuestaCard = ({ titulo, respuestas }) => (
  <div className="bg-white px-4 py-3 rounded-xl shadow flex justify-between items-center mb-3">
    <p className="font-semibold">Título: {titulo}</p>
    <span className="font-medium text-gray-600">Respuestas: {respuestas}</span>
  </div>
)

export default EncuestaCard