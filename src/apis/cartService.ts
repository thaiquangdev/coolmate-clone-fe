import apiClient from "./apiClient";

export const getCartsApi = async () => {
  const response = await apiClient.get("/carts/get-carts");
  return response.data;
};

type DataType = {
  productId: number;
  size: string;
  color: string;
  quantity: number;
  sku: string;
  price: number;
};

export const addToCartApi = async (data: DataType) => {
  const response = await apiClient.post("/carts/add-to-cart", data);
  return response.data;
};

type UpdateDataType = {
  productDetailId: number;
  quantity: number;
};

export const updateQuantityCartApi = async (data: UpdateDataType) => {
  const response = await apiClient.put("/carts/update-quantity-cart", data);
  return response.data;
};

export const deleteProductInCartApi = async (cid: number) => {
  const response = await apiClient.delete(`/carts/delete-product-cart/${cid}`);
  return response.data;
};

export const deleteAllProductInCart = async () => {
  const response = await apiClient.delete(`/carts/delete-products-cart`);
  return response.data;
};
