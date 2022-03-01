import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function FinishPurchase() {
  return (
    <div className="finishContainer">
      <Link to={`/cart`} className="titleStyle">
        <button className="finish">Finish your purchase</button>
      </Link>
      <Link to={`/`} className="titleStyle">
        <button className="finish">Continue shopping</button>
      </Link>
    </div>
  );
}
