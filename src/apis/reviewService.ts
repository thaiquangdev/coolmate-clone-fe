import apiClient from "./apiClient";

interface reviewData {
  productId: number;
  sku: string;
  size: string;
  color: string;
  comment: string;
  star: number;
}

export const createReviewApi = async (data: reviewData) => {
  const response = await apiClient.post("/reviews/create-review", data);
  return response.data;
};
