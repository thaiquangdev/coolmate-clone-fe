import { Link } from "react-router-dom";
import { ProductType } from "../../types";

interface MiniCartProps {
  color: string;
  size: string;
  price: number;
  quantity: number;
  product: ProductType;
}

const MiniCartItem: React.FC<MiniCartProps> = ({
  color,
  size,
  quantity,
  price,
  product,
}) => {
  return (
    <div className="mb-4 flex items-center flex-wrap text-[0.8rem]">
      <div className="mr-[1rem]">
        <img
          src={`http://localhost:3000/${product.images[0].url}`}
          alt=""
          className="max-w-[100px] rounded-[16px]"
        />
      </div>
      <div className="flex-1 h-full pr-[20px] relative text-start">
        <span className="absolute top-0 right-0">x</span>
        <div className="font-bold transition-all duration-200 t">
          <Link to="#">{product.title}</Link>
        </div>
        <div>
          {color} / {size}
        </div>
        <div>
          <span className="inline-block text-[1.1rem] mt-2">{price}đ</span>
          <del className="inline-block text-[#ccc] ml-[5px]">590.000đ</del>
        </div>
        <div>
          <span>x{quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default MiniCartItem;
