import { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

function App() {
  const [isActive, setIsActive] = useState("pizzas");
  return (
    <>
      <div className="w-[80%] mx-auto p-3">
        <Header />
        <Nav isActive={isActive} setIsActive={setIsActive} />
      </div>
    </>
  );
}

export default App;
