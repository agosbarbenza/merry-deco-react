import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ item }) {
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
          <p className="itemDetailPrice">Price: ${item.price}</p>
          <ItemCount stock={item.stock} initial={1} />
        </div>
      </div>
    </>
  );
}
