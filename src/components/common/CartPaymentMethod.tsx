import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const CartPaymentMethod = () => {
  return (
    <div className="mt-6 sticky top-[20px] border-t-2 border-t-[#f1f1f1] ml-auto">
      {/* TITLE */}
      <div className=" my-8 ">
        <div className="text-[30px] font-bold pr-[16px]">
          Hình thức thanh toán
        </div>
      </div>
      {/* FORM */}
      <div>
        <RadioGroup defaultValue="cod">
          <div className="flex items-center border border-[#d9d9d9] rounded-[12px] cursor-pointer h-[60px] py-[8px] px-[16px] transition-all duration-200 md:mb-[10px] mb-2">
            <RadioGroupItem
              value="cod"
              id="cod"
              className="h-[20px] w-[20px]"
            />
            <Label htmlFor="cod" className=" ml-2 flex items-center">
              <span>
                <img
                  src="https://mcdn.coolmate.me/image/October2024/mceclip2_42.png"
                  alt=""
                  className="max-w-[55px] max-h-[44px]"
                />
              </span>
              <span className="pl-2">
                <strong>Thanh toán khi nhận hàng</strong>
              </span>
            </Label>
          </div>
          <div className="flex items-center border border-[#d9d9d9] rounded-[12px] cursor-pointer h-[60px] py-[8px] px-[16px] transition-all duration-200 md:mb-[10px] mb-2">
            <RadioGroupItem
              value="momo"
              id="momo"
              className="h-[20px] w-[20px]"
            />
            <Label htmlFor="momo" className=" ml-2 flex items-center">
              <span>
                <img
                  src="https://mcdn.coolmate.me/image/October2024/mceclip1_171.png"
                  alt=""
                  className="max-w-[55px] max-h-[44px]"
                />
              </span>
              <span className="pl-2">
                <strong>Ví MoMo</strong>
              </span>
            </Label>
          </div>
          <div className="flex items-center border border-[#d9d9d9] rounded-[12px] cursor-pointer h-[60px] py-[8px] px-[16px] transition-all duration-200 md:mb-[10px] mb-2">
            <RadioGroupItem
              value="zalopay"
              id="zalopay"
              className="h-[20px] w-[20px]"
            />
            <Label htmlFor="zalopay" className=" ml-2 flex items-center">
              <span>
                <img
                  src="https://mcdn.coolmate.me/image/October2024/mceclip3_6.png"
                  alt=""
                  className="max-w-[55px] max-h-[44px]"
                />
              </span>
              <span className="pl-2">
                <strong>Thanh toán qua ZaloPay</strong>
                <br />
                <span className="md:text-[12px] md:text-center md:flex-row text-[#737373] gap-1 flex items-center">
                  Hỗ trợ mọi hình thức thanh toán{" "}
                  <img
                    src="https://mcdn.coolmate.me/image/October2024/mceclip0_27.png"
                    alt=""
                    className="max-w-full h-5"
                  />
                </span>
              </span>
            </Label>
          </div>
          <div className="flex items-center border border-[#d9d9d9] rounded-[12px] cursor-pointer h-[60px] py-[8px] px-[16px] transition-all duration-200 md:mb-[10px] mb-2">
            <RadioGroupItem
              value="vnpay"
              id="vnpay"
              className="h-[20px] w-[20px]"
            />
            <Label htmlFor="vnpay" className=" ml-2 flex items-center">
              <span>
                <img
                  src="https://mcdn.coolmate.me/image/October2024/mceclip0_81.png"
                  alt=""
                  className="max-w-[55px] max-h-[44px]"
                />
              </span>
              <span className="pl-2">
                <strong>Ví điện tử VNPAY</strong>
                <br />
                <span className="md:text-[12px] md:text-center md:flex-row text-[#737373] gap-1 flex items-center">
                  Quét QR để thanh toán
                </span>
              </span>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default CartPaymentMethod;
