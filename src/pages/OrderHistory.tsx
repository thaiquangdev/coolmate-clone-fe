import { Link } from "react-router-dom";

const OrderHistory = () => {
  return (
    <div className="bg-white rounded-[0.5rem] flex-[1] py-[58px] px-[62px]">
      <div>
        <h3 className="text-[2.25em] font-medium mb-[1.125rem]">
          Lịch sử đơn hàng
        </h3>
      </div>
      <div>
        <div className="text-[18px] text-[#777]">Đơn hàng của bạn</div>
        <div className="mt-[10px]">
          <div className="flex items-center justify-center">
            <div className="text-[14px]">
              Bạn chưa có đơn hàng nào mua tại website{" "}
              <Link to="/" className="font-bold">
                Coolmate.me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
