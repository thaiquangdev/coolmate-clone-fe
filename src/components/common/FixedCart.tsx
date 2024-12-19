import { Button } from "../ui/button";

const FixedCart = () => {
  return (
    <div className="fixed bottom-0 left-0 z-10 flex items-center bg-white justify-between w-full">
      <div className="w-[52%] flex h-[90px] py-[20px] items-center justify-between bg-[#eaedfa]">
        <div className="flex flex-[1] border-r border-r-[#807c7c] items-center justify-center pl-[10px]">
          <img
            src="https://www.coolmate.me/images/COD.svg"
            alt="COD Icon"
            className="max-h-[44px] max-w-[55px] min-w-[44px] pr-[10px]"
          />
          <div>
            <span className="text-[1rem] leading-[1.5rem] font-bold">COD</span>
            <span className="text-[1rem] leading-[1.5rem] text-[#52535c]">
              thanh toán khi nhận hàng
            </span>
          </div>
        </div>
        <div className="flex flex-[1] items-center justify-center">
          <strong className="text-[#2f5acf] text-[14px]">
            Chưa dùng voucher
          </strong>
        </div>
      </div>
      <div className="w-[48%] flex h-full py-[20px] items-center justify-end">
        <div className="text-end">
          <span>
            Thành tiền{" "}
            <span className="text-[20px] font-bold text-[#2f5acf]">
              531.000đ
            </span>
          </span>
        </div>
        <Button className="rounded-[50px] h-[55px] ml-[10px] px-[20px] py-[15px] uppercase w-[30%] font-semibold">
          Đặt hàng
        </Button>
      </div>
    </div>
  );
};

export default FixedCart;
