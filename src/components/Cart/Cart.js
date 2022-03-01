import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartProvider";
import { ItemCart } from "./ItemCart";
import { AiOutlineShoppingCart } from "react-icons/ai";

export function Cart() {
  const { cart, clearCart } = useContext(cartContext);
  let totalPurchase = 0;
  let totalCount = 0;
  cart.map((e) => (totalPurchase = totalPurchase + e.count * e.item.price));
  cart.map((e) => (totalCount = totalCount + e.count));
  return (
    <div className="cartContainer">
      <div className="lineSeparatorNavBar"></div>
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
          <div className="buyNowContainer">
            <button className="emptyCartBtn" onClick={() => clearCart()}>
              Empty cart
            </button>
            <Link to={`/buyform`} className="titleStyle">
              <button className="buyNowBtn">Buy Now</button>
            </Link>
          </div>
        </>
      ) : (
        <div className="cartEmptyCont">
          <AiOutlineShoppingCart
            style={{ fontSize: "4rem", margin: "auto", display: "block" }}
          />
          <p className="noItems">Your cart is empty</p>
          <p className="dontMiss">Don't miss out on our featured products!</p>
          <Link to={`/`} className="titleStyle">
            <button className="returnBtn">Continue shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
}
