import React from 'react'

function Card({nombre, apellido, correo, telefono}) {
  return (
    <div className = 'card'>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <p>Correo: {correo}</p>
        <p>Teléfono: {telefono}</p>
    </div>
  )
}

export default Card