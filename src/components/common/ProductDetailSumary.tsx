import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { policyProductDetails } from "../../lib/constrant";
import { SkuType } from "../../types";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { useToast } from "../../hooks/use-toast";
import { useCartStore } from "../../store/useCart";

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
  const { toast } = useToast();
  const { addToCart } = useCartStore();
  const uniqueColors = Array.from(new Set(skus?.map((sku) => sku.colorName)));
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [filteredSizes, setFilteredSizes] = useState<SkuType[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedSku, setSelectedSku] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (skus && skus.length > 0) {
      // Chọn màu sắc đầu tiên làm mặc định nếu có
      const defaultColor = uniqueColors[0];
      if (defaultColor) {
        handleSelectColor(defaultColor);
      }
    }
  }, [skus]);

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);

    // Lọc danh sách kích thước dựa trên màu sắc đã chọn
    const sizesForColor = skus?.filter((sku) => sku.colorName === color) || [];
    setFilteredSizes(sizesForColor);

    // Chọn kích thước mặc định đầu tiên nếu có
    if (sizesForColor.length > 0) {
      setSelectedSize(sizesForColor[0].size);
      setSelectedSku(sizesForColor[0].sku);
    } else {
      setSelectedSize("");
      setSelectedSku("");
    }
  };

  const handleSelectSizeAndSku = (item: { size: string; sku: string }) => {
    setSelectedSize(item.size);
    setSelectedSku(item.sku);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (selectedColor === "") {
      toast({
        title: "Thông báo",
        description: "Bạn chưa chọn màu sắc",
      });
      return; // Dừng hàm tại đây nếu không chọn màu sắc
    }

    if (selectedSize === "") {
      toast({
        title: "Thông báo",
        description: "Bạn chưa chọn size",
      });
      return; // Dừng hàm tại đây nếu không chọn size
    }

    if (!id) {
      toast({
        title: "Lỗi",
        description: "Không tìm thấy ID sản phẩm",
      });
      return;
    }

    const data = {
      color: selectedColor,
      size: selectedSize,
      sku: selectedSku,
      quantity,
      price: price || Number(price),
      productId: id,
    };

    // Thêm logic để gọi API hoặc xử lý thêm vào giỏ hàng tại đây
    addToCart(data);
  };

  return (
    <div className="flex-1 md:w-0">
      <div>
        <h1 className="text-[28px] font-semibold leading-5 mb-3">{title}</h1>
        <Link
          to="#reviews"
          className="flex items-center text-[12px] font-normal leading-[15px] mb-[15px] text-primary-color"
        >
          <div className="flex items-center mx-[-3px] gap-1">
            {[...Array(4)].map((_, idx) => (
              <FaStar key={idx} size={20} />
            ))}
            <FaStarHalfAlt size={20} />
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

          {/* Variants */}
          <div className="pb-[10px]">
            <form>
              {/* Color Selection */}
              <div className="relative transition-all">
                <div className="flex items-center justify-start">
                  <span className="flex items-center text-[14px]">
                    Màu sắc:{" "}
                    <span className="ml-[5px] font-bold">{selectedColor}</span>
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

              {/* Size Selection */}
              <div className="relative transition-all pt-3">
                <div className="flex items-center justify-start">
                  <span className="flex items-center text-[14px]">
                    Kích thước:{" "}
                    <span className="ml-[5px] font-bold">{selectedSize}</span>
                  </span>
                </div>
                <div className="flex gap-[12px] pt-2">
                  {filteredSizes.map((item) => (
                    <div
                      key={item.size}
                      className={`min-w-[16.6667%] h-[40px] flex items-center justify-center rounded-[20px] px-[10px] ${
                        selectedSize === item.size
                          ? "bg-primary-color text-white"
                          : "bg-[#d9d9d9]"
                      } cursor-pointer ${
                        item.quantity === 0
                          ? "cursor-not-allowed opacity-50"
                          : ""
                      }`}
                      onClick={() =>
                        item.quantity > 0 && handleSelectSizeAndSku(item)
                      }
                    >
                      {item.size}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center pt-3">
                <div className="flex text-[18px] border border-black rounded-[1.8rem] font-medium h-[40px] w-[100px] leading-[23px]">
                  <button
                    type="button"
                    className="flex items-center h-full justify-center leading-[1em] w-[35px]"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <input
                    className="border-0 max-w-[40px] text-center flex-1 pointer-events-none"
                    type="number"
                    min="1"
                    value={quantity}
                    readOnly
                  />
                  <button
                    type="button"
                    className="flex items-center h-full justify-center leading-[1em] w-[35px]"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
                <div className="flex-1 pl-[14px]">
                  <Button
                    className="w-full rounded-[24px]"
                    onClick={handleAddToCart}
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </div>
              </div>
            </form>
          </div>

          {/* Policy */}
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

          {/* Highlights */}
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
