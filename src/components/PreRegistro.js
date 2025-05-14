import React from 'react';
import './PreRegistro.css';

const PreRegistro = () => {
  return (
    <div className="contenedor">
      <div className="imagen">
        <img src="/images/formulario.png" alt="Ilustración" />
      </div>
      <form className="formulario">
        <h2>Formulario de Pre - registro</h2>

        <label>Nombre completo</label>
        <input type="text" placeholder="Tu nombre" required />

        <label>Correo electrónico</label>
        <input type="email" placeholder="correo@ejemplo.com" required />

        <label>Teléfono</label>
        <input type="tel" placeholder="555-123-4567" required />

        <label>Edad</label>
        <input type="number" placeholder="Tu edad" required />

<label>¿En qué grado estás?</label>
<div className="opciones-grado">

  <label>
    <input type="radio" name="grado" value="cuarto" /> Cuarto Bachillerato
  </label>
  <label>
    <input type="radio" name="grado" value="quinto" /> Quinto Bachillerato
  </label>
  <label>
    <input type="radio" name="grado" value="sexto" /> Sexto Bachillerato
  </label>
</div>



        <label>Área de interés</label>
        <select required>
          <option value="">Selecciona una opción</option>
          <option value="Perito Contador">Perito Contador</option>
          <option value="diseño Grafico">Bachiller en diseño grafico</option>
          <option value="Perito Electronica">Perito en Electronica de Dispositivos Digitales</option>
            <option value="Perito Programador">Bachiller en Desarrollo Web</option>
            <option value="Perito Admon Empresas">Perito Administracion de empresas</option>
        </select>

        <label>Curso preferido</label>
        <input type="text" placeholder="Nombre del curso" required />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PreRegistro;