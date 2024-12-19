import {
  CartPaymentMethod,
  FixedCart,
  OrderInformation,
} from "../components/common";
import CartCheckout from "../components/common/CartCheckout";

const Cart = () => {
  return (
    <div className="min-h-[300px] pt-[80px]">
      <div className="xl:px-[64px] mx-auto max-w-[1920px] w-full">
        <div className="flex flex-row flewx-wrap float-none mx-[-9px]">
          <div className="px-[20px] w-7/12">
            <OrderInformation />
            <CartPaymentMethod />
          </div>
          <div className="w-5/12 px-[9px]">
            <CartCheckout />
          </div>
        </div>
        {/* FIXED CART */}
        <FixedCart />
      </div>
    </div>
  );
};

export default Cart;
