import { useOutletContext } from "@remix-run/react";
import { useState , useEffect } from "react";
import styleCarrito from "../styles/carrito.css";

import {ClientOnly} from 'remix-utils';

export function links() {
  //* aca va la info en los tags <meta>
  return [
    {
      rel: "stylesheet",
      href: styleCarrito,
    },
  ];
}

export function meta() {
  //* aca va la info en los tags <meta>
  return [
    {
      title: "GuitarLA - Carrito de Compras",
    },
    {
      descrition: "Compra y Venta de Guitarras e instrumentos musicales.",
    },
  ];
}
const Carrito = () => {
    const [total, setTotal] = useState(0)
  const { carrito, actualizarCantidad , eliminarGuitarra } = useOutletContext();

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio),0)
        setTotal(calculoTotal)
    }, [carrito])
    //* cada vez que cambia carrito


  return (
    <ClientOnly fallback={"Cargando..."}>
        {()=>(
    <main className="contenedor">
      <h1 className="heading">Carrito de compras</h1>
      <div className="contenido">
        <div className="carrito">
          <h2>Articulos</h2>
          {/* si carrito es 0 mostramos esta vacio de lo contrario mostramos los productos */}
          {carrito?.length === 0
            ? "Carrito vacio"
            : carrito?.map((producto) => (
                <div key={producto.id} className="producto">
                  <div>
                    <img
                      src={producto.imagen}
                      alt={`Producto imagen ${producto.nombre}`}
                    />
                  </div>
                  <div>
                    <p className="nombre">{producto.nombre}</p>
                    <p className="precio">
                      $<span>{producto.precio}</span>
                    </p>
                    <p className="cantidad">Cantidad : {producto.cantidad}</p>
                    <select
                      name=""
                      id=""
                      defaultValue={producto.cantidad}
                      onChange={(e) =>
                        actualizarCantidad({ /* creamos un obj */
                          cantidad: +e.target.value, /* convertimos el valor con el + a numerico */
                          id: producto.id,
                        })
                      }
                    >
                      <option value="">--Seleccionar</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <p className="subtotal">
                      Subtotal : $
                      <span>{producto.cantidad * producto.precio}</span>
                    </p>
                  </div>
                  <button type='button' className="btn_eliminar" onClick={()=> eliminarGuitarra(producto.id)}>X</button>
                </div>
              ))}
        </div>

        <aside className="resumen">
          <h3>Resumen del pedido</h3>
          <p>Total a pagar : ${total}</p>
        </aside>
      </div>
    </main>
    )}
    </ClientOnly>
  );
};

export default Carrito;
