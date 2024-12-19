import { create } from "zustand";
import { getProductsApi } from "../apis/productService";
import { ProductType } from "../types";

interface ProductState {
  products: ProductType[];
  fetchProducts: () => Promise<void>;
  setProducts: (newProducts: ProductType[]) => void;
}

const useProductStore = create<ProductState>((set) => ({
  products: [],

  fetchProducts: async () => {
    try {
      const response = await getProductsApi();
      set({ products: response.data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  setProducts: (newProducts) => {
    set({ products: newProducts });
  },
}));

export default useProductStore;
