import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div className="itemContainer">
      <p className="categoryTitle">{item.category}</p>
      <div className="lineSeparator"></div>
      <img
        className="productItemImg"
        alt={item.description}
        src={item.picture}
      ></img>
      <p className="itemTitle">{item.title}</p>
      <p className="description">{item.description}</p>
      <button className="detailsBtn">
        <Link className="linkStyle" to={`/item/${item.id}`}>
          See Details
        </Link>
      </button>
    </div>
  );
}
