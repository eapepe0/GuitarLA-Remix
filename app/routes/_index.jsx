import { useLoaderData } from "@remix-run/react";

import { ListadoGuitarras } from "../components/listado-guitarras";
import { ListadoPosts } from "../components/listado-posts";
import { Curso } from "./curso";

import { getGuitarras } from "../models/guitarras.server";
import { getPosts } from "../models/posts.server";
import { getCurso } from "../models/curso.server";

import stylesGuitarra from "../styles/guitarra.css";
import stylesPosts from "../styles/blog.css";
import stylesCurso from "../styles/curso.css";

export function meta() {
  //* aca va la info en los tags <meta>
  return [
    {
      title: "GuitarLA - Tu Tienda de Guitarras.",
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

export function links() {
  //* aca va la info en los tags <meta>
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarra,
    },
    {
      rel: "stylesheet",
      href: stylesPosts,
    },
    {
      rel: "stylesheet",
      href: stylesCurso,
    },
  ];
}

export async function loader() {
  //* este es un loader de Remix , consume datos de una API
  //* hacemos una promesa , los resultados se guardan en guitarras y posts
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);
  return {
    guitarras,
    posts,
    curso: curso.data.attributes,
  };
}

function Index() {
  const { guitarras, posts, curso } = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>
      <section className="contenedor">
        <ListadoPosts posts={posts.data} />
      </section>

      <section className="contenedor">
        <Curso curso={curso} />
      </section>
    </>
  );
}

export default Index;
