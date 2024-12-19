import React, { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useUserStore from "../store/useUser";

interface ProtectedRouteProps {
  children?: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = () => {
  const { user } = useUserStore();
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
