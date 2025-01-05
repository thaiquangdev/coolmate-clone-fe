import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { ReviewType } from "../../types";

interface ReviewsProps {
  avgRatings?: number;
  reviews?: ReviewType[];
}

const Reviews: React.FC<ReviewsProps> = ({ avgRatings, reviews }) => {
  return (
    <div className="xl:px-[64px] max-w-[1920px] w-full">
      <div className="flex mt-[3rem]">
        <div className="pr-[50px] text-center lg:block hidden">
          <div className="xl:py-8 xl:px-[2.6rem] bg-[#f1f1f1] rounded-[8px] sticky top-150">
            <div className="text-center whitespace-nowrap">
              <h5 className="font-semibold uppercase text-[16px]">
                Đánh giá sản phẩm
              </h5>
            </div>
            <div className="text-[64px] font-semibold leading-[5rem] text-center">
              {avgRatings}
            </div>
            <div className="flex items-center mx-[-3px] justify-center mb-[0.44rem]">
              <FaStar size={34} color="#ffb403" />
              <FaStar size={34} color="#ffb403" />
              <FaStar size={34} color="#ffb403" />
              <FaStar size={34} color="#ffb403" />
              <FaStarHalfAlt size={34} color="#ffb403" />
            </div>
            <div className="text-[#4d4d4d] text-[14px] italic font-normal text-center">
              {reviews?.length} đánh giá
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <div className="w-[245px] px-[4px]">
              <select className="w-full bg-transparent border border-[#d9d9d9] rounded-[1.5625rem] text-[#000] text-[14px] font-medium leading-[18px] pt-[14px] pr-[28px] pb-[18px] pl-[18px]">
                <option value="">Đánh giá</option>
                <option value="1">1 sao</option>
                <option value="2">2 sao</option>
                <option value="3">3 sao</option>
                <option value="4">4 sao</option>
                <option value="5">5 sao</option>
              </select>
            </div>
            <div className="w-[245px] px-[4px]">
              <select className="w-full bg-transparent border border-[#d9d9d9] rounded-[1.5625rem] text-[#000] text-[14px] font-medium leading-[18px] pt-[14px] pr-[28px] pb-[18px] pl-[18px]">
                <option value="">Phản hồi</option>
                <option value="true">Đã phản hồi</option>
                <option value="false">Chưa phản hồi</option>
              </select>
            </div>
          </div>
          <div className="border-t border-t-[#ddd] mt-[32px] px-[5px] pt-[20px]">
            <div className="flex flex-row flex-wrap mx-[-9px]">
              {reviews?.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-b-[#d9d9d9] w-[50%] p-[9px]"
                >
                  <div className="flex py-[9px]">
                    <div className="flex-1">
                      <div className="flex gap-1 items-center mx-[-3px] ">
                        {[...Array(item.star)].map((_, index) => (
                          <FaStar key={index} size={24} color="gold" />
                        ))}
                      </div>
                      <div className="text-black text-[14px] leading-[1.5em] mb-[25px] mt-[5px]">
                        <div className="font-semibold">
                          {item.user.fullName}
                        </div>
                        <div className="text-[12px] italic font-normal text-[#989898]">
                          {item.color} / {item.size}
                        </div>
                      </div>
                      <div className="text-black text-[14px] leading-[18px]">
                        <p className="font-normal">{item.comment}</p>
                        <span className="block mt-[20px] opacity-50">
                          {item.createdAt}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {reviews && reviews.length > 10 && (
              <div className="flex items-center text-black text-[14px] justify-center leading-[18px] py-[20px] text-center">
                <Link
                  to="#"
                  className="flex items-center justify-center w-[20px] h-[20px]"
                >
                  <IoIosArrowBack />
                </Link>
                <span>1/30</span>
                <Link
                  to="#"
                  className="flex items-center justify-center w-[20px] h-[20px]"
                >
                  <IoIosArrowForward />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
