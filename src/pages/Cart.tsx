import { useState } from "react";
import {
  CartPaymentMethod,
  FixedCart,
  OrderInformation,
} from "../components/common";
import CartCheckout from "../components/common/CartCheckout";
import { useCartStore } from "../store/useCart";
import { useToast } from "../hooks/use-toast";
import { checkoutCodApi } from "../apis/orderService";

const Cart = () => {
  const { toast } = useToast();
  const { carts } = useCartStore();
  const [addressId, setAddressId] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>("cod");

  const handleChangeAddress = (aid: number) => {
    setAddressId(aid);
  };

  const handleChangePaymentMethod = (paymentMethod: string) => {
    setPaymentMethod(paymentMethod);
  };

  const handleOrder = () => {
    console.log({ cartId: carts.id, addressId, paymentMethod });
    checkoutCodApi({ cartId: carts.id, addressId, paymentMethod })
      .then((res) => {
        console.log(res);
        toast({
          title: "Thành công",
          description: "Thanh toán thành công",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-[300px] pt-[80px]">
      <div className="xl:px-[64px] mx-auto max-w-[1920px] w-full">
        <div className="flex flex-row flewx-wrap float-none mx-[-9px]">
          <div className="px-[20px] w-7/12">
            <OrderInformation changeAddressId={handleChangeAddress} />
            <CartPaymentMethod
              onChangePaymentMethod={handleChangePaymentMethod}
            />
          </div>
          <div className="w-5/12 px-[9px]">
            <CartCheckout />
          </div>
        </div>
        {/* FIXED CART */}
        <FixedCart onOrder={handleOrder} />
      </div>
    </div>
  );
};

export default Cart;
