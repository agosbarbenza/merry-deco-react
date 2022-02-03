import { elementAcceptingRef } from "@mui/utils";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartProvider";

export function Cart() {
  const { cart } = useContext(cartContext);
  return (
    <div>
      {cart.map((e) => (
        <div key={e.item.id}>{e.item.title}</div>
      ))}
      <Link to={`/`} className="titleStyle">
        <button className="cartBtn">Return to Home</button>
      </Link>
    </div>
  );
}
