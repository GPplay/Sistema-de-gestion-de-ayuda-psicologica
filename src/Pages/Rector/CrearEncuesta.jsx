import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import InputField from '../../Components/InputField'
import PreguntaCard from '../../Components/PreguntaCard'

const CrearEncuesta = () => {
  const [surveyTitle, setSurveyTitle] = useState('')
  const [questions, setQuestions] = useState([])

  const navigate = useNavigate()

  const handleAddQuestion = () => {
    const newQuestion = {
      id: uuidv4(),
      question: '',
      type: 'options',
      options: ['', '']
    }
    setQuestions([...questions, newQuestion])
  }

  const updateQuestion = (id, updater) => {
    setQuestions(prev =>
      prev.map(q => (q.id === id ? updater(q) : q))
    )
  }

  const handleChangeQuestionText = (id, value) => {
    updateQuestion(id, q => ({ ...q, question: value }))
  }

  const handleChangeOption = (qid, index, value) => {
    updateQuestion(qid, q => {
      const updatedOptions = [...q.options]
      updatedOptions[index] = value
      return { ...q, options: updatedOptions }
    })
  }

  const handleAddOption = (qid) => {
    updateQuestion(qid, q => ({
      ...q,
      options: [...q.options, '']
    }))
  }

  const handleRemoveOption = (qid, index) => {
    updateQuestion(qid, q => ({
      ...q,
      options: q.options.filter((_, i) => i !== index)
    }))
  }

  const handleToggleQuestionType = (id) => {
    updateQuestion(id, q => {
      const newType = q.type === 'options' ? 'text' : 'options'
      return {
        ...q,
        type: newType,
        options: newType === 'options' ? ['', ''] : []
      }
    })
  }

  const handleDeleteQuestion = (id) => {
    setQuestions(prev => prev.filter(q => q.id !== id))
  }

  const handleFinishSurvey = () => {
    alert(`Encuesta "${surveyTitle}" creada con ${questions.length} preguntas ✅`)
    navigate('/rector/dashboard')
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

        {/* Listado de preguntas */}
        <div className="mt-6 space-y-6">
          {questions.map((q, index) => (
            <PreguntaCard
              key={q.id}
              pregunta={q}
              index={index}
              onChangeText={handleChangeQuestionText}
              onChangeOption={handleChangeOption}
              onAddOption={handleAddOption}
              onRemoveOption={handleRemoveOption}
              onToggleType={handleToggleQuestionType}
              onDelete={handleDeleteQuestion}
            />
          ))}
        </div>

        {/* Botones de control */}
        <div className="mt-6 flex justify-between items-center">
          <button
            type="button"
            onClick={handleAddQuestion}
            className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-900 transition"
          >
            Agregar pregunta
          </button>

          <button
            onClick={handleFinishSurvey}
            type="button"
            className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-900 transition"
          >
            Terminar encuesta
          </button>
        </div>
      </div>
    </div>
  )
}

export default CrearEncuesta