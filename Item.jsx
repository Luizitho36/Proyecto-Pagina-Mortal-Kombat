import "./Item.css";
import React, { useContext } from "react";
import { CarritoContext } from "./CarritoContext";
<style>
   @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
   @import url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&display=swap');
</style>

export const Item = ({ name, price, id, imgUrl }) => {
  const [carrito, setCarrito] = useContext(CarritoContext);

  const agregarAlCarrito = () => {
    setCarrito((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, contador: item.contador + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, contador: 1, price }];
      }
    });
  };

  const eliminarItem = (id) => {
    setCarrito((currItems) => {
      if (currItems.find((item) => item.id === id)?.contador === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, contador: item.contador - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const idContador = (id) => {
    return carrito.find((item) => item.id === id)?.contador || 0;
  };

  const contadorPorItem = idContador(id);

  return (
    <div className="caja-item">

      <div>{name}</div>
      <img src={imgUrl} width="270" height="305" />
      <div className="precio-item">${price}

      {contadorPorItem > 0 && (
        <div className="contador-item">{contadorPorItem}</div>
      )}
      
      </div>

      {contadorPorItem === 0 ? (
        <button className="boton-agregar" onClick={() => agregarAlCarrito()}>
          Agregar Al Carrito
        </button>
      ) : (
        <button className="agregar-mas" onClick={() => agregarAlCarrito()}>
          Agregar Más
        </button>
      )}

      {contadorPorItem > 0 && (
        <button className="eliminar-item" onClick={() => eliminarItem(id)}>
          Quitar Uno
        </button>
      )}
    </div>
  );
};
