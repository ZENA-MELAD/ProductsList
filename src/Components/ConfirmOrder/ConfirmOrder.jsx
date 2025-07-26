import React, { useState } from "react";
import ShowModal from "../ShowModal/ShowModal";

const ConfirmOrder = () => {
    const[openModal,setOpenModal]=useState(false)
    const handleOpenModal=()=>{
        setOpenModal(true)
    }
  return (
    <>
    <button className=" capitalize text-center bg-red-700 mt-4 py-2.5 xs:py-1 rounded-3xl text-white w-full cursor-pointer font-medium" 
    onClick={handleOpenModal}
    >
      confirm order
    </button>
    {openModal&&<ShowModal isOpen={openModal}/>}
    </>
  );
};

export default ConfirmOrder;
