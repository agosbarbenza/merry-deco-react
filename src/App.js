import "./App.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  const greeting = "Sorry! The site is under construction. Come back later :)";
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer message={greeting} />
    </div>
  );
}

export default App;
