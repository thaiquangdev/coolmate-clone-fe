import apiClient from "./apiClient";

export const getProductsApi = async () => {
  const response = await apiClient.get("/products/get-products");
  return response.data;
};

export const getProductApi = async (slug: string) => {
  const response = await apiClient.get(`/products/get-product/${slug}`);
  return response.data;
};
