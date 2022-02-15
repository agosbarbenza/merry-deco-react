import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartProvider";
import { ItemCart } from "./ItemCart";
import { FaShoppingCart } from "react-icons/fa";

export function Cart() {
  const { cart, clearCart } = useContext(cartContext);
  let totalPurchase = 0;
  let totalCount = 0;
  //Como hacer en un solo map esto?//////////////////////////////////////////
  cart.map((e) => (totalPurchase = totalPurchase + e.count * e.item.price));
  cart.map((e) => (totalCount = totalCount + e.count));
  ///////////////////////////////////////////////////////////////////////////
  return (
    <div className="cartContainer">
      <p className="yourCart"> Merry Deco {">"} Your cart</p>
      {cart != "" ? (
        <>
          {cart.map((e) => (
            <ItemCart key={e.item.id} cartItem={e} />
          ))}
          <div className="cartTotals">
            <p>
              Total:{" "}
              <span className="totalPrice">${totalPurchase.toFixed(2)}</span>
            </p>
          </div>
          <Link to={`/buyform`} className="titleStyle">
            <button className="buyNowBtn">Buy Now</button>
          </Link>
          <div className="cartButtonsContainer">
            <button className="emptyCartBtn" onClick={() => clearCart()}>
              Empty cart
            </button>
          </div>
        </>
      ) : (
        <>
          <FaShoppingCart style={{ fontSize: "2rem", margin: "auto" }} />
          <p className="noItems">Your cart is empty</p>
          <Link to={`/`} className="titleStyle">
            <button className="returnBtn">Return to Home</button>
          </Link>
        </>
      )}
    </div>
  );
}
