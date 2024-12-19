import { Outlet } from "react-router-dom";
import { Footer, Header } from "../common";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
