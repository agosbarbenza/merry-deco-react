import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { listOfItems } from "../Item/listOfItems";
// import { useParams } from "react-router-dom";

export default function ItemList() {
  // const { categoryId } = useParams();
  const [arrayProducts, setArrayProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const listOfProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listOfItems);
    }, 2000);
  });
  useEffect(() => {
    listOfProducts
      .then((res) => {
        setArrayProducts(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  });
  return (
    <>
      <div className="itemListCont">
        {!loading ? (
          arrayProducts.map((item) => {
            return <Item key={item.id} item={item}></Item>;
          })
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    </>
  );
}
