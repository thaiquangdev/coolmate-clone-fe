import { create } from "zustand";
import { getProductsApi } from "../apis/productService";
import { ProductType } from "../types";

interface ProductState {
  products: ProductType[];
  size: string | null;
  color: string | null;
  search: string;
  sort: string;
  isLoading: boolean;
  fetchProducts: () => Promise<void>;
  setProducts: (newProducts: ProductType[]) => void;
  setFilters: (
    filters: Partial<{
      size: string | null;
      color: string | null;
      search: string;
      sort: string;
    }>
  ) => void;
}

const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  size: null,
  color: null,
  search: "",
  sort: "",
  isLoading: false,

  fetchProducts: async () => {
    try {
      set({ isLoading: true });
      const { size, sort, color, search } = get();
      const query = {
        page: 1,
        limit: 10,
        size: size || undefined,
        color: color || undefined,
        search: search || undefined,
        sort: sort || undefined,
      };
      const response = await getProductsApi(query);
      set({ products: response.data });
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  setProducts: (newProducts) => {
    set({ products: newProducts });
  },

  setFilters: (filters) => {
    set((state) => ({
      ...state,
      ...filters, // Cập nhật các bộ lọc
    }));
  },
}));

export default useProductStore;
