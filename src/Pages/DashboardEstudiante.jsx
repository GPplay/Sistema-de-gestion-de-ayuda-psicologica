import React from "react";

function DashboardEstudiante() {

  const encuestas = Array(5).fill("Esto debe ser dinamico");

  return (
    <div className="bg-[#f9f1dc] min-h-screen p-6">
      <h2 className="text-3xl font-bold text-teal-800 mb-6">Encuestas Pendientes</h2>
      <div className="space-y-4">
        {encuestas.map((titulo, index) => (
          <div
            key={index}
            className="bg-gray-300 rounded-xl p-4 flex items-center justify-between shadow-md"
          >
            <span className="font-semibold text-lg">{titulo}</span>
            <button className="bg-teal-700 text-white font-bold px-6 py-2 rounded-full hover:bg-teal-900 transition">
              Iniciar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardEstudiante;