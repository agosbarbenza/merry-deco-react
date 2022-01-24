import React from "react";

export default function Item({ item }) {
  return (
    <div className="itemContainer">
      <p className="categoryTitle">{item.category}</p>
      <div className="lineSeparator"></div>
      <img className="productItemImg" src={item.picture}></img>
      <p className="itemTitle">{item.title}</p>
      <p className="description">{item.description}</p>
      <button className="detailsBtn">See Details</button>
    </div>
  );
}
