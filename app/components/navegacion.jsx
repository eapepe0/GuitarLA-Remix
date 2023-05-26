import { Link , useLocation} from "@remix-run/react";
import React from "react";
import carritoImage from '../../public/img/carrito.png'


const Navegacion = () => {
    const location = useLocation()
  return (
    <>
      <nav className="navegacion">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">
          Inicio
        </Link>
      </nav>
      <nav className="navegacion">
        <Link
          className={location.pathname === "/nosotros" ? "active" : ""}
          to="/nosotros"
        >
          Nosotros
        </Link>
      </nav>
      <nav className="navegacion">
        <Link
          className={location.pathname === "/blog" ? "active" : ""}
          to="/blog"
        >
          Blog
        </Link>
      </nav>
      <nav className="navegacion">
        <Link
          className={location.pathname === "/guitarras" ? "active" : ""}
          to="/guitarras"
        >
          Tienda
        </Link>
      </nav>
      <nav className="navegacion">
        <Link
          className={location.pathname === "/carrito" ? "active" : ""}
          to="/carrito"
        >
          <img src={carritoImage} alt="carrito"  />
        </Link>
      </nav>
    </>
  );
};

export default Navegacion;
