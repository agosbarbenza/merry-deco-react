import React from "react";
import { VscTools } from "react-icons/vsc";

export function ItemListContainer({ message }) {
  const toolStyle = {
    color: "rgb(107, 107, 107)",
    fontSize: "10rem",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <>
      <VscTools style={toolStyle} />
      <p className="messageStyle">{message}</p>
    </>
  );
}
