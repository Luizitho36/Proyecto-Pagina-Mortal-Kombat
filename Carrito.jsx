import './Carrito.css';
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { CarritoContext } from "./CarritoContext";

export const Carrito = () => {
  const [carrito, SetCarrito] = useContext(CarritoContext);

  const contador = carrito.reduce((acc, curr) => {
    return acc + curr.contador;
  }, 0);

  const precioTotal = carrito.reduce(
    (acc, curr) => acc + curr.contador * curr.price,
    0
  );

  return (
    <div className="carrito-container">
      <div>
        <div>Cantidad de Productos: {contador}</div>
        <div>Total a Pagar: ${precioTotal}</div>
        <NavLink to="/store/carrito/gracias"><a href='/'><button className='boton-comprar' onClick={() => console.log(carrito)}>¡Comprar!</button></a></NavLink>

      </div>
    </div>
  );
};

export default Carrito;