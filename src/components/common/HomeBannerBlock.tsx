import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const HomeBannerBlock = () => {
  return (
    <section className="my-[40px]">
      <div className="relative w-full">
        <Link to="#" className="block w-full">
          <div className="w-full h-full">
            <img
              src="https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/November2024/mceclip0_27.jpg"
              alt=""
            />
          </div>
        </Link>
        <div className="flex flex-col h-full justify-end left-0 absolute max-w-[800px] top-[-11px] pl-8">
          <h2 className="text-[80px] font-bold text-white">ĐỒ THU ĐÔNG</h2>
          <p className="mb-[36px] text-white">
            Nhập mã{" "}
            <strong className="text-[18px] leading-7 font-bold">
              WINTER50
            </strong>{" "}
            giảm 50k từ đơn 550k
          </p>
          <div>
            <Link
              to=""
              className="px-[48px] py-4 inline-flex items-center mb-8 justify-center bg-[#263acc] text-white gap-2 rounded-full text-[16px]"
            >
              KHÁM PHÁ NGAY
              <FaArrowRightLong size={20} color="white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBannerBlock;
