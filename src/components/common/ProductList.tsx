import React from "react";
import { ProductType } from "../../types";
import { Button } from "../ui/button";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: ProductType[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section>
      <div>
        <div className="grid lg:grid-cols-3 grid-cols-2">
          {products.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </div>
        <div className="flex items-center justify-center flex-col py-[20px] relative">
          <Button className="rounded-[1.5rem] text-[16px] font-bold h-[48px] px-[2.875rem] py-[0.875rem] relative uppercase">
            Xem thêm
          </Button>
          <p className="opacity-[0.6] text-center text-[14px] mt-3">
            Hiển thị <span>1</span> - <span>12</span> trên tổng số{" "}
            <span>237</span> sản phẩm
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
