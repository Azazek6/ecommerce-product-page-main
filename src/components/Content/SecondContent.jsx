import ShopSection from "./ShopSection";

const SecondContent = () => {
  return (
    <div className="lg:w-[60%] p-5 flex flex-col gap-2">
      <h4 className="text-[0.6rem] lg:text-sm text-[hsl(219,9%,45%)] font-bold tracking-widest">
        SNEAKER COMPANY
      </h4>
      <h2 className="text-2xl lg:text-4xl font-bold text-[hsl(0,0%,0%)]">
        Fall Limited Edition Sneakers
      </h2>
      <p className="text-sm lg:text-lg text-[hsl(219,9%,45%)] font-semibold">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start mt-2">
        <div className="flex items-center gap-3">
          <p className="text-[#0d0f13] font-bold text-2xl">$125.00</p>
          <span className="bg-[#1d1f26] text-xs text-white py-1 px-2 rounded-md font-semibold mt-1">
            50%
          </span>
        </div>
        <span className="text-[#808286] font-bold text-sm line-through mt-1">
          $250.00
        </span>
      </div>
      <ShopSection />
    </div>
  );
};

export default SecondContent;
