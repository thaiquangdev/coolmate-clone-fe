import { useEffect, useState } from "react";
import {
  ProductDescription,
  ProductDetailImage,
  ProductDetailSumary,
  ProductSuggestions,
  Reviews,
} from "../components/common";
import { useParams } from "react-router-dom";
import { getProductApi } from "../apis/productService";
import { ProductDetailType } from "../types";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<ProductDetailType | null>(null);
  useEffect(() => {
    getProductApi(String(slug))
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug]);
  return (
    <main className="pt-[82px]">
      <section className="pb-[30px] mb-5">
        <div className="lg:max-w-[1280px] md:px-12 lg:px-[64px] w-full mx-auto">
          <div className="pl-[10px] pb-[25px] lg:ml-[55px]">Breadcrum</div>
          <div className="flex gap-[24px] mx-auto">
            <ProductDetailImage images={product?.images} />
            <ProductDetailSumary
              id={product?.id}
              title={product?.title}
              price={product?.price}
              discount={product?.discount}
              avgRating={product?.avgRating}
              highlights={product?.highlights}
              skus={product?.skus}
            />
          </div>
        </div>
      </section>
      <section>
        <ProductDescription description={product?.description} />
      </section>
      <section>
        <ProductSuggestions />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
    </main>
  );
};

export default ProductDetail;
