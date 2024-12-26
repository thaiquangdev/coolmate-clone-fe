import { create } from "zustand";
import {
  createAddressApi,
  deleteAddressApi,
  getAllAddressApi,
  updateAddressApi,
} from "../apis/addressService";

type AddressType = {
  id: number;
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  district: string;
  ward: string;
  zipCode: string;
  note: string;
};

interface AddressState {
  addresses: AddressType[]; // Lưu danh sách địa chỉ
  isLoading: boolean; // Trạng thái tải dữ liệu
  error: string | null; // Lưu lỗi nếu có

  // Actions
  fetchAddress: () => Promise<void>;
  addNewAddress: (data: Omit<AddressType, "id">) => Promise<void>;
  updateAddress: (id: number, data: Omit<AddressType, "id">) => Promise<void>;
  deleteAddress: (id: number) => Promise<void>;
}

export const useAddressStore = create<AddressState>((set, get) => ({
  addresses: [],
  isLoading: false,
  error: null,

  // Fetch tất cả địa chỉ
  fetchAddress: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await getAllAddressApi();
      set({ addresses: response, isLoading: false });
    } catch (error) {
      set({ error: "Failed to fetch addresses", isLoading: false });
      console.error(error);
    }
  },

  // Thêm mới địa chỉ
  addNewAddress: async (address) => {
    set({ isLoading: true, error: null });
    try {
      await createAddressApi(address);
      // Fetch lại danh sách sau khi thêm
      await get().fetchAddress();
    } catch (error) {
      set({ error: "Failed to add new address", isLoading: false });
      console.error(error);
    }
  },

  // Cập nhật địa chỉ
  updateAddress: async (id, address) => {
    set({ isLoading: true, error: null });
    try {
      await updateAddressApi(id, address);
      // Fetch lại danh sách sau khi cập nhật
      await get().fetchAddress();
    } catch (error) {
      set({ error: "Failed to update address", isLoading: false });
      console.error(error);
    }
  },

  // Xóa địa chỉ
  deleteAddress: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await deleteAddressApi(id);
      // Fetch lại danh sách sau khi xóa
      await get().fetchAddress();
    } catch (error) {
      set({ error: "Failed to delete address", isLoading: false });
      console.error(error);
    }
  },
}));
