import apiClient from "./apiClient";

export const getInfoApi = async () => {
  const response = await apiClient.get("/users/info");
  return response.data;
};
