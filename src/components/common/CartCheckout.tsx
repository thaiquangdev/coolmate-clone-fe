import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { FiTrash2 } from "react-icons/fi";
import { Input } from "../ui/input";

const CartCheckout = () => {
  return (
    <div className="">
      <div className="text-[30px] font-bold pr-[16px] my-8">Giỏ hàng</div>
      <div className="border-b border-b-[#f1f1f1] justify-between flex text-[12px] font-medium mb-[12px] pb-[20px] uppercase">
        <Button
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
          <div className="mb-[24px] pb-[21px] flex">
            <div className="w-[120px]">
              <div className="rounded-[2px]">
                <img
                  src="https://media3.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/uploads/December2024/24CMCW.SM011_-_Cam_10.jpg"
                  alt=""
                  className="rounded-[8px] max-w-full h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex pl-[10px]">
                <div className="mb-[20px]">
                  <h3 className="text-black font-normal text-[16px] leading-5 mb-[2px] w-full">
                    <Link to="/">Áo sơ mi Flannel 100% Cotton</Link>
                  </h3>
                  <div className="text-[14px] leading-[17.75px] text-[#717171]">
                    Be Vàng / L
                  </div>
                </div>
              </div>
              <div className="flex items-center pl-[10px]">
                <div className="flex items-center gap-[10px]">
                  <div className="flex items-center">
                    <span className="mr-4 flex items-center justify-center bg-[#f1f1f1] border border-[#f1f1f1] text-[16px] w-[100px] h-[36px] leading-[20px] px-[12px] rounded-[40px]">
                      Vàng
                    </span>
                    <span className="flex items-center justify-center bg-[#f1f1f1] border border-[#f1f1f1] text-[16px] w-[100px] h-[36px] leading-[20px] px-[12px] rounded-[40px]">
                      L
                    </span>
                  </div>
                  <div className="flex justify-center px-[10px]">
                    <div className="inline-flex items-center h-[36px] w-[120px] border border-[#d9d9d9] rounded-full">
                      <span className="w-[36px] h-full flex items-center justify-center cursor-pointer ">
                        -
                      </span>
                      <input
                        type="text"
                        className="w-[48px] text-center border-none outline-none"
                        value={1}
                        readOnly
                      />
                      <span className="w-[36px] h-full flex items-center justify-center cursor-pointer ">
                        +
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[#242424] text-[16px] font-bold leading-[20.29px]">
                      531.000đ
                    </span>
                    <del className="text-[#ccc] ">531.000đ</del>
                  </div>
                </div>
              </div>
              <div className="items-end pt-1 pl-[8px]">
                <span className="text-[14px] py-[4px] px-[8px] flex items-center cursor-pointer">
                  {" "}
                  <FiTrash2 />
                  Xóa
                </span>
              </div>
            </div>
          </div>
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
          <p className="text-right">531.000đ</p>
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
            531.000đ
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
