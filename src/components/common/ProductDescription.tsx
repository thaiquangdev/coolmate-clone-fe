import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

interface ProductDescriptionProps {
  description?: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  return (
    <div className="xl:px-[64px] max-w-[1920px] w-full">
      <div className="mx-auto max-w-[1120px] px-[64px]">
        <h3 className="text-black text-[24px] font-semibold leading-[30px] mb-[30px] ">
          Chi tiết sản phẩm
        </h3>
        <div className="text-[16px] max-h-[1500px] overflow-hidden relative">
          <p>{ReactHtmlParser(String(description))}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
