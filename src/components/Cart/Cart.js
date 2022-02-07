import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartProvider";
import { ItemCart } from "./ItemCart";
import { FaShoppingCart, FaShippingFast } from "react-icons/fa";

export function Cart() {
  const { cart, clearCart } = useContext(cartContext);
  let totalPurchase = 0;
  let totalCount = 0;
  cart.map((e) => (totalPurchase = totalPurchase + e.count * e.item.price));
  cart.map((e) => (totalCount = totalCount + e.count));
  console.log("cart en Cart", cart);
  return (
    <div className="cartContainer">
      <p className="yourCart">Your Cart</p>
      {cart.map((e) => (
        <ItemCart key={e.item.id} cartItem={e} />
      ))}
      <div className="cartTotals">
        <FaShoppingCart className="shoppingCart" />
        <p>
          Your cart contains {totalCount} {totalCount > 1 ? "items" : "item"}
        </p>
        <p>Total: ${totalPurchase.toFixed(2)}</p>
      </div>
      <div className="cartButtonsContainer">
        <Link to={`/`} className="titleStyle">
          <button className="cartBtn">Return to Home</button>
        </Link>
        <button className="emptyCartBtn" onClick={() => clearCart()}>
          Empty cart
        </button>
      </div>
    </div>
  );
}
