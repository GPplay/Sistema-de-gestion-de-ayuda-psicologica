import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../Utils/auth'

function Login() {
  const [tipoUsuario, setTipoUsuario] = useState('Estudiante')
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const role = tipoUsuario.toLowerCase() // 'rector' o 'estudiante'

    // 🔐 Simulación de login
    login(role)

    // 🔁 Redirigir según el tipo de usuario
    if (role === 'rector') {
      navigate('/rector/dashboard')
    } else {
      navigate('/estudiante/dashboard')
    }
  }

  return (
    <div className="bg-[#f9f1dc] min-h-screen flex flex-col items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-t-3xl rounded-b-xl shadow-xl p-6 w-full max-w-sm"
      >
        <h2 className="text-center text-lg font-bold mb-4">Iniciar sesión</h2>

        <div className="mb-4">
          <label className="block text-center font-bold mb-1">Tipo de usuario</label>
          <select
            className="w-full border rounded-xl px-3 py-2 text-center font-semibold"
            value={tipoUsuario}
            onChange={(e) => setTipoUsuario(e.target.value)}
          >
            <option value="Estudiante">Estudiante</option>
            <option value="Rector">Rector</option>
          </select>
        </div>

        <input
          type="email"
          placeholder="Correo"
          className="w-full mb-4 border rounded-full px-4 py-2 placeholder-gray-500"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-4 border rounded-full px-4 py-2 placeholder-gray-500"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full mt-2 bg-teal-700 text-white text-lg font-semibold px-8 py-3 rounded-2xl hover:bg-teal-900 transition"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}

export default Login