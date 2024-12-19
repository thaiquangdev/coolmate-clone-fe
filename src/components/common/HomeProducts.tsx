import { Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import Slider from "react-slick";
import ProductItem from "./ProductItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type HomeProductsProps = {
  type: string;
};

const HomeProducts: React.FC<HomeProductsProps> = ({ type }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <section className="xl:px-[64px] px-[16px] w-full">
      {type === "product-news" && (
        <div className="flex items-center justify-between mb-4 mt-[64px]">
          <div className="flex">
            <Link
              to="#"
              className="bg-black text-white lg:text-[18px] text-[14px] rounded-[42px] lg:pt-[8px] lg:pb-[9px] lg:px-[24px] py-2 px-4 mr-6 flex items-center gap-2 cursor-pointer"
            >
              Sản Phẩm Mới
              <MdOutlineStar size={20} />
            </Link>
            <Link
              to="#"
              className="bg-white text-black border border-black lg:text-[18px] text-[14px] rounded-[42px] lg:pt-[8px] lg:pb-[9px] lg:px-[24px] py-2 px-4 mr-6 flex items-center gap-2 cursor-pointer"
            >
              Bán Chạy Nhất
            </Link>
          </div>
          <span className="lg:block hidden underline text-[18px] cursor-pointer font-normal mt-3">
            <Link to="">Xem thêm</Link>
          </span>
        </div>
      )}
      <div className="overflow-hidden">
        <Slider {...settings}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Slider>
      </div>
    </section>
  );
};

export default HomeProducts;
