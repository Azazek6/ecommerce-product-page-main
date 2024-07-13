import { useState, useEffect } from "react";
import CarouselModal from "./CarouselModal";

const CarouselD = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectorImage, setSelectorImage] = useState("image-product-1");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setOpenModal(false);
      }
    };

    // Set the initial state based on the current window size
    if (mediaQuery.matches) {
      setOpenModal(false);
    }

    // Listen for changes in the media query
    mediaQuery.addListener(handleMediaQueryChange);

    // Clean up the listener when the component unmounts
    return () => mediaQuery.removeListener(handleMediaQueryChange);
  }, []);

  return (
    <>
      <img
        src={`/ecommerce-product-page-main/${selectorImage}.jpg`}
        alt="producto"
        className="w-[100%] h-[300px] xl:h-[400px] rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer"
        onClick={() => setOpenModal(true)}
      />
      <CarouselModal
        onOpen={openModal}
        onClose={() => setOpenModal(false)}
        image={selectorImage}
      />
      <div className="w-[100%] flex justify-around gap-5 xl:gap-0">
        <img
          src="/ecommerce-product-page-main/image-product-1-thumbnail.jpg"
          alt="producto01"
          onClick={() => setSelectorImage("image-product-1")}
          className={`w-[21%] xl:w-[18%] rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer border-2 ${
            selectorImage === "image-product-1"
              ? "border-[#e97a2b] opacity-50"
              : "hover:border-[#e97a2b] hover:opacity-50"
          }`}
        />
        <img
          src="/ecommerce-product-page-main/image-product-2-thumbnail.jpg"
          alt="producto02"
          onClick={() => setSelectorImage("image-product-2")}
          className={`w-[21%] xl:w-[18%] rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer border-2 ${
            selectorImage === "image-product-2"
              ? "border-[#e97a2b] opacity-50"
              : "hover:border-[#e97a2b] hover:opacity-50"
          }`}
        />
        <img
          src="/ecommerce-product-page-main/image-product-3-thumbnail.jpg"
          alt="producto03"
          onClick={() => setSelectorImage("image-product-3")}
          className={`w-[21%] xl:w-[18%] rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer border-2 ${
            selectorImage === "image-product-3"
              ? "border-[#e97a2b] opacity-50"
              : "hover:border-[#e97a2b] hover:opacity-50"
          }`}
        />
        <img
          src="/ecommerce-product-page-main/image-product-4-thumbnail.jpg"
          alt="producto04"
          onClick={() => setSelectorImage("image-product-4")}
          className={`w-[21%] xl:w-[18%] rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer border-2 ${
            selectorImage === "image-product-4"
              ? "border-[#e97a2b] opacity-50"
              : "hover:border-[#e97a2b] hover:opacity-50"
          }`}
        />
      </div>
    </>
  );
};

export default CarouselD;
