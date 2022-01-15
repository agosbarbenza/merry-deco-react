import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import { FaHollyBerry } from "react-icons/fa";

export function NavBar() {
  return (
    <div className="containerNavBar">
      <div className="logo">
        <FaHollyBerry style={{ fontSize: "3rem", color: "green" }} />
        <h1 className="title">Merry Deco</h1>
      </div>
      <ul className="containerList">
        <li className="listItem">Home</li>
        <li className="listItem">Trees</li>
        <li className="listItem">Lights</li>
        <li className="listItem">Ornaments and Tree accesories</li>
        <li className="listItem">Kitchenwear and Tablewear</li>
        <li className="listItem">Home Decor</li>
        <CartWidget size="6rem" color="pink" />
        <p className="cartItems">0</p>
      </ul>
    </div>
  );
}
