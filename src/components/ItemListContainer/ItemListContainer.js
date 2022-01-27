import React from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export function ItemListContainer({ listOfItems }) {
  const { categoryId } = useParams();
  return (
    <>
      <ItemList items={listOfItems} />
    </>
  );
}
