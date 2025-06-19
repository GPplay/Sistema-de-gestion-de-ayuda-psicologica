import { Link } from 'react-router-dom';
import logo from '../assets/LogoA.svg';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Contenido principal */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#f5eddd]">
        {/* Imagen central responsive */}
        <div className="md:col-span-2 flex justify-center items-center bg-gray-200 rounded-lg p-4">
          <img
            src={logo}
            alt="Logo Apoyo Psicológico"
            className="max-w-full h-auto object-contain"
            style={{ maxHeight: '300px' }} // Ajusta la altura máxima según sea necesario
          />
        </div>

        {/* Misión */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-center text-lg font-bold bg-gray-300 rounded-t-md py-2">MISIÓN</h2>
          <p className="mt-4 text-sm text-justify">
            Desarrollar e implementar un sistema integral de gestión para los servicios de atención psicológica y emocional en instituciones educativas, que permita automatizar el registro, seguimiento y análisis de casos, promoviendo una intervención oportuna, eficiente y confidencial, con el fin de fortalecer el bienestar psicosocial y la convivencia escolar de toda la comunidad educativa.
          </p>
        </div>

        {/* Visión */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-center text-lg font-bold bg-gray-300 rounded-t-md py-2">VISIÓN</h2>
          <p className="mt-4 text-sm text-justify">
            Ser una solución tecnológica líder en el ámbito educativo nacional para el año 2030, reconocida por su impacto positivo en la salud mental estudiantil, su capacidad para optimizar los procesos de atención psicosocial y su contribución a entornos escolares más inclusivos, seguros y emocionalmente saludables.
          </p>
        </div>

        {/* Botones */}
        <div className="md:col-span-2 flex flex-col md:flex-row justify-center items-center gap-6 mt-4">
          <Link to="/registro/organizacion">
            <button className="bg-teal-700 text-white px-6 py-3 rounded-xl hover:bg-teal-800 transition">
              Registrar organización
            </button>
          </Link>

          <Link to="/login">
            <button className="bg-teal-700 text-white px-6 py-3 rounded-xl hover:bg-teal-800 transition">
              Iniciar sesión
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;