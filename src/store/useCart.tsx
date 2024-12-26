import { create } from "zustand";
import {
  addToCartApi,
  getCartsApi,
  updateQuantityCartApi,
  deleteProductInCartApi,
  deleteAllProductInCart,
} from "../apis/cartService";
import { ProductDetailType } from "../types";

type CartDetailType = {
  id: number;
  size: string;
  color: string;
  sku: string;
  quantity: number;
  price: number;
  product: ProductDetailType;
};

type CartType = {
  id: number;
  totalAmount: number;
  details: CartDetailType[];
};

interface CartState {
  carts: CartType; // Danh sách sản phẩm trong giỏ hàng
  isLoading: boolean;
  error: string | null;

  //Actions
  fetchCarts: () => Promise<void>;
  addToCart: (cart: {
    productId: number;
    sku: string;
    size: string;
    color: string;
    price: number;
    quantity: number;
  }) => Promise<void>;
  removeProductInCart: (id: number) => Promise<void>;
  updateQuantityInCart: (id: number, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  carts: { id: 0, totalAmount: 0, details: [] },
  isLoading: false,
  error: null,

  // Fetch danh sách sản phẩm từ API
  fetchCarts: async () => {
    try {
      const response = await getCartsApi();
      set(() => ({
        carts: response,
      }));
    } catch (error) {
      set({ error: "Failed to fetch cart", isLoading: false });
      console.log(error);
    }
  },

  // Thêm sản phẩm vào giỏ hàng và fetch lại giỏ hàng
  addToCart: async (cart) => {
    try {
      await addToCartApi(cart);
      // Fetch lại giỏ hàng từ server để đảm bảo đồng bộ
      await get().fetchCarts();
    } catch (error) {
      set({ error: "Failed to add to cart", isLoading: false });
      console.log(error);
    }
  },

  // Xóa một sản phẩm khỏi giỏ hàng
  removeProductInCart: async (id) => {
    try {
      await deleteProductInCartApi(id);
      // Fetch lại giỏ hàng từ server để đồng bộ
      await get().fetchCarts();
    } catch (error) {
      set({ error: "Failed to remove product from cart", isLoading: false });
      console.log(error);
    }
  },

  // Cập nhật số lượng sản phẩm trong giỏ hàng
  updateQuantityInCart: async (id, quantity) => {
    try {
      await updateQuantityCartApi({ productDetailId: id, quantity });
      // Fetch lại giỏ hàng từ server để đồng bộ
      await get().fetchCarts();
    } catch (error) {
      set({ error: "Failed to update quantity", isLoading: false });
      console.log(error);
    }
  },

  // Xóa toàn bộ giỏ hàng
  clearCart: async () => {
    try {
      await deleteAllProductInCart();
      // Fetch lại giỏ hàng từ server để làm mới trạng thái
      await get().fetchCarts();
    } catch (error) {
      set({ error: "Failed to clear cart", isLoading: false });
      console.log(error);
    }
  },
}));
