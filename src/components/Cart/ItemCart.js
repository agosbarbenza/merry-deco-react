import React, { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import { cartContext } from "../Context/CartProvider";

export function ItemCart({ cartItem }) {
  const totalPrice = cartItem.count * cartItem.item.price;
  const { removeItem } = useContext(cartContext);
  return (
    <>
      <div className="itemCartSubContainer">
        <img
          className="itemCartImg"
          src={cartItem.item.picture}
          alt={cartItem.item.description}
        />
        <div className="itemCartDetails">
          <p>{cartItem.item.title}</p>
          <p className="cartItemDesc">{cartItem.item.description}</p>
        </div>
        <span className="itemCartCount">{cartItem.count}</span>
        <p className="itemCartTotal">${totalPrice.toFixed(2)}</p>
        <FaWindowClose
          onClick={() => removeItem(cartItem.item.id)}
          className="removeIcon"
        />
      </div>
      <div className="cartSeparator"></div>
    </>
  );
}
