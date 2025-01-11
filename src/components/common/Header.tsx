import { RiMenu2Fill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  MenuHeader,
  navAccessories,
  navShirts,
  navTrousers,
} from "../../lib/constrant";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import Auth from "./Auth";
import { useSidebar } from "../../contexts/SideBarProvider";
import { useEffect, useState } from "react";
import useUserStore from "../../store/useUser";
import PopupCart from "./PopupCart";
import { useCartStore } from "../../store/useCart";
import { useSearch } from "../../contexts/SearchProvider";

const Header = () => {
  const { toggleSidebar } = useSidebar();
  const { fetchUser, user } = useUserStore();
  const { fetchCarts, carts } = useCartStore();
  const { openSearch } = useSearch();
  const [open, setOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetchUser();
    fetchCarts();
  }, []);
  return (
    <header className="h-auto left-0 right-0 fixed top-0 transition-all w-full z-10">
      <div className="bg-primary-color relative transition-all">
        <div className="xl:px-[64px] px-[30px] flex items-center justify-between w-full h-[82px]">
          {/* ICON MENU MOBILE */}
          <div className="lg:hidden flex items-center gap-3">
            <RiMenu2Fill size={25} color="#fff" />
            <RiSearchLine size={25} color="#fff" />
          </div>
          {/* LOGO */}
          <div className="w-[144px]">
            <Link to="/" className="flex items-center justify-center">
              <img
                src="https://www.coolmate.me/images/logo-coolmate-new.svg?v=1"
                alt=""
                className="w-auto h-full"
              />
            </Link>
          </div>
          {/* MENU */}
          <div className="lg:block hidden">
            <ul className="mr-[10px] flex items-center justify-center opacity-1 relative">
              {/* Trang chủ */}
              <li className="flex items-center cursor-auto text-[16px] py-[31px] px-[16px] text-white max-h-[82px]">
                <Link to="/" className="relative text-[14px]">
                  TRANG CHỦ
                </Link>
              </li>

              {/* Sản phẩm */}
              <li className="group flex items-center cursor-auto text-[16px] py-[31px] px-[16px] text-white max-h-[82px] relative">
                <Link to="/products" className="relative text-[14px]">
                  SẢN PHẨM
                </Link>
                {/* Sub-menu Sản phẩm */}
                <div className="absolute top-[82px] left-0 bg-white shadow-lg hidden group-hover:flex  min-w-[600px]">
                  <div className="w-1/3 flex flex-col">
                    <p className="py-2 px-4 text-black font-bold text-[20px]">
                      Áo Nam
                    </p>
                    {navShirts.map((item) => (
                      <Link
                        key={item.title}
                        to={item.url}
                        className="px-4 py-1 hover:bg-gray-200 text-black text-[14px]"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  <div className="w-1/3 flex flex-col">
                    <p className="py-2 px-4 text-black font-bold text-[20px]">
                      Quần Nam
                    </p>
                    {navTrousers.map((item) => (
                      <Link
                        key={item.title}
                        to={item.url}
                        className="px-4 py-1 hover:bg-gray-200 text-black text-[14px]"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  <div className="w-1/3 flex flex-col">
                    <p className="py-2 px-4 text-black font-bold text-[20px]">
                      Phụ khiện Nam
                    </p>
                    {navAccessories.map((item) => (
                      <Link
                        key={item.title}
                        to={item.url}
                        className="px-4 py-1 hover:bg-gray-200 text-black text-[14px]"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Bộ sưu tập */}
              <li className="group flex items-center cursor-auto text-[16px] py-[31px] px-[16px] text-white max-h-[82px] relative">
                <Link to="#" className="relative text-[14px]">
                  BỘ SƯU TẬP
                </Link>
                {/* Sub-menu Bộ sưu tập */}
                <div className="absolute top-[82px] left-0 bg-white shadow-lg hidden group-hover:flex flex-col min-w-[200px]">
                  <Link
                    to="/collections/summer"
                    className="px-4 py-2 hover:bg-gray-200 text-black"
                  >
                    Bộ sưu tập mùa hè
                  </Link>
                  <Link
                    to="/collections/winter"
                    className="px-4 py-2 hover:bg-gray-200 text-black"
                  >
                    Bộ sưu tập mùa đông
                  </Link>
                  <Link
                    to="/collections/sport"
                    className="px-4 py-2 hover:bg-gray-200 text-black"
                  >
                    Bộ sưu tập thể thao
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          {/* ACTIONS */}
          <div className="relative flex items-center">
            <div className="xl:block hidden">
              <label htmlFor="">
                <Input
                  onClick={openSearch}
                  placeholder="Tìm kiếm sản phẩm..."
                  autoComplete="off"
                  type="text"
                  className="bg-[#e8e8e8] rounded-[33px] h-[50px] pr-[20px] pl-[40px] w-full"
                />
                <div className="cursor-pointer left-[10px] absolute top-[13px] z-10">
                  <RiSearchLine size={26} />
                </div>
              </label>
            </div>
            <div className="flex items-center h-[48px] justify-center relative w-[48px]">
              {user ? (
                <Link to="#" onClick={toggleSidebar}>
                  <img
                    src="https://mcdn.coolmate.me/image/October2023/mceclip3_72.png"
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                </Link>
              ) : (
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-transparent hover:bg-transparent px-0 py-0 w-full h-full ">
                      <img
                        src="https://www.coolmate.me/images/header/icon-account-white-new.svg"
                        alt="auth button"
                        className="max-w-full h-auto"
                      />
                    </Button>
                  </DialogTrigger>
                  <Auth onClose={() => setOpen(false)} />
                </Dialog>
              )}
            </div>
            <div className="flex items-center h-[48px] justify-center relative w-[48px]">
              <Button
                className="bg-transparent hover:bg-transparent px-0 py-0 w-full h-full relative"
                onClick={() => setIsCartOpen((prev) => !prev)} // Toggle trạng thái mở popup cart
              >
                <img
                  src="https://www.coolmate.me/images/header/icon-cart-white-new.svg?v=1"
                  alt="cart button"
                  className="max-w-full h-auto"
                />
                {carts.details?.length > 0 && ( // Chỉ hiển thị số lượng nếu có sản phẩm trong cart
                  <span className="absolute flex items-center justify-center bottom-[5px] right-[8px] w-[15px] h-[15px] pointer-events-none font-bold text-[10px] text-black rounded-full bg-[#f9f86c]">
                    {carts.details.length}
                  </span>
                )}
                {isCartOpen &&
                  carts.details?.length > 0 && ( // Chỉ hiển thị popup cart khi có sản phẩm
                    <PopupCart details={carts.details} />
                  )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
