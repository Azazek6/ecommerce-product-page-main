/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";

const CarouselModal = ({ onOpen, onClose, image = "image-product-1" }) => {
  const [selectorImage, setSelectorImage] = useState(image);

  useEffect(()=>{
    setSelectorImage(image)
  },[image])

  return (
    <Dialog onOpenChange={onClose} defaultOpen={onOpen} open={onOpen}>
      <DialogContent className="bg-transparent border-none">
        <DialogHeader className="mt-6">
          <DialogDescription className="w-full flex flex-col items-center justify-center gap-6">
            <img
              src={`/ecommerce-product-page-main/${selectorImage}.jpg`}
              alt="producto"
              className="h-[480px] w-[80%] rounded-lg bg-cover bg-no-repeat bg-center"
            />
            <div className="w-[100%] flex justify-center gap-8">
              <img
                src="/ecommerce-product-page-main/image-product-1-thumbnail.jpg"
                alt="producto01"
                onClick={() => setSelectorImage("image-product-1")}
                className={`w-[12%] rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer ${
                  selectorImage === "image-product-1"
                    ? "border-[#e97a2b] opacity-50"
                    : "hover:border-[#e97a2b] hover:opacity-50"
                }`}
              />
              <img
                src="/ecommerce-product-page-main/image-product-2-thumbnail.jpg"
                alt="producto02"
                onClick={() => setSelectorImage("image-product-2")}
                className={`w-[12%] rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer ${
                  selectorImage === "image-product-2"
                    ? "border-[#e97a2b] opacity-50"
                    : "hover:border-[#e97a2b] hover:opacity-50"
                }`}
              />
              <img
                src="/ecommerce-product-page-main/image-product-3-thumbnail.jpg"
                alt="producto03"
                onClick={() => setSelectorImage("image-product-3")}
                className={`w-[12%] rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer ${
                  selectorImage === "image-product-3"
                    ? "border-[#e97a2b] opacity-50"
                    : "hover:border-[#e97a2b] hover:opacity-50"
                }`}
              />
              <img
                src="/ecommerce-product-page-main/image-product-4-thumbnail.jpg"
                alt="producto04"
                onClick={() => setSelectorImage("image-product-4")}
                className={`w-[12%] rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer ${
                  selectorImage === "image-product-4"
                    ? "border-[#e97a2b] opacity-50"
                    : "hover:border-[#e97a2b] hover:opacity-50"
                }`}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CarouselModal;
