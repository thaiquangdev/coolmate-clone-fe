import { Link } from "react-router-dom";
import { ProductType } from "../../types";

interface ProductProp {
  product: ProductType;
}

const ProductItem: React.FC<ProductProp> = ({ product }) => {
  console.log(product);
  return (
    <div className="w-full p-[9px]">
      <div className="pb-3 relative">
        <div className=" overflow-hidden relative rounded-[8px] group">
          {/* Container với aspect-ratio để giữ tỷ lệ */}
          <div className="relative w-full aspect-[2/3]">
            <Link
              to={`/product/${product?.slug}`}
              className="block relative w-full h-full"
            >
              {/* Ảnh 1 */}
              <img
                src={`http://localhost:3000/${product?.images[0]?.url}`}
                alt="Ảnh 1"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              {/* Ảnh 2 */}
              <img
                src={`http://localhost:3000/${product?.images[1]?.url}`}
                alt="Ảnh 2"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-[94px]">
        <p className="text-[14px] font-normal leading-6 mb-[7px]">
          <Link to={`/product/${product?.slug}`}>{product?.title}</Link>
        </p>
        <div className="items-center flex text-[14px] font-normal justify-end flex-row-reverse gap-2">
          <del>{product?.price}đ</del>
          <span className="bg-[#273bcd] text-white items-center flex rounded-[6px] text-[10px] font-bold h-[18px] px-[5px]">
            -5%
          </span>
          <ins className="text-[#242424] font-bold ">{product?.price}đ</ins>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
