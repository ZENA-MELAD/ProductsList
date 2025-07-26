import React, { useEffect } from "react";
import Img from "../../assets/Images/icon-order-confirmed.svg";

const ShowModal = ({ isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);
  return (
    <div className=" fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[30%] rounded-lg z-50 h-[65vh] p-8">
        <img src={Img} alt="this is image confirm" />
        <p className=" capitalize font-bold text-3xl mt-3">order confirmed</p>
        <p className="mt-2 text-zinc-500 text-sm">
          We hope you enjoy your food!
        </p>
      </div>
    </div>
  );
};

export default ShowModal;
