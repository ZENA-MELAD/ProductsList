import React from "react";
import { useSelector } from "react-redux";
const InfoOrder = () => {
  const products = useSelector((state) => state.card.items);
  const totalPrice = useSelector((state) => state.card.finalTotal);
  return (
    <div className="bg-pink-50 mt-3 rounded-md p-4">
      {products.map((product) => (
        <div key={product.idProduct}>
          <div className="w-full flex justify-between items-center">
            <div className=" flex justify-center items-center">
              <div className="w-12 h-12 rounded-sm">
                <img
                  src={product.imgProduct}
                  className="w-full h-full rounded-sm"
                />
              </div>
              <div className="ml-2">
                <p className="capitalize text-xs xs:text-xs sm:text-sm font-medium tracking-wider mb-1">
                  {product.descrProduct}
                </p>
                <div className="flex items-center">
                  <p className="text-red-700 mr-3.5 font-medium text-sm">
                    {product.quantity}x
                  </p>
                  <p className="text-gray-600">
                    <span className="text-xs text-gray-600">@</span> $
                    {product.priceProduct}
                  </p>
                </div>
              </div>
            </div>
            <div className="font-medium text-lg">${parseFloat(product.finalPrice.toFixed(2))}</div>
          </div>
          <hr className="w-full h-0.5 text-gray-200 my-3.5" />
        </div>
      ))}
      <div className="w-full flex justify-between items-center mt-3">
        <p className="text-zinc-600 capitalize text-sm">order Total</p>
        <p className="font-bold text-2xl xs:text-xl sm:text-2xl">
          ${parseFloat(totalPrice.toFixed(2))}
        </p>
      </div>
    </div>
  );
};

export default InfoOrder;
