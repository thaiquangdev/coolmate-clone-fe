import { useEffect } from "react";
import { FilterProducts } from "../components/common";
import ProductList from "../components/common/ProductList";
import useProductStore from "../store/useProduct";

const Products = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <section className="pt-[82px]">
      <section className="lg:tw-mt-6 xl:tw-mt-10 mt-3">
        <div className="xl:px-[48px] lg:px-[32px] sm:px-[16px] mx-auto max-w-full">
          <div className="pb-3 pt-2">
            <div className="flex max-w-[280px] pb-2 w-full border-b border-b-[#e8e8e8]">
              <span className="font-semibold text-[16px]">236 Kết quả</span>
            </div>
          </div>
        </div>
      </section>
      <div className="xl:px-[48px] lg:px-[32px] sm:px-[16px] pt-3">
        <div className="flex justify-center gap-10">
          <div className="max-w-[280px] w-full">
            <FilterProducts />
          </div>
          <div className="flex-1">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
