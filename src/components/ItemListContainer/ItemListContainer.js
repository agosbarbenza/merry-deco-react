import React from "react";
import ItemList from "../ItemList/ItemList";

export function ItemListContainer({ listOfItems }) {
  return (
    <>
      <ItemList items={listOfItems} />
    </>
  );
}
