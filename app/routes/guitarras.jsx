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