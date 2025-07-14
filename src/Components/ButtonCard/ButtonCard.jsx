import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";

const ButtonCard = () => {
  const [state, setState] = useState(false);
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setState(true);
  };
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease=()=>{
    if(count==1){
      setState(false);
       setCount(prev=>prev-1)
    }
    else{
       setCount(prev=>prev-1)
    }
   
  }
  return (
    <>
      <button
        className="w-5/12 xs:w-3/4 sm:w-3/5  p-1.5 xs:p-1 flex justify-center items-center cursor-pointer bg-white rounded-2xl  border border-zinc-500 absolute 
      -bottom-4 capitalize text-sm font-medium  xs:text-xs  lg:text-sm
       hover:text-red-700  hover:border hover:border-red-700"
        onClick={handleClick}
      >
        <MdAddShoppingCart
          className="text-red-700  mr-1  xs:mr-0 md:mr-1 "
          size={18}
        />
        add to cart
      </button>
      <button
        className={`${
          state
            ? "w-5/12 xs:w-3/4 sm:w-3/5 p-1.5 xs:p-1 flex justify-between items-center cursor-pointer rounded-2xl absolute -bottom-4 bg-red-800"
            : "hidden"
        }`}
      >
        <FaCircleMinus color="white" className="ml-1.5" onClick={handleDecrease}/>
        <p className=" text-white">{count}</p>
        <FaCirclePlus color="white" className="mr-1.5" onClick={handleIncrease} />
      </button>
    </>
  );
};

export default ButtonCard;
