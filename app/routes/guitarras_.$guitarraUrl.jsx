import { useLoaderData, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import { getGuitarra } from "../models/guitarras.server";

import styles from "../styles/guitarra.css";

export async function loader({ params }) {
  //* este es un loader de Remix , consume datos de una API
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada.",
    });
  }
  return guitarra;
}

export function meta({ data }) {
  //* aca va la info en los tags <meta>

  if (!data) {
    return [
      {
        title: "GuitarLA - Guitarra no encontrada",
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
      title: `GuitarLA - ${data.data[0].attributes.nombre}`,
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
      href: styles,
    },
  ];
}

function Guitarra() {
  const [cantidad, setCantidad] = useState(0);
  const data = useLoaderData();
  const { agregarCarrito } = useOutletContext();
  const { nombre, precio, descripcion, imagen } = data.data[0].attributes;
  const medium = imagen.data.attributes.formats.medium.url;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 0) {
      alert("Debes seleccionar una cantidad");
    }
    const guitarraSeleccionada = {
      id: data.data[0].id,
      imagen: imagen.data.attributes.formats.medium.url,
      nombre,
      precio,
      cantidad,
    };

    console.log(guitarraSeleccionada);
    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <div className="guitarra">
      <img
        className="imagen"
        src={medium}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
        <form className="formulario" onSubmit={handleSubmit}>
          <label className="label" htmlFor="cantidad">
            Cantidad
          </label>

          <select
            className="select"
            name=""
            id="cantidad"
            onChange={(e) => setCantidad(parseInt(e.target.value))}
          >
            <option value="">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Agregar al carrito" className="input" />
        </form>
      </div>
    </div>
  );
}

export default Guitarra;
