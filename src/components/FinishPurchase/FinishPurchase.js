import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function FinishPurchase() {
  return (
    <div>
      <Link to={`/cart`} className="titleStyle">
        <button className="addBtn">Finish your purchase</button>
      </Link>
    </div>
  );
}
