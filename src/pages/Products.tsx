import { useEffect } from "react";
import { FilterProducts } from "../components/common";
import ProductList from "../components/common/ProductList";
import useProductStore from "../store/useProduct";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const { fetchProducts, products, size, search, sort, color, isLoading } =
    useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [size, search, sort, color]);

  console.log(products);
  return (
    <>
      {products.length > 0 ? (
        <section className="pt-[82px]">
          <section className="lg:tw-mt-6 xl:tw-mt-10 mt-3">
            <div className="xl:px-[48px] lg:px-[32px] sm:px-[16px] mx-auto max-w-full">
              <div className="pb-3 pt-2">
                <div className="flex max-w-[280px] pb-2 w-full border-b border-b-[#e8e8e8]">
                  <span className="font-semibold text-[16px]">
                    {isLoading ? (
                      <div>Loading...</div>
                    ) : (
                      `${products.length} Kết quả`
                    )}
                  </span>
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
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <ProductList products={products} />
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex items-center justify-center p-[15px] text-center pt-[82px]">
          <div>
            <div>Không tìm thấy sản phẩm phù hợp theo yêu cầu của bạn!</div>
            <div>
              Vui lòng{" "}
              <Link
                to="#"
                onClick={() => navigate(-1)}
                className="text-blue-500 hover:underline"
              >
                quay lại
              </Link>
              để tiếp tục mua sắm
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
