import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { listOfItems } from "../Item/listOfItems";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);

  const getItem = () => {
    const itemProduct = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(listOfItems);
      }, 2000);
    });
    itemProduct
      .then((res) => {
        setProduct(res[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };
  useEffect(() => {
    getItem();
  }, []);
  return (
    <>
      {!loading ? (
        <ItemDetail item={product} />
      ) : (
        <p className="loading">Loading...</p>
      )}
    </>
  );
}
