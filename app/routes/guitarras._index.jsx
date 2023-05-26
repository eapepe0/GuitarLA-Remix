import { useLoaderData  } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { ListadoGuitarras } from '../components/listado-guitarras'


 export function meta(){ //* aca va la info en los tags <meta>
    return(
    [
       {
           title : "GuitarLA - Tienda de Guitarras"
       },{
           description : "GuitarLA - Nuestra coleccion de Guitarras",
        },
    ]
    )
 }

export async function loader(){ //* este es un loader de Remix , consume datos de una API
   const guitarras = await getGuitarras()
   return guitarras
}
const Tienda = () => {
    const data= useLoaderData(); //* usamos los datos del loader
  return (
        <ListadoGuitarras guitarras = {data}/>
  )
}

export default Tienda

//* contenido mostrado