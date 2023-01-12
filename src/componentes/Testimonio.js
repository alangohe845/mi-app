import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

export function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
        //Lo que esta {} entre las llaves es texto en JS
        //Para insertar una imagen directamente utilizamos require
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt='Foto de Emma' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
          </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}
//Exportacion por default
//export default Testimonio;