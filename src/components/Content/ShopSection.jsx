import { IoCartOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  addProducts,
} from "../../features/CartShop/CartSlice";

const ShopSection = () => {
  const amount = useSelector((state) => state.cart.amount);
  const dispatch = useDispatch();

  const addItems = () => {
    const item = {
      product: "Fall Limited Edition Sneakers",
      price: 125,
      amount: amount,
      total: amount * 125,
    };
    dispatch(addProducts(item));
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-5 mt-4">
      <div className="md:w-[40%] flex items-center justify-between px-5">
        <img
          src="/ecommerce-product-page-main/icon-minus.svg"
          alt=""
          className="cursor-pointer"
          onClick={() => dispatch(decrement())}
        />
        <span className="text-sm font-bold text-black">{amount}</span>
        <img
          src="/ecommerce-product-page-main/icon-plus.svg"
          alt=""
          className="cursor-pointer"
          onClick={() => dispatch(increment())}
        />
      </div>
      <button
        className={`md:w-[60%] bg-[#ff7c1f] font-semibold text-black text-xs flex items-center justify-center gap-3 py-4 rounded-xl hover:bg-[#feab6b] transition-all duration-300 ease-in-out ${amount == 0 ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
        onClick={addItems}
        disabled={amount == 0}
      >
        <IoCartOutline className="text-base" />
        Add to cart
      </button>
    </div>
  );
};

export default ShopSection;
