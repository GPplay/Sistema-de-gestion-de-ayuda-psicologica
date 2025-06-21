import { useState } from "react"
import InputField from "../../Components/InputField"
import FormButtons from "../../Components/FromButtons"
import Sidebar from "../../Components/Sidebar"

const RegistroEstudiante = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contrasena: "",
    identificacion: "",
    telefono: "",
    curso: "",
    lugarNacimiento: "",
    fechaNacimiento: "",
    sexo: "",
    eps: ""
  })

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
  }

  const handleRegister = () => {
    console.log("Datos del estudiante:", form)
    alert("Estudiante registrado (simulado)")
  }

  const handleUpload = () => {
    alert("Subida de Excel aún no implementada")
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#f2ebdc]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6">
        <h1 className="text-center text-3xl font-bold text-teal-800 mb-6">
          Registrar Estudiante
        </h1>

        <div className="bg-gray-200 rounded-2xl shadow p-6 max-w-2xl mx-auto">
          <InputField label="Nombre" value={form.nombre} onChange={handleChange("nombre")} />
          <InputField label="Apellido" value={form.apellido} onChange={handleChange("apellido")} />
          <InputField label="Email" value={form.email} onChange={handleChange("email")} type="email" />
          <InputField label="Contraseña" value={form.contrasena} onChange={handleChange("contrasena")} type="password" />
          <InputField label="Identificación" value={form.identificacion} onChange={handleChange("identificacion")} />
          <InputField label="Teléfono" value={form.telefono} onChange={handleChange("telefono")} />
          <InputField label="Curso" value={form.curso} onChange={handleChange("curso")} />
          <InputField label="Lugar de nacimiento" value={form.lugarNacimiento} onChange={handleChange("lugarNacimiento")} />
          <InputField label="Fecha de nacimiento" value={form.fechaNacimiento} onChange={handleChange("fechaNacimiento")} type="date" />
          <InputField label="Sexo" value={form.sexo} onChange={handleChange("sexo")} />
          <InputField label="EPS" value={form.eps} onChange={handleChange("eps")} />
          
          <FormButtons onRegister={handleRegister} onUpload={handleUpload} />
        </div>
      </main>
    </div>
  )
}

export default RegistroEstudiante