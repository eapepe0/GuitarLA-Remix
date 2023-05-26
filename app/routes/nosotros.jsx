import Imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'


export function meta(){ //* aca guardamos la informacion que tenemos en el meta , que va inyectada dentro de <head></head>
  return(
  [ 
      {
          title : 'Guitar LA - Nosotros'
      },
      ]
  )
}

export function links(){ //* cargamos una ruta con hoja de estilos
  return [
    {
      rel: "stylesheet",
      href : styles,
    } ,
    {
      rel : 'preload',
      href : Imagen,
      as: 'image',
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={Imagen} alt="imagen-nosotros" />
        <div>
          <p>Sed iaculis, nulla dictum hendrerit ultricies, tortor ligula egestas velit, id tempus lorem urna ac leo. Quisque ornare erat eget rutrum dictum. Phasellus lobortis sagittis tincidunt. 
            Donec iaculis mauris nec leo euismod auctor. Aenean quis ex accumsan, rutrum lectus eget, gravida magna. Suspendisse sagittis imperdiet enim a pellentesque. Etiam quis pretium justo, vehicula finibus tellus. 
            Morbi convallis placerat velit, nec viverra urna. Nam eu augue ornare, blandit tellus sed, tempus sapien. Integer eu dolor accumsan sapien tincidunt ornare scelerisque vitae risus. Sed et mauris sodales nulla ultricies consectetur sed eu velit. 
            Vestibulum laoreet ante enim, eget pellentesque libero hendrerit non. Maecenas cursus, lectus id facilisis pretium, nulla libero lobortis enim, quis lobortis nunc mauris ac quam. 
            Morbi auctor felis et sem pharetra cursus. Vivamus posuere urna nec pharetra scelerisque.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
