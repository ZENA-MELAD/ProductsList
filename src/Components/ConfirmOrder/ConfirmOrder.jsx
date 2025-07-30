import React, { useEffect, useState } from "react";
import ShowModal from "../ShowModal/ShowModal";

const ConfirmOrder = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
  };
  useEffect(() => {
    if (openModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [openModal]);
  return (
    <>
      <button
        className=" capitalize text-center bg-red-700 mt-4 py-2.5 xs:py-1 rounded-3xl text-white w-full cursor-pointer font-medium transition-all ease-in-out duration-300 hover:bg-red-800"
        onClick={handleOpenModal}
      >
        confirm order
      </button>
      {openModal && <ShowModal stateModal={handleOpenModal} />}
    </>
  );
};

export default ConfirmOrder;
