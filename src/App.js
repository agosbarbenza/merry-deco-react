import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ItemList from "./components/ItemList/ItemList";
import React from "react";

function App() {
  const greeting = "Sorry! The site is under construction. Come back later :)";
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
