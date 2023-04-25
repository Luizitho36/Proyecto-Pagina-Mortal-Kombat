import "./store.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Item } from "./Item";
import productosMK from "./products.json";
import { CarritoContext } from "./CarritoContext";

export const Store = () => {

  const [carrito, setCarrito] = useContext(CarritoContext);

  const contador = carrito.reduce((acc, curr) => {
    return acc + curr.contador;
  }, 0);

  return (
    <div className="store-principal">
      
      <h2 className="lista-carrito">
        <Link to={"/store/carrito"}>
          Carrito: <span className="contador-carrito">{contador}</span>
        </Link>
      </h2>

      <br></br>
      <br></br>

      <div className="lista-store">
        {productosMK.map((producto) => {
          return <Item key={producto.id} {...producto} />;
        })}
      </div>

      <br></br>

      <h2 className="lista-carrito">
        <Link to={"/store/carrito"}>
          Carrito: <span className="contador-carrito">{contador}</span>
        </Link>
      </h2>
    </div>
  );
};
