import { useState } from 'react'

import InputField from '../Components/InputField'
import HeaderBack from '../Components/HeaderBack'

const Configuracion = () => {
  const [nombre] = useState('María Bonfante') // Idealmente vendrá de contexto/API
  const [emailActual, setEmailActual] = useState('')
  const [emailNuevo, setEmailNuevo] = useState('')
  const [passwordActual, setPasswordActual] = useState('')
  const [passwordNueva, setPasswordNueva] = useState('')

  const [fotoUrl] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png ')

  const handleGuardar = () => {
    const datos = {
      nombre,
      emailActual,
      emailNuevo,
      passwordActual,
      passwordNueva,
    }

    console.log('Datos actualizados:', datos)
    alert('Configuración guardada ✅')
  }

  return (
    <div className="bg-[#f3ebdd] min-h-screen p-6">
      <HeaderBack title="Configuración" />

      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center gap-6">
        {/* Avatar + nombre */}
        <div className="text-center">
          <div className="w-20 h-20 bg-purple-200 rounded-full mx-auto flex items-center justify-center overflow-hidden">
            {fotoUrl ? (
              <img
                src={fotoUrl}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-2xl text-blue-700">poner foto</span>
            )}
          </div>
          {/*poner una foto predeterminada*/}
          <p className="mt-2 font-bold text-lg">{nombre}</p>
        </div>
        
        {/* Campos */}
        <div className="w-full space-y-3">
          <InputField
            label="Correo Actual"
            value={emailActual}
            onChange={(e) => setEmailActual(e.target.value)}
          />
          <InputField
            label="Nuevo Correo"
            value={emailNuevo}
            onChange={(e) => setEmailNuevo(e.target.value)}
          />
          <InputField
            label="Contraseña Actual"
            type="password"
            value={passwordActual}
            onChange={(e) => setPasswordActual(e.target.value)}
          />
          <InputField
            label="Nueva Contraseña"
            type="password"
            value={passwordNueva}
            onChange={(e) => setPasswordNueva(e.target.value)}
          />
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleGuardar}
          className="bg-teal-700 text-white px-8 py-2 rounded-full shadow-md hover:bg-teal-800 transition"
        >
          Guardar Configuración
        </button>
      </div>
    </div>
  )
}

export default Configuracion