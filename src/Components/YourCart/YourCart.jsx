import React from "react";
import Img from "../../assets/Images/illustration-empty-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineCancel } from "react-icons/md";
import { removeItem } from "../../redux/CardSlice";
import Img2 from "../../assets/Images/icon-carbon-neutral.svg"
import ConfirmOrder from "../ConfirmOrder/ConfirmOrder";
const YourCart = () => {
  const countDesserts = useSelector((state) => state.card.count);
  const cardItems = useSelector((state) => state.card.items);
  const orderTotal=useSelector(state=>state.card.finalTotal)
  console.log(cardItems);
const dispatch=useDispatch()
const handleClick=(id)=>{
  dispatch(removeItem(id))
}
  return (
    <>
      <h2 className=" capitalize text-red-700 font-bold text-xl tracking-wider mb-2">
        your cart({countDesserts})
      </h2>
      <div
        className={`${
          countDesserts == 0
            ? "w-full flex flex-col justify-center items-center"
            : "hidden"
        }`}
      >
        <img
          src={Img}
          alt="this is image cake"
          className="w-1/3 xs:w-1/4 h-16 m-2.5"
        />
        <p className="text-xs text-zinc-500">
          your added items will appear here
        </p>
      </div>
      {cardItems &&
        cardItems.map((item) => (
          <>
          <div key={item.idProduct} className="w-full flex justify-between">
            <div className="">
            <p className=" capitalize text-sm xs:text-xs sm:text-sm font-medium tracking-wider mb-1">
              {item.descrProduct}
            </p>
             <div className=" flex items-center">
                <p className="text-red-700 mr-3.5 font-medium text-sm">
                  {item.quantity}x
                </p>
                <p className="text-zinc-500">
                  <span className="text-xs text-zinc-500">@</span> $
                  {item.priceProduct}
                </p>
                <p className="text-zinc-600 font-medium ml-3.5">
                  ${parseFloat(item.finalPrice.toFixed(2))}
                </p>
              </div>
              </div>
              <div className=" flex justify-center items-center mt-0.5 ml-1.5">
               <MdOutlineCancel size={18} className="text-gray-400 cursor-pointer hover:text-black" onClick={()=>handleClick(item.idProduct)} />
              </div>
            </div>
             <hr className="w-full h-0.5 text-gray-200 my-3.5" />
        </>
        ))}
        <div className={`${countDesserts==0?"hidden":"  w-full flex justify-between items-center"}`}>
          <p className=" capitalize  text-sm">order Total</p>
          <p className="font-bold text-2xl xs:text-xl sm:text-2xl">${parseFloat(orderTotal.toFixed(2))}</p>
        </div>
        <div className={`${countDesserts==0?"hidden":"w-full flex justify-center items-center bg-gray-50 rounded-md py-2 mt-4 xs:px-1.5"}`}>
          <img src={Img2} className="w-4.5"/>
          <p className="ml-1.5 text-sm xs:text-xs xs:ml-0  md:text-sm md:ml-1.5">This is a <span className="font-medium">carbon-neutral</span> delivery</p>
        </div>
        <div className={`${countDesserts!=0?"text-sm text-gray-600 mt-3":"hidden"}`}>Once you confirm, the order cannot be modified</div>
        {countDesserts!=0?<ConfirmOrder/>:<></>}
    </>
  );
};

export default YourCart;
