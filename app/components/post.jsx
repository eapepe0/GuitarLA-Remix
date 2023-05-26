import { Link } from "@remix-run/react"
import { formatearFecha } from "../utils/helpers";


const Post = ({post}) => {
    const { contenido , imagen , Titulo , url , publishedAt }  = post
  return (
    <article className="post">
         <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`imagen ${Titulo}`} />
         <div className="contenido">
            <h3 className="titulo">{Titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="resumen">{contenido}</p>
            <Link className='enlace' to={`/posts/${url}`}> Leer Post </Link>
         </div>
    </article>
  )
}

export default Post