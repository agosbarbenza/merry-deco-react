import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartProvider";
import { ItemCart } from "./ItemCart";

export function Cart() {
  const { cart } = useContext(cartContext);
  console.log("cart en Cart", cart);
  return (
    <div>
      {cart.map((e) => (
        <ItemCart cartItem={e} />
      ))}
      <Link to={`/`} className="titleStyle">
        <button className="cartBtn">Return to Home</button>
      </Link>
    </div>
  );
}
