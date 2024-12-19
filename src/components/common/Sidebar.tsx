// Sidebar.tsx
import { useSidebar } from "../../contexts/SideBarProvider";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { profileSidebars } from "../../lib/constrant";
import useUserStore from "../../store/useUser";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();
  const { user, logout } = useUserStore();

  return (
    <div>
      {/* Lớp phủ (overlay) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar} // Bấm vào lớp phủ để tắt sidebar
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white transition-transform ${
          isSidebarOpen ? "transform-none" : "translate-x-full"
        } w-full max-w-[400px] z-50`}
      >
        <Button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 text-white text-2xl"
        >
          <IoCloseSharp size={20} />
        </Button>
        <div className="flex flex-col w-full h-full pt-[50px]">
          <div className="w-full py-4 px-9 border-b border-b-[#e1e1e1]">
            <div className="flex items-center text-[2.25rem]">
              Hi, {user?.fullName}
            </div>{" "}
          </div>
          <div className="py-4 px-9 flex flex-col">
            {profileSidebars.map((item) => (
              <div className="w-full pb-[10px] " key={item.id}>
                <Link
                  onClick={closeSidebar}
                  to={item.url}
                  className="flex items-center gap-3 rounded-[0.5rem] px-2 py-4 bg-[#f1f1f1]"
                >
                  <span className="h-[2.625rem] w-[2.625rem]">
                    <img
                      src={item.urlImg}
                      alt=""
                      className="h-auto max-w-full"
                    />
                  </span>
                  <span className="text-[1rem] text-center">{item.title}</span>
                </Link>
              </div>
            ))}
            <div className="w-full pb-[10px] ">
              <Link
                onClick={() => {
                  closeSidebar();
                  logout();
                }}
                to="#"
                className="flex items-center gap-3 rounded-[0.5rem] px-2 py-4 bg-[#f1f1f1]"
              >
                <span className="h-[2.625rem] w-[2.625rem]">
                  <img
                    src="https://mcdn.coolmate.me/image/September2023/mceclip4_6.png"
                    alt=""
                    className="h-auto max-w-full"
                  />
                </span>
                <span className="text-[1rem] text-center">Đăng xuất</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
