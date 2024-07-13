import { useState, useEffect } from "react";
import ShopCart from "./ShopCart";
import HeaderMobil from "./HeaderMobil";
import Link from "./Link";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 624px)");
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
    <nav className="bg-[hsl(0,0%,100%)] flex items-center p-4 justify-between lg:py-4 lg:px-24 xl:px-36">
      <div className="flex items-center gap-3 sm:gap-5 md:gap-12">
        <img
          src="/ecommerce-product-page-main/icon-menu.svg"
          width={100}
          height={100}
          alt="menu-bar"
          className="w-[10%] flex sm:hidden"
          onClick={setOpenModal}
        />

        <HeaderMobil OnClose={setOpenModal} onOpen={openModal} />

        <img
          src="/ecommerce-product-page-main/logo.svg"
          width={100}
          height={100}
          alt="logo"
          className="w-[60%]"
        />

        <div className="hidden sm:flex items-center gap-4 mt-1">
          <Link title={"Collections"} />
          <Link title={"Men"} />
          <Link title={"Women"} />
          <Link title={"About"} />
          <Link title={"Contact"} />
        </div>
      </div>
      <div className="flex items-center justify-end gap-4">
        <ShopCart />

        <img
          src="/ecommerce-product-page-main/image-avatar.png"
          width={100}
          height={100}
          alt=""
          className="w-[20%] xl:w-[30%] hover:border hover:border-[#ff7c1f] hover:rounded-full cursor-pointer transition-all duration-300 ease-in-out"
        />
      </div>
    </nav>
  );
};

export default Header;
