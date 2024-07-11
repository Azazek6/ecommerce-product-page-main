import ShopCart from "./ShopCart";
import Link from "./Link";

const Header = () => {
  return (
    <nav className="bg-[hsl(0,0%,100%)] flex items-center p-4 justify-between lg:py-4 lg:px-24 xl:px-36">
      <div className="flex items-center gap-3 sm:gap-5 md:gap-12">
        <img
          src="/ecommerce-product-page-main/icon-menu.svg"
          width={100}
          height={100}
          alt="menu-bar"
          className="w-[10%] flex sm:hidden"
        />

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
