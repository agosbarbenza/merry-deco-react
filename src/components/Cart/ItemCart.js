import React from "react";

export function ItemCart({ cartItem }) {
  return (
    <div>
      <p>{cartItem.item.title}</p>
      <p>{cartItem.item.description}</p>
      <p>{cartItem.count}</p>
    </div>
  );
}
