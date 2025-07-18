import React from "react";
import ButtonCard from "../ButtonCard/ButtonCard";

const Dessert = ({ productImage}) => {
  return (
    <div className="w-full relative flex flex-col justify-center items-center mb-8">
      <div className="w-full h-56 xs:h-40  overflow-hidden rounded-lg">
        <img
          src={productImage}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <ButtonCard/>
    </div>
  );
};

export default Dessert;
