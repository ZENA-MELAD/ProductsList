import React from "react";
import { useDispatch } from "react-redux";
import { newOrder } from "../../redux/CardSlice";

const StartNewOrder = ({ activeModal }) => {
  const dispatch=useDispatch()
  const handleClick = () => {
    activeModal();
    dispatch(newOrder())
  };
  return (
    <button
      className=" capitalize w-full text-center rounded-3xl bg-red-700 mt-5 p-1.5 text-white font-medium cursor-pointer transition-all ease-in-out duration-300 hover:bg-red-800"
      onClick={handleClick}
    >
      start new order
    </button>
  );
};

export default StartNewOrder;
