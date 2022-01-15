import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export function ItemListContainer() {
  return (
    <>
      <ItemCount stock={10} initial={1} />
    </>
  );
}
