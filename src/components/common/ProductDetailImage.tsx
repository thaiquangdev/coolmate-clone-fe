import { ImageType } from "../../types";

interface ProductImageProps {
  images?: ImageType[];
}

const ProductDetailImage: React.FC<ProductImageProps> = ({ images }) => {
  return (
    <div className="flex-1 md:w-0 h-full">
      <div className="pt-0 ml-[55px]">
        <div className="relative">
          <div>
            <img
              src={`http://localhost:3000/${images?.[0]?.url || ""}`}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="absolute top-0 left-[-55px] z-2">
            <div className="w-[50px] flex flex-col">
              {images?.map((item) => (
                <div className="pb-2" key={item?.id}>
                  <img
                    src={`http://localhost:3000/${item?.url}`}
                    alt=""
                    className="w-[40px] h-[56px] object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailImage;
