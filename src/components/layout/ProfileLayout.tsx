import { Outlet } from "react-router-dom";
import { ProfileHeader, ProfileSidebar } from "../common";

const ProfileLayout = () => {
  return (
    <div className="mt-[80px] pt-[50px] bg-[#d9d9d9]">
      <div className="xl:px-[64px] mx-auto w-full max-w-[1920px]">
        <ProfileHeader />
        <div className="flex gap-[4.5rem]">
          <ProfileSidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
