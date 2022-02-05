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
    addToCart(item, productCount);
    setAddedProduct(true);
  }
  return (
    <>
      <p className="itemDetailCategory">
        Home {">"} Categories {">"} {item.category}
      </p>
      <div className="itemDetailContainer">
        <div>
          <img
            className="productDetailImg"
            alt={item.description}
            src={item.picture}
          ></img>
        </div>
        <div className="details">
          <p className="itemDetailTitle">{item.title}</p>
          <p className="detaildescription">{item.description}</p>
          <p className="itemDetailStock">Stock: {item.stock} units</p>
          <p className="itemDetailPrice">Price: ${item.price.toFixed(2)}</p>
          {finishPurchase ? (
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          ) : (
            <FinishPurchase />
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
