import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function RegistroOrganizacion() {

  const [numeroId, setNumeroId] = useState('');

  const handleNumeroChange = (e) => {
    const valor = e.target.value;
    // Elimina todo lo que no sean números
    const soloNumeros = valor.replace(/\D/g, '');
    setNumeroId(soloNumeros);
  };


    const [tipoId, setTipoId] = useState('CC');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías hacer envío a una API
    console.log('Formulario enviado');
  };


    return(
        <div className="bg-[#f9f1dc] min-h-screen p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-teal-800 mb-6">Organización</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-4xl space-y-6">
        {/* Sección 1: Datos del rector */}
        <div className="bg-gray-300 p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-bold mb-1">Nombre de Rector</label>
            <input className="bg-white rounded-lg px-4 py-2" type="text" required />
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-1">Apellido</label>
            <input className="bg-white rounded-lg px-4 py-2" type="text" required />
          </div>

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

          <div className="flex flex-col">
            <label className="font-bold mb-1">Número de Identificación</label>
                <input
                    className="bg-white rounded-lg px-4 py-2"
                    type="text"
                    value={numeroId}
                    onChange={handleNumeroChange}
                    required
                />
            </div>

          <div className="flex flex-col">
            <label className="font-bold mb-1">Email</label>
            <input className="bg-white rounded-lg px-4 py-2" type="text" required />
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-1">Contraseña</label>
            <input className="bg-white rounded-lg px-4 py-2" type="password" required />
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-1">Confirmar Contraseña</label>
            <input className="bg-white rounded-lg px-4 py-2" type="password" required />
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-1">Teléfono</label>
            <input className="bg-white rounded-lg px-4 py-2" type="tel" required />
          </div>
        </div>

        {/* Sección 2: Datos de la organización */}
        <div className="bg-gray-300 p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-bold mb-1">Nombre de Organización</label>
            <input className="bg-white rounded-lg px-4 py-2" type="text" required />
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-1">NIT</label>
            <input className="bg-white rounded-lg px-4 py-2" type="text" required />
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-1">Razón Social</label>
            <input className="bg-white rounded-lg px-4 py-2" type="text" required />
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-1">Email</label>
            <input className="bg-white rounded-lg px-4 py-2" type="email" required />
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-1">URL del Sitio Web (Opcional)</label>
            <input className="bg-white rounded-lg px-4 py-2" type="url" />
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-1">Dirección</label>
            <input className="bg-white rounded-lg px-4 py-2" type="text" required />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-900 transition flex items-center gap-2"
          >
            Registrar
            <span className="text-xl">📤</span>
          </button>
        </div>
      </form>
    </div>
    );
}

export default RegistroOrganizacion;