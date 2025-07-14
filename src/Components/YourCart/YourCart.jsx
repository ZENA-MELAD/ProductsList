import React from "react";
import Img from "../../assets/Images/illustration-empty-cart.svg";

const YourCart = () => {
  return (
    <>
      <h2 className=" capitalize text-red-700 font-bold text-xl tracking-wider">
        your cart (0)
      </h2>
      <div className="w-full flex flex-col justify-center items-center">
        <img src={Img} alt="this is image cake" className="w-1/3 xs:w-1/4 h-16 m-2.5" />
        <p className="text-xs text-zinc-500">your added items will appear here</p>
      </div>
    </>
  );
};

export default YourCart;
