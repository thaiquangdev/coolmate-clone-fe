import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import ProductItem from "./ProductItem";

type Props = {
  className?: string;
  style?: object;
  onClick?: () => void;
};

function SampleNextArrow(props: Props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowRight
      className={`${className} custom-next-arrow`}
      style={{
        ...style,
        display: "block",
        color: "black",
        zIndex: 10,
        right: "20px",
      }}
      onClick={onClick}
      size={30}
    />
  );
}

function SamplePrevArrow(props: Props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowLeft
      className={`${className} custom-prev-arrow`}
      style={{
        ...style,
        display: "block",
        color: "black",
        zIndex: 10,
        left: "20px",
      }}
      onClick={onClick}
      size={30}
    />
  );
}

const ProductSuggestions = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="bg-[#f9f9f9] py-12">
      <div className="mx-auto max-w-[1920px] px-[64px]">
        <h4 className="text-[28px] font-semibold mb-[15px] text-center uppercase">
          Gợi ý sản phẩm
        </h4>
        <div className="w-full">
          <Slider {...settings}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductSuggestions;
