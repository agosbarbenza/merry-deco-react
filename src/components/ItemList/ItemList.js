import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/firebase";

export default function ItemList() {
  const { categoryName } = useParams();
  const db = getFirestore();
  const itemCollection = db.collection("productos");
  const [arrayProducts, setArrayProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryName) {
      setLoading(true);
      if (categoryName == "all") {
        itemCollection
          .get()
          .then(
            (res) =>
              setArrayProducts(
                res.docs.map((item) => ({ ...item.data(), id: item.id }))
              ),
            setLoading(false)
          )
          .catch((err) => console.log("Error, no category to show ", err));
      } else {
        setLoading(true);
        itemCollection
          .where("category", "==", categoryName)
          .get()
          .then(
            (res) =>
              setArrayProducts(
                res.docs.map((item) => ({ ...item.data(), id: item.id }))
              ),
            setLoading(false)
          )
          .catch((err) => console.log("Error, no category to show ", err));
      }
    } else {
      setLoading(true);
      itemCollection
        .where("category", "==", "featured")
        .get()
        .then(
          (res) =>
            setArrayProducts(
              res.docs.map((item) => ({ ...item.data(), id: item.id }))
            ),
          setLoading(false)
        )
        .catch((err) => console.log("Error, no category to show ", err));
    }
  }, [categoryName]);
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
