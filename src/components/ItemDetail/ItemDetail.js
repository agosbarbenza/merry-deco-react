import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

export default function ItemDetail({ item }) {
  return (
    <>
      <div className="itemDetailContainer">
        <div>
          <p className="itemDetailCategory">
            Merry Deco - Category - {item.category}
          </p>
          <img className="productDetailImg" src={item.picture}></img>
        </div>
        <div className="details">
          <p className="itemDetailTitle">{item.title}</p>
          <p className="detaildescription">{item.description}</p>
          <p className="itemDetailStock">Stock: {item.stock} units</p>
          <p className="itemDetailPrice">Price: ${item.price}</p>
          <Button variant="outlined" className="addLessBtn">
            +
          </Button>
          <input className="inputQty" type="text"></input>
          <Button variant="outlined" className="addLessBtn">
            -
          </Button>
          <button className="addToCartBtn">Add to cart</button>
        </div>
      </div>
    </>
  );
}
