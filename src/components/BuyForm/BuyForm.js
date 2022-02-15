import React, { useState, useRef, useContext } from "react";
import firebase from "firebase";
import { cartContext } from "../Context/CartProvider";
import { getFirestore } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { GiPartyPopper } from "react-icons/gi";

export default function BuyForm() {
  const [orderId, setOrderId] = useState("");
  const { cart } = useContext(cartContext);
  let totalPurchase = 0;
  cart.map((e) => (totalPurchase = totalPurchase + e.count * e.item.price));

  const nameRf = useRef();
  const lastNameRf = useRef();
  const addressRf = useRef();
  const cityRf = useRef();
  const stateRf = useRef();
  const countryRf = useRef();
  const emailRf = useRef();
  const phoneRf = useRef();

  function sendForm() {
    const db = getFirestore();
    const ordersCollection = db.collection("orders");
    const newOrder = {
      buyer: {
        name: nameRf.current.value,
        lastName: lastNameRf.current.value,
        address: addressRf.current.value,
        city: cityRf.current.value,
        state: stateRf.current.value,
        country: countryRf.current.value,
        email: emailRf.current.value,
        phone: phoneRf.current.value,
      },
      items: cart,
      total: totalPurchase.toFixed(2),
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    ordersCollection
      .add(newOrder)
      .then(({ id }) => {
        console.log("New order generated with id: " + id);
        setOrderId(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {orderId ? (
        <div>
          <p className="congrats">
            Congrats! <GiPartyPopper className="partyIcon" />
          </p>

          <p className="orderGenerated">
            Your order N°{orderId} has been successfully generated
          </p>
          <Link to={`/`} className="titleStyle">
            <button className="returnBtn">Return to Home</button>
          </Link>
        </div>
      ) : (
        <div className="fillInfo">
          <h3>Fill in your contact info:</h3>

          <input type="text" name="name" ref={nameRf} placeholder="Name" />
          <br />

          <input
            type="text"
            name="lastName"
            ref={lastNameRf}
            placeholder="Last Name"
          />
          <br />

          <input
            type="text"
            name="address"
            ref={addressRf}
            placeholder="Address"
          />
          <br />

          <input type="text" name="city" ref={cityRf} placeholder="City" />
          <br />

          <input type="text" name="state" ref={stateRf} placeholder="State" />
          <br />

          <input
            type="text"
            name="country"
            ref={countryRf}
            placeholder="Country"
          />
          <br />

          <input
            type="text"
            name="phone"
            ref={phoneRf}
            placeholder="Phone number"
          />
          <br />

          <input type="text" name="email" ref={emailRf} placeholder="E-mail" />
          <br />

          <button onClick={() => sendForm()}>Send</button>
        </div>
      )}
    </>
  );
}
