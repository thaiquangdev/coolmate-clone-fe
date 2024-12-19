import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Voucher = () => {
  return (
    <div className="bg-white rounded-[0.5rem] flex-[1] py-[58px] px-[62px]">
      <div>
        <h3 className="text-[2.25em] font-medium mb-[1.125rem]">Ví voucher</h3>
      </div>
      <div>
        <p>Trong ví bạn chưa có voucher nào cả</p>
      </div>
      <div className="mt-[1.25rem] relative">
        <img
          src="https://mcdn.coolmate.me/image/September2023/mceclip0_96.jpg"
          alt=""
          className="w-full"
        />
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-black text-[2rem] leading-[1.25em] mb-2">
            Nhiều ưu đãi hấp dẫn <br />
            đang chờ bạn
          </h3>
          <Link
            to="#"
            className="bg-primary-color text-white rounded-full h-[50px] font-bold uppercase flex items-center justify-center gap-4"
          >
            Khám phá ngay
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
