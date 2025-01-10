import { useNavigate } from "react-router-dom";
import { deleteAllProductInCart } from "../../apis/cartService";
import { useCartStore } from "../../store/useCart";
import { Button } from "../ui/button";

import { Input } from "../ui/input";
import CartOrderItem from "./CartOrderItem";
import { useToast } from "../../hooks/use-toast";

const CartCheckout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { carts } = useCartStore();

  const handleDeleteAllCart = () => {
    deleteAllProductInCart()
      .catch((res) => {
        toast({
          title: "Thành công",
          description: "Xóa tất cả sản phẩm trong giỏ hàng thành công",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <div className="text-[30px] font-bold pr-[16px] my-8">Giỏ hàng</div>
      <div className="border-b border-b-[#f1f1f1] justify-between flex text-[12px] font-medium mb-[12px] pb-[20px] uppercase">
        <Button
          onClick={handleDeleteAllCart}
          variant={"ghost"}
          className="justify-start uppercase text-[12px]"
        >
          Xóa tất cả
        </Button>
        <div className="flex items-center">
          <span className="pr-[40px]">Số lượng</span>
          <span className="pl-[40px]">Giá</span>
        </div>
      </div>
      {/* LIST PRODUCT IN CART */}
      <div className="">
        <div className="mb-[20px]">
          {carts.details.map((item) => (
            <CartOrderItem
              key={item.id}
              color={item.color}
              size={item.size}
              price={item.price}
              quantity={item.quantity}
              product={item.product}
              id={item.id}
            />
          ))}
        </div>
      </div>

      {/* Input coupon */}
      <div className="flex text-[0.9rem] gap-[0.6rem] h-[39px] mt-[5px] w-full">
        <Input
          className="bg-[#eeeeee] rounded-[43px] h-full py-[5px] px-[20px] w-[90%]"
          placeholder="Nhập mã giảm giá"
        />
        <Button
          disabled
          className="disabled:bg-[#d9d9d9] disabled:cursor-not-allowed rounded-[43px] text-white h-full px-[20px] whitespace-nowrap"
        >
          Áp dụng Voucher
        </Button>
      </div>

      {/* info checkout */}
      <div>
        <div className="flex justify-between mb-4">
          <p className="text-left">Tạm tính</p>
          <p className="text-right">{carts.totalAmount}đ</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-left">Giảm giá</p>
          <p className="text-right">0đ</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-left">Phí giao hàng</p>
          <p className="text-right">Miễn phí</p>
        </div>
        <div className="border-t border-t-[#d9d9d9] h-[1px] my-4"></div>
        <div className="flex justify-between mb-4">
          <p className="text-left font-medium">Tổng</p>
          <p className="text-right text-[1rem] text-black font-semibold">
            {carts.totalAmount}đ
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
