import { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Info from "./components/info/info";
import Footer from "./components/footer/Footer";

function App() {
  const [isActive, setIsActive] = useState("pizzas");
  return (
    <>
      <div className="w-[80%] mx-auto p-3">
        <Header />
        <Nav isActive={isActive} setIsActive={setIsActive} />
        <Info isActive={isActive} />
        <Footer />
      </div>
    </>
  );
}

export default App;
