import CarouselD from "./Carrousel/CarouselD";
import CarouselM from "./Carrousel/CarouselM";

const FirtsContent = () => {
  return (
    <div className="w-full lg:w-[40%] flex">
      <div className="flex lg:hidden">
        <CarouselM />
      </div>
      <div className="hidden lg:flex lg:flex-col lg:gap-6">
        <CarouselD />
      </div>
    </div>
  );
};

export default FirtsContent;
