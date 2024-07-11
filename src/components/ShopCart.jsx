import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { removeProduct } from "@/features/CartShop/CartSlice";

const ShopCart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const [openPopover, setOpenPopover] = useState(false);
  const popoverRef = useRef();

  // Función para manejar clics fuera del popover
  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setOpenPopover(false);
    }
  };

  const deleteItem = (index) => {
    dispatch(removeProduct(index));
  };

  const renderItems = () => {
    if (products.length == 0) {
      return (
        <div className="w-full flex flex-col py-4 bg-white rounded-lg">
          <h2 className="pl-4 pb-4 font-bold text-sm">Cart</h2>
          <hr />
          <p className="p-16 text-center font-bold text-[hsl(219,9%,45%)] text-sm">
            Your cart is empty
          </p>
        </div>
      );
    }
    if (products.length > 0) {
      return (
        <div className="w-full flex flex-col py-4 bg-white rounded-lg">
          <h2 className="pl-4 pb-4 font-bold text-sm">Cart</h2>
          <hr />
          {products?.map(({ product, price, amount, total }, index) => (
            <div
              className="flex justify-center items-center gap-4 py-4"
              key={index}
            >
              <img
                src="/ecommerce-product-page-main/image-product-1-thumbnail.jpg"
                alt="product-image"
                className="w-[15%] rounded-md bg-cover bg-no-repeat"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-[hsl(219,9%,45%)] text-sm">{product}</h2>
                <span className="text-[hsl(219,9%,45%)] text-sm">
                  ${price} x {amount}{" "}
                  <span className="text-black font-bold">${total}</span>
                </span>
              </div>
              <FaTrashAlt
                className="text-[#c6cbd0] text-lg cursor-pointer"
                onClick={() => deleteItem(index)}
              />
            </div>
          ))}

          <div className="flex justify-center py-3 px-8">
            <button className="w-[100%] bg-[#ff7c1f] font-bold text-black text-xs flex items-center justify-center gap-3 py-4 rounded-lg hover:bg-[#feab6b] transition-all duration-300 ease-in-out">
              Checkout
            </button>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    // Añadir el event listener cuando el popover está abierto
    if (openPopover) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openPopover]);

  return (
    <>
      <IoCartOutline
        className="text-xl lg:text-2xl cursor-pointer"
        onClick={() => setOpenPopover(!openPopover)}
      />

      <AnimatePresence>
        {openPopover && (
          <motion.div
            ref={popoverRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full lg:w-1/3 lg:shadow-2xl z-50 lg:z-[100] top-16 right-0 flex px-2"
          >
            {renderItems()}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShopCart;
