import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dataSlider from "../../../sample/sliderMobil.json";

const CarouselM = () => {
  return (
    <Carousel className="relative w-full">
      <CarouselContent>
        {dataSlider.map(({ product, alt }, index) => (
          <CarouselItem key={index}>
            <img
              src={`/ecommerce-product-page-main/${product}`}
              width={100}
              height={100}
              alt={alt}
              className="w-full h-[320px] md:h-[450px] bg-cover bg-center"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="w-[100%] absolute top-1/2 px-3">
        <div className="w-[100%] flex items-center justify-between">
          <CarouselPrevious className="font-bold" />
          <CarouselNext className="font-bold" />
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselM;
