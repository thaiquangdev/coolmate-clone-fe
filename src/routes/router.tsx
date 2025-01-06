import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout";
import {
  Address,
  Cart,
  Faq,
  Feedback,
  ForgotPassword,
  Home,
  Info,
  OrderHistory,
  ProductDetail,
  Products,
  ResetPassword,
  Voucher,
} from "../pages";
import { Search, Sidebar } from "../components/common";
import ProfileLayout from "../components/layout/ProfileLayout";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Search />
        <Sidebar />
        <MainLayout />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "product/:slug", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
      {
        path: "account",
        element: (
          <ProtectedRoute>
            <ProfileLayout />
          </ProtectedRoute>
        ),
        children: [
          { path: "vouchers", element: <Voucher /> },
          { path: "info", element: <Info /> },
          { path: "orders", element: <OrderHistory /> },
          { path: "address", element: <Address /> },
          { path: "feedback", element: <Feedback /> },
          { path: "faq", element: <Faq /> },
        ],
      },
    ],
  },
]);

export default router;
