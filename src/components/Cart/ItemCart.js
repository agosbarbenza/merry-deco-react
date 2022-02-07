import React, { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import { cartContext } from "../Context/CartProvider";

export function ItemCart({ cartItem }) {
  const totalPrice = cartItem.count * cartItem.item.price;
  const { removeItem } = useContext(cartContext);
  return (
    <div className="itemCartContainer">
      <div className="itemCartSubContainer">
        <img
          className="itemCartImg"
          src={cartItem.item.picture}
          alt={cartItem.item.description}
        />
        <div className="itemCartDetails">
          <p>
            {cartItem.item.title} -{" "}
            <span style={{ color: "rgb(89, 89, 89)" }}>
              {cartItem.count}
              {cartItem.count > 1 ? " items" : " item"}
            </span>
          </p>
          <p style={{ "font-size": "0.85rem" }} className="cartItemDesc">
            {cartItem.item.description}
          </p>
          <p style={{ "font-weight": 500, "font-size": "1.3rem" }}>
            ${totalPrice.toFixed(2)}{" "}
            <span style={{ "font-size": "0.75rem", color: "rgb(89, 89, 89)" }}>
              (${cartItem.item.price.toFixed(2)} each)
            </span>
          </p>
        </div>
        <FaWindowClose
          onClick={() => removeItem(cartItem.item.id)}
          className="removeIcon"
        />
      </div>

      <div className="cartSeparator"></div>
    </div>
  );
}
