import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { homeBanner } from "../../lib/constrant";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

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
        color: "white",
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
        color: "white",
        zIndex: 10,
        left: "20px",
      }}
      onClick={onClick}
      size={30}
    />
  );
}

const HomeBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {homeBanner.map((item) => (
          <div key={item.id}>
            <img src={item.url} alt="banner" className="w-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeBanner;
