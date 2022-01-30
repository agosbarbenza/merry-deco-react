import React from "react";
import { Link } from "react-router-dom";

export function Cart() {
  return (
    <div>
      <p className="cartText">Sorry! Site under construction</p>
      <Link to={`/`} className="titleStyle">
        <button className="cartBtn">Return to Home</button>
      </Link>
    </div>
  );
}
