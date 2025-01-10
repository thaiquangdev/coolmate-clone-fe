import { Link } from "react-router-dom";
import MiniCartItem from "./MiniCartItem";
import { ProductType } from "../../types";

type CartDetailType = {
  id: number;
  size: string;
  color: string;
  sku: string;
  quantity: number;
  price: number;
  product: ProductType;
};

interface CartProps {
  details: CartDetailType[];
}

const PopupCart: React.FC<CartProps> = ({ details }) => {
  return (
    <div className="absolute top-[100%] right-0 transition-all duration-200 z-[100] pt-[20px] ">
      <div className="bg-white text-black overflow-hidden border border-[#d9d9d9] rounded-[16px] shadow-sm">
        <div className="max-h-[460px] overflow-y-scroll p-4 w-[400px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span>{details?.length} Sản phẩm</span>
              <Link to="/cart" className="text-[#2f5acf]">
                Xem Tất cả
              </Link>
            </div>
            {details?.map((item) => (
              <MiniCartItem
                color={item.color}
                size={item.size}
                quantity={item.quantity}
                price={item.price}
                product={item.product}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCart;
