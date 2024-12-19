import { create } from "zustand";
import { getInfoApi } from "../apis/userService";
import { logoutApi } from "../apis/authService";

type UserType = {
  id: number;
  fullName: string;
  email: string;
};

interface UserState {
  user: UserType | null; // Cho phép giá trị null
  setUser: (user: UserType) => void; // Hàm đặt user mới
  fetchUser: () => Promise<void>; // Hàm fetch dữ liệu người dùng
  logout: () => Promise<void>; // Hàm đăng xuất
}

const useUserStore = create<UserState>((set) => ({
  user: null, // Giá trị mặc định ban đầu là null

  setUser: (user) => set({ user }),

  fetchUser: async () => {
    try {
      // Fetch user từ API (giả sử URL API là "/api/user")
      const response = await getInfoApi();

      set({ user: response });
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  },

  logout: async () => {
    try {
      // Xử lý đăng xuất, ví dụ gọi API logout
      await logoutApi();

      // Xóa thông tin user
      set({ user: null });

      // xóa token ở localstorage
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  },
}));

export default useUserStore;
