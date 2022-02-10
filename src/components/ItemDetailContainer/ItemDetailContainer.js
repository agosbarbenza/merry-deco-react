import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/firebase";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getItem = () => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");

    const oneItem = itemCollection.doc(id);
    console.log("one item?", oneItem);

    oneItem
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Error, doc doesn't exists");
          return;
        }
        setProduct({ id: doc.id, ...doc.data() });
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
        <ItemDetail item={{ product }} />
      ) : (
        <p className="loading">Loading...</p>
      )}
    </>
  );
}
