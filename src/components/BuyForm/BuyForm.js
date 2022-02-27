import React, { useState, useEffect, useContext } from "react";
import firebase from "firebase";
import { cartContext } from "../Context/CartProvider";
import { getFirestore } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { GiPartyPopper } from "react-icons/gi";

export default function BuyForm() {
  const [orderId, setOrderId] = useState("");
  const { cart } = useContext(cartContext);
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    repeatEmail: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  let totalPurchase = 0;
  cart.map((e) => (totalPurchase = totalPurchase + e.count * e.item.price));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  function validateForm(form) {
    let errors = {};
    if (!form.name) errors.name = "Name required";
    if (!form.lastName) errors.lastName = "Last Name required";
    if (!/^\d{10}$/.test(form.phone)) {
      errors.phone = "Phone number is not valid.";
    }
    if (!form.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email is not valid";
    }

    if (!form.repeatEmail) errors.repeatEmail = "Repeat email required.";

    if (form.email !== form.repeatEmail) {
      errors.repeatEmail = "Error. Email does not match.";
    }
    return errors;
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    setIsSubmitted(true);
  };

  function sendForm() {
    const db = getFirestore();
    const ordersCollection = db.collection("orders");
    const newOrder = {
      buyer: {
        name: form.name,
        lastName: form.lastName,
        email: form.email,
        repeatEmail: form.repeatEmail,
        phone: form.phone,
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
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      sendForm();
    }
  }, [errors]);
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
        <form className="fillInfo" onSubmit={handleFormSubmit}>
          <h3>Fill in your contact info:</h3>

          <input
            className="formInputs"
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleInputChange}
          />
          {errors.name && <p>{errors.name}</p>}
          <input
            className="formInputs"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
          <input
            className="formInputs"
            type="text"
            name="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
          <input
            className="formInputs"
            type="text"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleInputChange}
          />
          {errors.email && <p>{errors.email}</p>}
          <input
            className="formInputs"
            type="text"
            name="repeatEmail"
            placeholder="Repeat E-mail"
            value={form.repeatEmail}
            onChange={handleInputChange}
          />
          {errors.repeatEmail && <p>{errors.repeatEmail}</p>}

          <button
            type="submit"
            className="sendFormBtn"
            // onClick={() => sendForm()}
          >
            Send
          </button>
        </form>
      )}
    </>
  );
}
