import { RiMenu2Fill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MenuHeader } from "../../lib/constrant";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import Auth from "./Auth";
import { useSidebar } from "../../contexts/SideBarProvider";
import { useEffect, useState } from "react";
import useUserStore from "../../store/useUser";
import PopupCart from "./PopupCart";
import { useCartStore } from "../../store/useCart";

const Header = () => {
  const { toggleSidebar } = useSidebar();
  const { fetchUser, user } = useUserStore();
  const { fetchCarts, carts } = useCartStore();
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
            <ul className="mr-[10px] flex items-center justify-center opacity-1">
              {MenuHeader.map((item) => (
                <li className="flex items-center cursor-auto text-[16px] py-[31px] px-[16px] text-white max-h-[82px]">
                  <Link to={item.url} className="relative text-[14px]">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* ACTIONS */}
          <div className="relative flex items-center">
            <div className="xl:block hidden">
              <label htmlFor="">
                <Input
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
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <img
                  src="https://www.coolmate.me/images/header/icon-cart-white-new.svg?v=1"
                  alt="cart button"
                  className="max-w-full h-auto"
                />
                <span className="absolute flex items-center justify-center bottom-[5px] right-[8px] w-[15px] h-[15px] pointer-events-none font-bold text-[10px] text-black rounded-full bg-[#f9f86c]">
                  {carts.details?.length}
                </span>
                {isCartOpen && <PopupCart details={carts.details} />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
