import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import FinishPurchase from "../FinishPurchase/FinishPurchase";
import { cartContext } from "../Context/CartProvider";

export default function ItemDetail({ item }) {
  const [finishPurchase, setFinishPurchase] = useState(true);
  const { addToCart } = useContext(cartContext);
  const [addedProduct, setAddedProduct] = useState(false);

  function onAdd(productCount, items) {
    toast.success(
      "You have added " + productCount + " " + items + " to your cart!"
    );
    setFinishPurchase(false);
    addToCart(item.product, productCount);
    setAddedProduct(true);
  }
  return (
    <div className="itemDetailFirstContainer">
      <div className="lineSeparatorNavBar"></div>
      <p className="itemDetailCategory">
        Home {">"} Categories {">"} {item.product.category}
      </p>
      <div className="itemDetailContainer">
        <div>
          <img
            className="productDetailImg"
            alt={item.product.description}
            src={item.product.picture}
          ></img>
        </div>
        <div className="details">
          <p className="itemDetailTitle">{item.product.title}</p>
          <p className="detaildescription">{item.product.description}</p>
          <p className="itemDetailStock">Stock: {item.product.stock} units</p>
          <p className="itemDetailPrice">
            Price: ${item.product.price.toFixed(2)}
          </p>
          {finishPurchase ? (
            <ItemCount stock={item.product.stock} initial={1} onAdd={onAdd} />
          ) : (
            <FinishPurchase />
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
