import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const RespuestasEstudiante = () => {
  const navigate = useNavigate()
  const { estudianteId } = useParams()

  // 🧪 Simulación de datos (reemplazar con datos reales de un API o props)
  const respuestas = {
    nombre: 'Diego Guardo',
    respuestaFamiliar1: 'Regular',
    respuestaFamiliar2: 'Bien',
    experiencia1: 'ESTOY EN ESO',
    experiencia2: 'CUANDO FUI A EL PARQUE',
  }

  const opciones = ['Muy mal', 'Mal', 'Regular', 'Bien']

  const renderRespuestaRadio = (pregunta, seleccionada) => (
    <div className="bg-gray-200 p-4 rounded-lg mb-4 shadow">
      <h3 className="font-semibold mb-2">{pregunta}</h3>
      {opciones.map((opcion) => (
        <label key={opcion} className="block mb-1">
          <input type="radio" checked={seleccionada === opcion} readOnly className="mr-2" />
          {opcion}
        </label>
      ))}
    </div>
  )

  const renderText = (pregunta, respuesta) => (
    <div className="bg-gray-200 p-4 rounded-lg mb-4 shadow">
      <h3 className="font-semibold mb-2">{pregunta}</h3>
      <div className="bg-white p-2 rounded-lg min-h-[80px]">
        {respuesta || <i>No respondido</i>}
      </div>
    </div>
  )

  return (
    <div className="w-full p-6 bg-[#f3ebdd] min-h-screen">
      {/* Header con botón de volver */}
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="mr-3 text-2xl font-bold">{'←'}</button>
        <h2 className="text-xl font-bold text-teal-700">
          Clima Escolar - Salud Mental: {respuestas.nombre}
        </h2>
      </div>

      {/* Respuestas */}
      {renderRespuestaRadio('¿Cómo te sientes en tu ambiente familiar?', respuestas.respuestaFamiliar1)}
      {renderRespuestaRadio('¿Cómo te sientes en tu ambiente familiar?', respuestas.respuestaFamiliar2)}
      {renderText('¿Cuál es tu mejor experiencia académica?', respuestas.experiencia1)}
      {renderText('¿Cuál es tu mejor experiencia académica?', respuestas.experiencia2)}
    </div>
  )
}

export default RespuestasEstudiante