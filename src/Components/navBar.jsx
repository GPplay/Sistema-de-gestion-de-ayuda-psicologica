import { Link } from 'react-router-dom';
import LogoBlanco from '../assets/LogoB.svg'; // Asegúrate de que la ruta sea correcta

function Navbar() {
  return (
    <nav className="bg-teal-700 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Nombre */}
        <div className="flex items-center space-x-3">
          <img 
          src={LogoBlanco} 
          alt="LOGO"
          style={{ width: '50px', height: '50px' }} // Ajusta el tamaño según sea necesario
          />
          <h1 className="text-lg font-semibold">
            Apoyo Psicológico Escolar
          </h1>
        </div>

        {/* Enlaces */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/acerca" className="hover:underline">Acerca</Link>
          <Link to="/contacto" className="hover:underline">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;