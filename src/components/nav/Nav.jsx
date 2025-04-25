function Nav({ isActive, setIsActive }) {
  return (
    <>
      <div className="my-3 flex border-2 border-gray-300 text-center">
        <div
          className={`w-[20%] py-2 border-2 border-gray-300 border-t-0 border-l-0 border-b-0 cursor-pointer ${
            isActive === "pizzas" ? "bg-red-300" : null
          }`}
          onClick={() => setIsActive("pizzas")}
        >
          Pizzas
        </div>
        <div
          className={`w-[20%] py-2 border-2 border-gray-300 border-t-0 border-l-0 border-b-0 cursor-pointer ${
            isActive === "sides" ? "bg-red-300" : null
          }`}
          onClick={() => setIsActive("sides")}
        >
          Sides
        </div>
        <div
          className={`w-[20%] py-2 border-2 border-gray-300 border-t-0 border-l-0 border-b-0 cursor-pointer ${
            isActive === "desserts" ? "bg-red-300" : null
          }`}
          onClick={() => setIsActive("desserts")}
        >
          Desserts
        </div>
        <div
          className={`w-[20%] py-2 border-2 border-gray-300 border-t-0 border-l-0 border-b-0 cursor-pointer ${
            isActive === "drinks" ? "bg-red-300" : null
          }`}
          onClick={() => setIsActive("drinks")}
        >
          Drinks
        </div>
        <div
          className={`w-[20%] py-2 border-2 border-gray-300 border-t-0 border-l-0 border-b-0 border-r-0 cursor-pointer ${
            isActive === "deals" ? "bg-red-300" : null
          }`}
          onClick={() => setIsActive("deals")}
        >
          Deals
        </div>
      </div>
    </>
  );
}

export default Nav;
