import { MdAddShoppingCart } from "react-icons/md";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/CardSlice";

const ButtonCard = ({ item }) => {
  const disptch = useDispatch();
  const productInStore = useSelector((state) =>
    state.card.items.find((i) => i.idProduct === item.id)
  );
  const counter = productInStore ? productInStore.quantity : 0;
  const isActive = counter > 0;
  const handleClick = () => {
    disptch(
      increment({
        idProduct: item.id,
        descrProduct: item.description,
        priceProduct: item.price,
        imgProduct: item.image
,
      })
    );
  };
  const handleIncrease = () => {
    disptch(
      increment({
        idProduct: item.id,
        descrProduct: item.description,
        priceProduct: item.price,
        imgProduct: item.img,
      })
    );
  };
  const handleDecrease = () => {
    disptch(
      decrement({
        idProduct: item.id,
        descrProduct: item.description,
        priceProduct: item.price,
        imgProduct: item.img,
      })
    );
  };

  return (
    <>
      <button
        className="w-1/2 xs:w-3/4 sm:w-3/5 lg:w-2/3  p-1.5 xs:p-1 flex justify-center items-center cursor-pointer bg-white rounded-2xl  border border-zinc-500 absolute 
      -bottom-4 capitalize text-sm font-medium  xs:text-xs  lg:text-xs
       hover:text-red-700  hover:border hover:border-red-700"
        onClick={handleClick}
      >
        <MdAddShoppingCart
          className="text-red-700  mr-1  xs:mr-0  "
          size={18}
        />
        add to cart
      </button>
      <button
        className={`${
          isActive
            ? "w-1/2 xs:w-3/4 sm:w-3/5 p-1.5 xs:p-1 lg:w-2/3 flex justify-between items-center cursor-pointer rounded-2xl absolute -bottom-4 bg-red-800"
            : "hidden"
        }`}
      >
        <FaCircleMinus
          color="white"
          size={19}
          className="ml-1.5"
          onClick={handleDecrease}
        />
        <p className=" text-white">{counter}</p>
        <FaCirclePlus
          color="white"
          size={19}
          className="mr-1.5"
          onClick={handleIncrease}
        />
      </button>
    </>
  );
};

export default ButtonCard;
