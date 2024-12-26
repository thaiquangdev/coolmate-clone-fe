import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrdersApi } from "../apis/orderService";

type OrderType = {
  id: number;
  orderCode: string;
  orderConfirm: boolean;
  paymentMethod: string;
  paymentStatus: string;
  status: string;
};

const OrderHistory = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  useEffect(() => {
    const query = {
      page: 1,
      limit: 10,
    };
    getOrdersApi(query)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
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
          {/* list */}
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
