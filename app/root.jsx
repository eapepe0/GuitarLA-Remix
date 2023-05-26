import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
  Link,
} from "@remix-run/react";
import { useState, useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";

import styles from "./styles/index.css";
import normalize from './styles/normalize.css'

//* aca guardamos la informacion que tenemos en el meta , que va inyectada dentro de <head></head>
export const meta = () => [
  {
    charset: "utf-8",
  },
  {
    viewport: "width=device-width, initial-scale=1.0",
  },
  {
    description: "Sitio de Compra de Guitarras e instrumentos",
  },
  {
    title: "Guitar LA - Remix",
  },
];

export function links() {
  //* aca guardamos hojas de estilos , depende tambien el orden que estan acomodadas en el array
  return [
    {
      rel: "stylesheet",
      href: normalize,
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

//* aca renderizamos a dentro del body que es donde esta {children}
export default function App() {
  const carritoLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : null; //* si no existe nada en el LS inicializa carritoLS en un array vacio
  const [carrito, setCarrito] = useState(carritoLS); //* aca guardamos los items del carrito

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log("render");
  }, [carrito]);

  //* func que modifica el carrito
  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      //* iterar sobre el arreglo e identificar el elemento duplicado
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          //* reescribir cantidad
          guitarraState.cantidad += guitarra.cantidad;
        }
        return guitarraState;
      });
      //* Añadimos al carrito
      setCarrito(carritoActualizado);
    } else {
      //* si no existe en el carrito es por que es nuevo
      setCarrito([...carrito, guitarra]);
    }
  };

  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad;
      }
      return guitarraState;
    });
    setCarrito(carritoActualizado);
  };

  const eliminarGuitarra = (id) => {
    const carritoActualizado = carrito.filter(
      (guitarraState) => guitarraState.id !== id
    );
    setCarrito(carritoActualizado);
  };
  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
          carrito,
          actualizarCantidad,
          eliminarGuitarra,
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

//* manejo de errores

export function CatchBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <p className="error">
          {error.status} {error.status.text}
        </p>
      </Document>
    );
  }
}

export function ErrorBoundary() {
  const error = useRouteError(); // esto es un hook de remix
  return (
    <Document>
      {/* de esta manera imprimimos los errores */}
      <div className="error-container">
        <p className="error">
          {error.status} {error.statusText}{" "}
        </p>
        <Link className="error-enlace" to="/">
          {" "}
          Tal vez quieras volver a la página principal{" "}
        </Link>
      </div>
    </Document>
  );
}
