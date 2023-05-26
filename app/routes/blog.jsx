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

const Blog = () => {

  return (
   <main className="contenedor">
        <Outlet/>
   </main>
  )
}

export default Blog

//* funciona como layout