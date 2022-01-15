import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export function CartWidget() {
  const cartStyle = {
    fontSize: "1.8rem",
    marginLeft: "2rem",
    position: "relative",
    bottom: "0.3rem",
    cursor: "pointer",
  };
  return <AiOutlineShoppingCart style={cartStyle} />;
}
