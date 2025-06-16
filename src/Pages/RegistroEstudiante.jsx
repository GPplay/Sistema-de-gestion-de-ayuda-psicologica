import React from 'react';

function RegistroEstudiante() {
  return (
    <div className="registro-estudiante">
      <h1>Registro de Estudiante</h1>
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="contraseña">Contraseña:</label>
          <input type="password" id="contraseña" name="contraseña" required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistroEstudiante;