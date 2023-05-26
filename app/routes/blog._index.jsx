import { useLoaderData } from "@remix-run/react";
import { ListadoPosts } from "../components/listado-posts";
import { getPosts } from "../models/posts.server";


export async function  loader(){ //* este es un loader de Remix , consume datos de una API
   const respuesta = await getPosts();
   return respuesta.data;
}
export function meta(){ //* aca guardamos la informacion que tenemos en el meta , que va inyectada dentro de <head></head>
    return(
    [ 
        {
            title : 'Guitar LA - Blog'
        },
        ]
    )
  }

const Blog = () => {
    const posts = useLoaderData()
  return (
   <ListadoPosts posts={posts} />
  )
}

export default Blog

//* contenido mostrado