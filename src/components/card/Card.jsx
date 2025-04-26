function Card({ image, title, description }) {
  return (
    <>
      <div className="w-[300px] border-2 p-2 border-gray-300">
        <img className="w-[100%]" src={image} alt={title} />
        <h1 className="font-semibold my-2">{title}</h1>
        <p>{description}</p>
        <button className="w-[100%] my-3 p-2 bg-green-600 text-white rounded">
          View More
        </button>
      </div>
    </>
  );
}

export default Card;
