import apiClient from "./apiClient";

interface AddressData {
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  district: string;
  ward: string;
  zipCode: string;
}

export const createAddressApi = async (data: AddressData) => {
  const response = await apiClient.post("/addresses/create-address", data);
  return response.data;
};

export const updateAddressApi = async (aid: number, data: AddressData) => {
  const response = await apiClient.put(
    `/addresses/update-address/${aid}`,
    data
  );
  return response.data;
};

export const deleteAddressApi = async (aid: number) => {
  const response = await apiClient.delete(`/addresses/delte-address/${aid}`);
  return response.data;
};

export const getAllAddressApi = async () => {
  const response = await apiClient.get("/addresses/get-addresses");
  return response.data;
};
