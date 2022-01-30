import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import FinishPurchase from "../FinishPurchase/FinishPurchase";

export default function ItemDetail({ item }) {
  const [finishPurchase, setFinishPurchase] = useState(true);

  function onAdd(productCount, items) {
    toast.success(
      "You have added " + productCount + " " + items + " to your cart!"
    );
    setFinishPurchase(false);
  }
  return (
    <>
      <p className="itemDetailCategory">
        Home {">"} Categories {">"} {item.category}
      </p>
      <div className="itemDetailContainer">
        <div>
          <img className="productDetailImg" src={item.picture}></img>
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
