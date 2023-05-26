import { useLoaderData } from "react-router";
import { getPost } from "../models/posts.server";
import { formatearFecha } from "../utils/helpers";
import { Link } from "@remix-run/react";

import styles from "../styles/blog.css";

export function links() {
  //* aca va la info en los tags <meta>
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta({ data }) {
  //* aca va la info en los tags <meta>
  if (!data) {
    return [
      {
        title: `GuitarLa - Blog : Entrada no encontrada`,
      },
      {
        charset: "utf-8",
      },
      {
        viewport: "width=device-width, initial-scale=1.0",
      },
      {
        description: "Sitio de Compra de Guitarras e instrumentos",
      },
    ];
  }
  return [
    {
      title: `GuitarLa - Blog : ${data.data[0].attributes.Titulo}`,
    },
    {
      charset: "utf-8",
    },
    {
      viewport: "width=device-width, initial-scale=1.0",
    },
    {
      description: "Sitio de Compra de Guitarras e instrumentos",
    },
  ];
}

export async function loader({ params }) {
  //* este es un loader de Remix , consume datos de una API
  const { postUrl } = params;
  const respuesta = await getPost(postUrl);
  if (respuesta.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Post no encontrado.",
    });
  }
  return respuesta;
}

export default function Post() {
  const postData = useLoaderData();

  const { Titulo, contenido, publishedAt } = postData.data[0].attributes;
  const imagen = postData.data[0].attributes.imagen.data.attributes.url;

  return (
    <article className="post mt-3">
      <img src={imagen} alt={`imagen blog ${Titulo}`} className="imagen" />
      <div className="contenido">
        <h1>{Titulo}</h1>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
        <Link className="enlace" to="/blog">
          Volver
        </Link>
      </div>
    </article>
  );
}
