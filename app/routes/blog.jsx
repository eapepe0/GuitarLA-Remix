import {  Outlet } from "@remix-run/react";
import blogStyle from '../styles/blog.css'

  export function links(){ //* aca va la info en los tags <meta>
     return(
     [
        {
            rel : "stylesheet",
            href: blogStyle,
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

const Blog = () => {

  return (
   <main className="contenedor">
        <Outlet/>
   </main>
  )
}

export default Blog

//* funciona como layout