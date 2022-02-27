import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Cart } from "./components/Cart/Cart";
import CartProvider from "./components/Context/CartProvider";
import BuyForm from "./components/BuyForm/BuyForm";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Main />
              <ItemListContainer />
            </Route>
            <Route exact path="/all">
              <ItemListContainer />
            </Route>
            <Route path="/category/:categoryName">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/buyform">
              <BuyForm />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
