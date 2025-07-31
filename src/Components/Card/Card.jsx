import React from "react";
import Dessert from "../Dessert/Dessert.jsx";
import DessertInfo from "../DessertInfo/DessertInfo.jsx";
const Card = ({ allProducts }) => {
  return (
    <>
      {allProducts &&
        allProducts.map((item) => (
          <div key={item.id} className="flex flex-col  items-start">
            <Dessert product={item} />
            <DessertInfo
              name={item.name}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
    </>
  );
};

export default Card;
