import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrdersApi } from "../apis/orderService";
import { Button } from "../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "../components/ui/table";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import { ReviewProductList } from "../components/common";

type ProductImage = {
  id: number;
  url: string;
};

type ProductType = {
  id: number;
  title: string;
  slug: string;
  images: ProductImage[];
};

type DetailType = {
  size: string;
  color: string;
  price: number;
  sku: string;
  product: ProductType;
};

type CartType = {
  id: number;
  totalAmount: number;
  details: DetailType[];
};

type OrderType = {
  id: number;
  orderCode: string;
  orderConfirm: boolean;
  paymentMethod: string;
  paymentStatus: string;
  status: string;
  cart: CartType;
};

const OrderHistory = () => {
  const columns = [
    { key: "id", label: "ID" },
    { key: "orderCode", label: "Mã đơn hàng" },
    {
      key: "orderConfirm",
      label: "Xác nhận",
      render: (value: boolean) =>
        value ? (
          <span className="text-green-500">Đã xác nhận</span>
        ) : (
          <span className="text-red-500">Chưa xác nhận</span>
        ),
    },
    { key: "paymentMethod", label: "Phương thức thanh toán" },
    { key: "status", label: "Trạng thái đơn hàng" },
    {
      key: "cart",
      label: "Tổng tiền",
      render: (value: CartType) => <span>{value.totalAmount}đ</span>,
    },
    {
      key: "cart",
      label: "Đánh giá sản phẩm",
      render: (value: CartType) => (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Đánh giá</Button>
          </DialogTrigger>
          <DialogContent className="max-w-[800px] h-[85vh] overflow-scroll">
            <ReviewProductList details={value.details} />
          </DialogContent>
        </Dialog>
      ),
    },
  ];

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
          {orders.length === 0 ? (
            <div className="flex items-center justify-center">
              <div className="text-[14px]">
                Bạn chưa có đơn hàng nào mua tại website{" "}
                <Link to="/" className="font-bold">
                  Coolmate.me
                </Link>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    {columns.map((col) => (
                      <TableHead key={col.key}>{col.label}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      {columns.map((col) => (
                        <TableCell key={col.key}>
                          {col.render
                            ? col.render(order[col.key])
                            : order[col.key]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
