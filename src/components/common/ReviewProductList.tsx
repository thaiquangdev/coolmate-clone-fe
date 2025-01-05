import { useState } from "react";
import { Button } from "../ui/button";
import { createReviewApi } from "../../apis/reviewService";
import { useToast } from "../../hooks/use-toast";

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

interface ReviewProductListProps {
  details: DetailType[];
}

const ReviewProductList: React.FC<ReviewProductListProps> = ({ details }) => {
  const { toast } = useToast();
  // State để quản lý trạng thái của từng sản phẩm (có form nhập hay không)
  const [activeReview, setActiveReview] = useState<number | null>(null);
  const [ratings, setRatings] = useState<{ [key: number]: number }>({}); // State để lưu điểm đánh giá
  const [comment, setComment] = useState<string>("");

  // Xử lý khi nhấn vào nút "Đánh giá"
  const handleReviewClick = (index: number) => {
    setActiveReview(index === activeReview ? null : index); // Toggling form review
  };

  // Xử lý thay đổi đánh giá sao
  const handleRatingChange = (index: number, rating: number) => {
    setRatings((prevRatings) => ({ ...prevRatings, [index]: rating }));
  };

  // Xử lý khi nhấn vào nút "Hủy" (đóng form)
  const handleCancelReview = () => {
    setActiveReview(null); // Đóng form đánh giá
  };

  const handleReview = (
    size: string,
    color: string,
    sku: string,
    index: number,
    productId: number
  ) => {
    console.log({ productId, comment, size, color, sku, star: ratings[index] });
    createReviewApi({
      productId,
      comment,
      size,
      color,
      sku,
      star: ratings[index],
    })
      .then((res) => {
        toast({ title: "Thành công", description: res.message });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full">
      <div className="text-center text-[25px] text-primary-color font-semibold mb-4">
        Đánh giá sản phẩm
      </div>
      {details.map((detail, index) => (
        <div key={index}>
          <div className="mb-6 p-4 border border-gray-200 rounded-lg flex items-center gap-4">
            <img
              src={`http://localhost:3000/${detail.product.images[0]?.url}`}
              alt={detail.product.title}
              className="w-20 h-20 object-cover mt-4"
            />

            <h4 className="text-[15px] font-medium">{detail.product.title}</h4>
            <div className="text-gray-600 text-[14px]">
              Size: {detail.size} | Color: {detail.color} | Price:{" "}
              {detail.price}đ
            </div>

            <Button onClick={() => handleReviewClick(index)} className="">
              {activeReview === index ? "Đóng form" : "Đánh giá"}
            </Button>
          </div>

          {activeReview === index && (
            <div className="mt-4">
              <div className="mb-2">Đánh giá sao:</div>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRatingChange(index, star)}
                    className={`${
                      ratings[index] >= star
                        ? "text-yellow-500"
                        : "text-gray-300"
                    } text-2xl`}
                  >
                    &#9733;
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <label htmlFor={`review-input-${index}`} className="block mb-2">
                  Viết đánh giá của bạn:
                </label>
                <textarea
                  id={`review-input-${index}`}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                  placeholder="Nhập đánh giá..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() =>
                    handleReview(
                      detail.size,
                      detail.color,
                      detail.sku,
                      index,
                      detail.product.id
                    )
                  }
                  className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md"
                >
                  Gửi đánh giá
                </Button>
                <Button
                  className="mt-4"
                  onClick={handleCancelReview} // Hủy và đóng form
                >
                  Hủy
                </Button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewProductList;
