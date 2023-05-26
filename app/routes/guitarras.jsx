import { Outlet, useOutletContext } from '@remix-run/react'
import styles from '../styles/guitarra.css'


export function links(){ //* aca va la info en los tags <meta>
    return(
    [
       {
           rel : "stylesheet",
           href:  styles,
        },
    ]
    )
 }
 export function meta() {
  //* aca va la info en los tags <meta>
  return [
    {
      title: "GuitarLA - Tienda de Guitarras",
    },
    {
      description: "GuitarLA - Nuestra coleccion de Guitarras",
    },
    {
      charset: "utf-8",
    },
    {
      viewport: "width=device-width, initial-scale=1.0",
    },
  ];
}

const Tienda = () => {
  return (<>
    
    <main className="contenedor">
        <Outlet context={useOutletContext()}/>   
    </main>

    </>
  )
}

export default Tienda

//* funciona como layout