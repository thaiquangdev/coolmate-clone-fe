import apiClient from "./apiClient";

interface FilterQuery {
  limit: number;
  page: number;
  sort?: string;
  subCategoryId?: number;
  collectionId?: number;
  search?: string;
  size?: string;
  color?: string;
}

export const getProductsApi = async (query: FilterQuery) => {
  const {
    limit = 10,
    page = 1,
    sort,
    subCategoryId,
    collectionId,
    search,
    size,
    color,
  } = query;
  const response = await apiClient.get("/products/get-products", {
    params: {
      limit,
      page,
      search,
      sort,
      subCategoryId,
      collectionId,
      size,
      color,
    },
  });
  return response.data;
};

export const getProductApi = async (slug: string) => {
  const response = await apiClient.get(`/products/get-product/${slug}`);
  return response.data;
};
