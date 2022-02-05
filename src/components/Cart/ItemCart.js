import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartProvider";

export function ItemCart(cartItem) {
  console.log("cartItem", cartItem);
  console.log("cartItem.item.id", cartItem.item.id);
  return (
    <div>
      {/* <p>{cartItem.item.title}</p>
      <p>{cartItem.item.description}</p>
      <p>{cartItem.count}</p> */}
    </div>
  );
}
