import { Link } from '@remix-run/react'
import React from 'react'




const Guitarra = ({guitarra}) => {
  const { nombre , precio , descripcion , url } = guitarra;
  const small = guitarra.imagen.data.attributes.formats.small.url;
  
   return (
    <div className="guitarra">
      <img src={small} alt={`${nombre}`} />
      <div className="contenido">
        <h3 className='nombre'>{nombre}</h3>
        <p className='descripcion'>{descripcion}</p>
        <p className='precio'>${precio}</p>
        <Link className='enlace' to={`/guitarras/${url}`}> Ver Producto</Link>
      </div>
    </div>
  )
}

export default Guitarra