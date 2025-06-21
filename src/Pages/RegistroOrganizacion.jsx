import { useState } from "react"
import InputField from "../Components/InputField"

function RegistroOrganizacion() {
  const [tipoId, setTipoId] = useState("CC")
  const [numeroId, setNumeroId] = useState("")

  const handleNumeroChange = (e) => {
    const soloNumeros = e.target.value.replace(/\D/g, "")
    setNumeroId(soloNumeros)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Formulario enviado") // Aquí puedes enviar a API
  }

  return (
    <div className="bg-[#f9f1dc] min-h-screen p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-teal-800 mb-6">Organización</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-4xl space-y-6">

        {/* 🔹 Sección 1: Datos del Rector */}
        <div className="bg-gray-300 p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Nombre de Rector" onChange={() => {}} />
          <InputField label="Apellido" onChange={() => {}} />

          <div className="flex flex-col">
            <label className="font-bold mb-1">Identificación</label>
            <select
              className="bg-white rounded-lg px-4 py-2"
              value={tipoId}
              onChange={(e) => setTipoId(e.target.value)}
            >
              <option value="CC">CC</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>

          <InputField
            label="Número de Identificación"
            value={numeroId}
            onChange={handleNumeroChange}
          />

          <InputField label="Email" type="email" onChange={() => {}} />
          <InputField label="Contraseña" type="password" onChange={() => {}} />
          <InputField label="Confirmar Contraseña" type="password" onChange={() => {}} />
          <InputField label="Teléfono" type="tel" onChange={() => {}} />
        </div>

        {/* 🔹 Sección 2: Datos de la organización */}
        <div className="bg-gray-300 p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Nombre de Organización" onChange={() => {}} />
          <InputField label="NIT" onChange={() => {}} />
          <InputField label="Razón Social" onChange={() => {}} />
          <InputField label="Email" type="email" onChange={() => {}} />
          <InputField label="URL del Sitio Web (Opcional)" type="url" onChange={() => {}} />
          <InputField label="Dirección" onChange={() => {}} />
        </div>

        {/* 🔘 Botón de enviar */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-900 transition flex items-center gap-2"
          >
            Registrar <span className="text-xl">📤</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegistroOrganizacion