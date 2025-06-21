import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import InputField from '../../Components/InputField'
import FormButtons from '../../Components/FromButtons'

const CrearEncuesta = () => {
  const [surveyTitle, setSurveyTitle] = useState('')
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState('')
  const [responseMode, setResponseMode] = useState('options')
  const [options, setOptions] = useState(['', ''])

  const navigate = useNavigate()

  const handleAddOption = () => {
    setOptions([...options, ''])
  }

  const handleOptionChange = (index, value) => {
    const newOptions = [...options]
    newOptions[index] = value
    setOptions(newOptions)
  }

  const handleAddQuestion = () => {
    if (!currentQuestion.trim()) return

    const newQuestion = {
      question: currentQuestion,
      type: responseMode,
      options: responseMode === 'options' ? options.filter(opt => opt.trim()) : [],
    }

    setQuestions([...questions, newQuestion])
    setCurrentQuestion('')
    setOptions(['', ''])
    setResponseMode('options')
  }

  const handleFinishSurvey = () => {
    console.log({
      title: surveyTitle,
      questions,
    })
    navigate('/rector/dashboard')
  }

  const handleModeChange = () => {
    setResponseMode(responseMode === 'options' ? 'text' : 'options')
  }

  return (
    <div className="p-8 bg-[#f2ebdc] min-h-screen">
      <h1 className="text-3xl font-bold text-center text-teal-800 mb-6">Crear Encuesta</h1>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
        <InputField
          label="Título de la Encuesta"
          value={surveyTitle}
          onChange={(e) => setSurveyTitle(e.target.value)}
        />

        <hr className="my-6 border-gray-300" />

        <InputField
          label="Pregunta"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
        />

        {responseMode === 'options' ? (
          <div className="mb-4">
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <input type="radio" disabled />
                <input
                  type="text"
                  placeholder={`Opción ${index + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  className="p-2 border rounded w-full"
                />
              </div>
            ))}
            <button
              onClick={handleAddOption}
              type="button"
              className="bg-gray-300 px-4 py-1 rounded hover:bg-gray-400"
            >
              Agregar opción
            </button>
          </div>
        ) : (
          <textarea
            placeholder="Respuesta libre..."
            disabled
            className="w-full p-2 rounded border mb-4"
            rows="4"
          />
        )}

        <div className="flex gap-3 mb-6">
          <button
            onClick={handleModeChange}
            type="button"
            className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-800"
          >
            Cambiar a {responseMode === 'options' ? 'texto' : 'opciones'}
          </button>

          <button
            onClick={handleAddQuestion}
            type="button"
            className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-900 transition"
          >
            Agregar pregunta
          </button>
        </div>

        <button
          onClick={handleFinishSurvey}
          type="button"
          className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-900 transition w-full"
        >
          Terminar encuesta
        </button>
      </div>

      <div className="mt-10 max-w-3xl mx-auto">
        <FormButtons
          onUpload={() => alert('Funcionalidad de subir Excel')}
          onRegister={() => navigate('/rector/dashboard/registro/estudiante')}
        />
      </div>
    </div>
  )
}

export default CrearEncuesta