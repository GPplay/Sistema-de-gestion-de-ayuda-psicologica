import { useState } from 'react'
import RadioGroupField from '../../Components/RadioGropuField'
import TextAreaField from '../../Components/TextAreaField'

const Encuesta = () => {
  const [respuestaFamiliar1, setRespuestaFamiliar1] = useState('')
  const [respuestaFamiliar2, setRespuestaFamiliar2] = useState('')
  const [experienciaAcademica1, setExperienciaAcademica1] = useState('')
  const [experienciaAcademica2, setExperienciaAcademica2] = useState('')

  const opciones = ['Muy mal', 'Mal', 'Regular', 'Bien']

  const handleSubmit = (e) => {
    e.preventDefault()

    const respuestas = {
      ambienteFamiliar1: respuestaFamiliar1,
      ambienteFamiliar2: respuestaFamiliar2,
      mejorExperiencia1: experienciaAcademica1,
      mejorExperiencia2: experienciaAcademica2,
    }

    console.log('Respuestas enviadas:', respuestas)
    alert('¡Encuesta enviada!')
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#f3ebdd] p-6">
      <div className="w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-teal-700">
          Estudiante: Gybram Llamas
        </h2>

        <form onSubmit={handleSubmit}>
          <RadioGroupField
            pregunta="¿Cómo te sientes en tu ambiente familiar?"
            name="ambienteFamiliar1"
            selected={respuestaFamiliar1}
            setSelected={setRespuestaFamiliar1}
            opciones={opciones}
          />

          <RadioGroupField
            pregunta="¿Cómo es la relación con tus familiares en casa?"
            name="ambienteFamiliar2"
            selected={respuestaFamiliar2}
            setSelected={setRespuestaFamiliar2}
            opciones={opciones}
          />

          <TextAreaField
            pregunta="¿Cuál ha sido tu mejor experiencia académica?"
            value={experienciaAcademica1}
            setValue={setExperienciaAcademica1}
          />

          <TextAreaField
            pregunta="¿Qué otro momento académico recuerdas con alegría?"
            value={experienciaAcademica2}
            setValue={setExperienciaAcademica2}
          />

          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-full font-semibold transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Encuesta