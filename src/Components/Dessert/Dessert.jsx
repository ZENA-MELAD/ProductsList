import React from "react";
import ButtonCard from "../ButtonCard/ButtonCard";
import { useSelector } from "react-redux";

const Dessert = ({ product }) => {
  const products = useSelector((state) =>
    state.card.items.find((item) => item.idProduct == product.id)
  );
  const num=products?products.quantity:0
  const isActive=num>0
  return (
    <div className={`${isActive?"border-2  border-red-700":" border border-transparent"} w-full relative flex flex-col justify-center items-center mb-8 rounded-lg`}>
      <div className="w-full h-56 xs:h-40 lg:h-44  overflow-hidden rounded-md">
        <img
          src={product.image}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <ButtonCard item={product} />
    </div>
  );
};

export default Dessert;
