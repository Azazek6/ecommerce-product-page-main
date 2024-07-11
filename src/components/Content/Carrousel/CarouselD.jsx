import { useState } from "react";

const CarouselD = () => {
  const [selectorImage, setSelectorImage] = useState("image-product-1");
  return (
    <>
      <img
        src={`/ecommerce-product-page-main/${selectorImage}.jpg`}
        alt="producto"
        className="w-[100%] h-[300px] xl:h-[400px] rounded-xl bg-cover bg-no-repeat bg-center"
      />
      <div className="w-[100%] flex justify-around gap-5 xl:gap-0">
        <img
          src="/ecommerce-product-page-main/image-product-1-thumbnail.jpg"
          alt="producto01"
          onClick={()=>setSelectorImage("image-product-1")}
          className={`w-[21%] xl:w-[18%] rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer border-2 ${selectorImage === "image-product-1" ? "border-[#e97a2b] opacity-50" : "hover:border-[#e97a2b] hover:opacity-50"} `}
        />
        <img
          src="/ecommerce-product-page-main/image-product-2-thumbnail.jpg"
          alt="producto02"
          onClick={()=>setSelectorImage("image-product-2")}
          className="w-[21%] xl:w-[18%] rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer border-2 hover:border-[#e97a2b] hover:opacity-50"
        />
        <img
          src="/ecommerce-product-page-main/image-product-3-thumbnail.jpg"
          alt="producto03"
          onClick={()=>setSelectorImage("image-product-3")}
          className="w-[21%] xl:w-[18%] rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer border-2 hover:border-[#e97a2b] hover:opacity-50"
        />
        <img
          src="/ecommerce-product-page-main/image-product-4-thumbnail.jpg"
          alt="producto04"
          onClick={()=>setSelectorImage("image-product-4")}
          className="w-[21%] xl:w-[18%] rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer border-2 hover:border-[#e97a2b] hover:opacity-50"
        />
      </div>
    </>
  );
};

export default CarouselD;
