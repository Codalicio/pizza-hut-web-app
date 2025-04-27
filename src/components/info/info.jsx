import { useState } from "react";
import Card from "../card/Card";
import { basicDetails } from "../db/db";

function Info({ isActive }) {
  const [searchTerm, setSearchTerm] = useState("");

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = basicDetails[isActive].products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <input
          className="w-[60%] p-3 border-2 border-gray-300 bg-black text-white rounded"
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          onChange={changeHandler}
          placeholder="Enter search term"
        />
      </div>
      <div>
        <h1 className="text-4xl text-center my-5">
          Our {basicDetails[isActive].title}
        </h1>
        <p className="text-center text:md">
          {basicDetails[isActive].description}
        </p>
      </div>
      <div className="my-5 flex flex-wrap gap-5 justify-center items-center">
        {filteredData.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </>
  );
}

export default Info;
