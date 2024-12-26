import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ProductType } from "../../types";

interface CartOrderItemProps {
  color: string;
  size: string;
  price: number;
  quantity: number;
  product: ProductType;
}

const CartOrderItem: React.FC<CartOrderItemProps> = ({
  color,
  size,
  price,
  quantity,
  product,
}) => {
  return (
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
              <Link to="/">{product.title}</Link>
            </h3>
            <div className="text-[14px] leading-[17.75px] text-[#717171]">
              {color} / {size}
            </div>
          </div>
        </div>
        <div className="flex items-center pl-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center">
              <span className="mr-4 flex items-center justify-center bg-[#f1f1f1] border border-[#f1f1f1] text-[16px] w-[100px] h-[36px] leading-[20px] px-[12px] rounded-[40px]">
                {color}
              </span>
              <span className="flex items-center justify-center bg-[#f1f1f1] border border-[#f1f1f1] text-[16px] w-[100px] h-[36px] leading-[20px] px-[12px] rounded-[40px]">
                {size}
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
                  value={quantity}
                  readOnly
                />
                <span className="w-[36px] h-full flex items-center justify-center cursor-pointer ">
                  +
                </span>
              </div>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[#242424] text-[16px] font-bold leading-[20.29px]">
                {price}đ
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
  );
};

export default CartOrderItem;
