import apiClient from "./apiClient";

interface CheckoutData {
  cartId: number;
  addressId: number;
  paymentMethod: string;
}

export const checkoutCodApi = async (data: CheckoutData) => {
  const response = await apiClient.post("/orders/checkout-cod", data);
  return response.data;
};

interface Query {
  page: number;
  limit: number;
}

export const getOrdersApi = async (query: Query) => {
  const { page = 1, limit = 10 } = query;
  const response = await apiClient.get("/orders/get-orders", {
    params: { page, limit },
  });
  return response.data;
};
