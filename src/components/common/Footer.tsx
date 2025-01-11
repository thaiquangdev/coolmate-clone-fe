import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import iconHotline from "../../assets/icon-hotline.svg";
import iconEmail from "../../assets/icon-email.svg";
import { iconFooters } from "../../lib/constrant";

const Footer = () => {
  return (
    <footer className="pb-[70px] bg-black text-[#d9d9d9] text-[13px] leading-[160%] py-[30px]">
      <div className="xl:px-[64px] max-w-[1920px] mx-auto w-full">
        <div className="lg:flex-col flex pb-[35px]">
          <div className="lg:w-full lg:flex lg:items-start lg:gap-[8%] lg:justify-between lg:mb-8 lg:border-b lg:border-[#d9d9d942]">
            <div>
              <p className="text-white text-[21px] font-semibold leading-[27px] mb-[6px]">
                COOLMATE lắng nghe bạn!
              </p>
              <p className="lg:max-w-[500px] mb-[30px] mt-[6px] w-full">
                Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
                góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
                phẩm tốt hơn nữa.
              </p>
              <Link
                to="/"
                className="md:text-[1rem] md:leading-[1.5rem] md:py-[1rem] md:px-[3rem] md:gap-[0.5rem] text-white uppercase rounded-full inline-flex items-center mb-6 bg-[#2f5acf]"
              >
                <span>đóng góp ý kiến</span>
                <FaArrowRightLong />
              </Link>
            </div>
            <div className="lg:w-1/4">
              <div className="flex items-center justify-start text-white font-medium mb-[12px]">
                <div className="flex items-center h-[30px] justify-center mr-[15px] w-[30px]">
                  <img
                    src={iconHotline}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <span>Hotline</span>
                  <p className="lg:text-[1.2em]">
                    <Link
                      className="text-[16px] font-semibold"
                      rel="nofollow"
                      to="tel: 1900272737"
                    >
                      1900.272737
                    </Link>
                    {" - "}
                    <Link
                      className="text-[16px] font-semibold"
                      rel="nofollow"
                      to="tel: 02877772737"
                    >
                      028.7777.2737
                    </Link>
                    <br />
                    <span>(8:30 - 22:00)</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start text-white font-medium mb-[12px]">
                <div className="flex items-center h-[30px] justify-center mr-[15px] w-[30px]">
                  <img
                    src={iconEmail}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <span>Hotline</span>
                  <p className="lg:text-[1.2em]">
                    <Link
                      className="text-[16px] font-semibold"
                      rel="nofollow"
                      to="mailto: Cool@coolmate.me"
                    >
                      Cool@coolmate.me
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:mt-0 lg:pr-[40px] lg:h-[130px] lg:items-center lg:justify-center w-full flex">
              {iconFooters.map((item) => (
                <Link
                  key={item.id}
                  to="/"
                  className="flex items-center  lg:h-[50px] lg:ml-[50px]"
                >
                  <img
                    src={item.url}
                    alt=""
                    className="lg:object-contain w-full h-full"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:pr-0 flex-1">
          <div className="flex flex-wrap justify-between">
            <div className="lg:w-1/4 md:w1/2 w-full">
              <p className="uppercase mb-[15px] font-semibold text-white">
                COOLCLUB
              </p>
              <ul>
                <li>
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Đăng ký thành viên
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Ưu đãi & Đặc quyền
                  </Link>
                </li>
              </ul>
              <p className="uppercase mt-[30px] mb-[15px] font-semibold text-white">
                Tài liệu - Tuyển dụng
              </p>
              <ul>
                <li>
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Tuyển dụng
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Đăng ký bản quyền
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w1/2 w-full">
              <p className="uppercase mb-[15px] font-semibold text-white">
                Chính sách
              </p>
              <ul>
                <li>
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Chính sách đổi trả 60 ngày
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Chính sách khuyến mãi
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Chính sách bảo mật
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Chính sách giao hàng
                  </Link>
                </li>
              </ul>
              <p className="uppercase mt-[30px] mb-[15px] font-semibold text-white">
                Coolmate.me
              </p>
              <ul>
                <li>
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Lịch sử thay đổi website
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w1/2 w-full">
              <p className="uppercase mb-[15px] font-semibold text-white">
                Chăm sóc khách hàng
              </p>
              <ul>
                <li>
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Trải nghiệm mua sắm 100% hài lòng
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Hỏi đáp - FAQs
                  </Link>
                </li>
              </ul>
              <p className="uppercase mb-[15px] font-semibold text-white mt-[30px]">
                Kiến thức mặc đẹp
              </p>
              <ul>
                <li>
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Hướng dẫn chọn size
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w1/2 w-full">
              <p className="uppercase mb-[15px] font-semibold text-white">
                Về COOLMATE
              </p>
              <ul>
                <li>
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Quy tắc ứng xử của Coolmate
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Coolmate 101
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link to="/" className="hover:text-[#f9f86c]">
                    DVKH xuất sắc
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Câu chuyện về Coolmate
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Nhà máy
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Care & Share
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link to="/" className="hover:text-[#f9f86c]">
                    Cam kết bền vững
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w1/2 w-full">
              <p className="uppercase mb-[15px] font-semibold text-white ">
                Địa chỉ liên hệ
              </p>
              <p className="my-[6px]">
                <u>Văn phòng Hà Nội:</u> Tầng 3 Tòa nhà BMM, KM2, Đường Phùng
                Hưng, Phường Phúc La, Quận Hà Đông, TP Hà Nội
              </p>
              <p className="mb-[6px]">
                <u>Trung tâm vận hành Hà Nội:</u> Lô C8, KCN Lại Yên, Xã Lại
                Yên, Huyện Hoài Đức, Thành phố Hà Nội
              </p>
              <p className="mb-[6px]">
                <u>Văn phòng và Trung tâm vận hành TP. HCM:</u> Lô C3, đường D2,
                KCN Cát Lái, Thạnh Mỹ Lợi, TP. Thủ Đức, TP. Hồ Chí Minh.
              </p>
              <p className="mb-[6px]">
                <u>Trung tâm R&D:</u> T6-01, The Manhattan Vinhomes Grand Park,
                Long Bình, TP. Thủ Đức
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
