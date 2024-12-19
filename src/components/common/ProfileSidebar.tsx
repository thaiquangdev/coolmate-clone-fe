import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { profileMains } from "../../lib/constrant";

const ProfileSidebar = () => {
  return (
    <div className="max-w-full w-[385px]">
      <div className="border-r border-[#d9d9d9]">
        <div>
          {profileMains.map((item) => (
            <Link
              key={item.id}
              to={item.url ? item.url : "#"}
              className="mb-[0.5rem] flex items-center bg-white rounded-[0.5rem] text-[1rem] h-[55px] py-[12px] pr-[48px] pl-[12px] w-full transition-all duration-200 hover:bg-primary-color hover:text-white"
            >
              <span className="flex items-center justify-between w-full">
                <span className="h-[29px] w-[29px] mr-[0.5rem] block">
                  <img src={item.urlImg} alt="" />
                </span>
                <span className="block flex-1">{item.title}</span>
                <span className="block">
                  <FaArrowRightLong size={20} />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
