import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
// import { listOfItems } from "../Item/listOfItems";
// import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/firebase";

export default function ItemList() {
  // const { categoryId } = useParams();
  const db = getFirestore();
  const itemCollection = db.collection("productos");
  const [arrayProducts, setArrayProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    itemCollection.get().then((collection) => {
      if (collection.size === 0) {
        console.log("Error, no collection to show.");
        return;
      }
      setArrayProducts(
        collection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      setLoading(false);
    });
  }, []);
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
