// import React, { useEffect } from "react";
import Img from "../../assets/Images/icon-order-confirmed.svg";
import InfoOrder from "../InfoOrder/InfoOrder";
import StartNewOrder from "../StartNewOrder/StartNewOrder";

const ShowModal = ({ stateModal }) => {
  return (
    <div className=" fixed inset-0 bg-black/50 flex justify-center items-end xs:flex xs:justify-center xs:items-center z-50">
      <div className="bg-white overflow-auto max-h-[88vh]  w-full xs:w-[70vw]  xs:rounded-lg  xs:max-w-[400px] lg:max-w-[450px] z-50  p-8">
        <img src={Img} alt="this is image confirm" />
        <p className=" capitalize font-bold text-3xl mt-3">order confirmed</p>
        <p className="mt-2.5 text-zinc-500 text-sm">
          We hope you enjoy your food!
        </p>
        <InfoOrder />
        <StartNewOrder activeModal={stateModal} />
      </div>
    </div>
  );
};

export default ShowModal;
