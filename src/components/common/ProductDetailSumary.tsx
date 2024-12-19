import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { policyProductDetails } from "../../lib/constrant";
import { SkuType } from "../../types";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

interface ProductDetailSumaryProps {
  id?: number;
  title?: string;
  price?: number;
  discount?: number;
  avgRating?: number;
  highlights?: string;
  skus?: SkuType[];
}

const ProductDetailSumary: React.FC<ProductDetailSumaryProps> = ({
  id,
  title,
  price,
  discount,
  avgRating,
  highlights,
  skus,
}) => {
  const uniqueColors = Array.from(new Set(skus?.map((sku) => sku.colorName)));
  const uniqueSizes = Array.from(new Set(skus?.map((sku) => sku.size)));

  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    if (skus && skus.length > 0) {
      const uniqueColors = Array.from(
        new Set(skus.map((sku) => sku.colorName))
      );
      const uniqueSizes = Array.from(new Set(skus.map((sku) => sku.size)));

      // Gán giá trị mặc định nếu có màu sắc và kích thước
      if (uniqueColors.length > 0) {
        setSelectedColor(uniqueColors[0]);
      }
      if (uniqueSizes.length > 0) {
        setSelectedSize(uniqueSizes[0]);
      }
    }
  }, [skus]);

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
  };

  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  console.log({ selectedColor, selectedSize });

  return (
    <div className="flex-1 md:w-0">
      <div>
        <h1 className="text-[28px] font-semibold leading-5 mb-3">{title}</h1>
        <Link
          to="#reviews"
          className="flex items-center text-[12px] font-normal leading-[15px] mb-[15px] text-primary-color"
        >
          <div className="flex items-center mx-[-3px] gap-1">
            <div className="w-[20px] h-[20px]">
              <FaStar size={20} />
            </div>
            <div className="w-[20px] h-[20px]">
              <FaStar size={20} />
            </div>
            <div className="w-[20px] h-[20px]">
              <FaStar size={20} />
            </div>
            <div className="w-[20px] h-[20px]">
              <FaStar size={20} />
            </div>
            <div className="w-[20px] h-[20px]">
              <FaStarHalfAlt size={20} />
            </div>
            <div className="text-[16px]">({avgRating})</div>
          </div>
        </Link>
        <div className="mb-[20px]">
          <div className="mb-[12px] text-[24px] flex items-center font-normal leading-[20px]">
            <del className="text-[#c4c4c4] text-[16px] leading-[16px]">
              {price}đ
            </del>
          </div>
          <div className="mb-[12px] text-[24px] flex items-center font-normal leading-[20px]">
            <span className="font-semibold ">{price}đ</span>
            <span className="text-[80%] ml-[15px] bg-[#273bcd] rounded-[6px] text-white font-bold py-[3px] px-[8px]">
              -55%
            </span>
          </div>
          {/* Mã giảm giá */}
          {/* variants */}
          <div className="pb-[10px]">
            <form action="">
              <div>
                <div className="relative transition-all">
                  <div className="flex items-center justify-start">
                    <span className="flex items-center text-[14px]">
                      Màu sắc:{" "}
                      <span className="ml-[5px] font-bold">
                        {selectedColor}
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-[8px] pt-2">
                    {uniqueColors.map((item) => (
                      <div
                        key={item}
                        className={`min-w-[16.6667%] h-[40px] flex items-center justify-center rounded-[20px] px-[10px] ${
                          selectedColor === item
                            ? "bg-primary-color text-white"
                            : "bg-[#d9d9d9]"
                        } cursor-pointer`}
                        onClick={() => handleSelectColor(item)}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative transition-all pt-3">
                  <div className="flex items-center justify-start">
                    <span className="flex items-center text-[14px]">
                      Kích thước:{" "}
                      <span className="ml-[5px] font-bold">{selectedSize}</span>
                    </span>
                  </div>
                  <div className="flex gap-[12px] pt-2">
                    {uniqueSizes.map((item) => (
                      <div
                        key={item}
                        className={`min-w-[16.6667%] h-[40px] flex items-center justify-center rounded-[20px] px-[10px]
                          ${
                            selectedSize === item
                              ? "bg-primary-color text-white"
                              : "bg-[#d9d9d9]"
                          } cursor-pointer`}
                        onClick={() => handleSelectSize(item)}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center pt-3">
                  <div className="flex text-[18px] border border-black rounded-[1.8rem] font-medium h-[40px] w-[100px] leading-[23px]">
                    <Link
                      to="#"
                      className="flex items-center h-full justify-center leading-[1em] w-[35px]"
                    >
                      -
                    </Link>
                    <input
                      className="border-0 max-w-[40px] text-center flex-1 pointer-events-none"
                      type="number"
                      min="1"
                      value={1}
                    />
                    <Link
                      to="#"
                      className="flex items-center h-full justify-center leading-[1em] w-[35px]"
                    >
                      +
                    </Link>
                  </div>
                  <div className="flex-1 pl-[14px]">
                    <Button className="w-full rounded-[24px]">
                      Thêm vào giỏ hàng
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* policy */}
          <div className="py-[20px] border-b border-b-[#d9d9d9]">
            <div className="flex items-center flex-wrap text-[12px] font-normal justify-center leading-[15px] text-center">
              {policyProductDetails.map((item) => (
                <div
                  key={item.id}
                  className="flex w-[50%] text-left justify-start items-center py-[15px]"
                >
                  <div className="h-[35px] w-[35px] mr-1">
                    <img src={item.url} alt={item.alt} />
                  </div>
                  <span className="flex-1">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Highligt */}
          <div>
            <div>
              <p className="text-black cursor-pointer block text-[14px] font-semibold leading-[18px] pb-[8px] pt-[15px]">
                Đặc điểm nổi bật
              </p>
              <div>{ReactHtmlParser(String(highlights))}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSumary;
