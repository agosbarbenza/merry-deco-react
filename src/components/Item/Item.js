import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div className="itemContainer">
      <p className="categoryTitle">{item.category}</p>
      <img
        className="productItemImg"
        alt={item.description}
        src={item.picture}
      ></img>
      <p className="itemTitle">{item.title}</p>
      <p className="description">{item.description}</p>
      <Link className="linkStyle" to={`/item/${item.id}`}>
        <button className="detailsBtn">See Details</button>
      </Link>
    </div>
  );
}
