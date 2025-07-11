import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
const ButtonCard = () => {
  return (
    <button className="w-5/12 xs:w-2/3 md:w-1/2 p-1.5 xs:p-1  flex justify-center items-center cursor-pointer bg-white rounded-2xl  border border-zinc-500 absolute -bottom-4">
      <MdAddShoppingCart className="text-red-700  mr-0.5 xs:mr-0 "/>
      <p className="capitalize text-sm  xs:text-xs ">add to cart</p>
    </button>
  );
};

export default ButtonCard;
