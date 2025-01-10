import apiClient from "./apiClient";

export const getInfoApi = async () => {
  const response = await apiClient.get("/users/info");
  return response.data;
};

interface ChangePassword {
  oldPassword: string;
  newPassword: string;
}

export const changePasswordApi = async (data: ChangePassword) => {
  const response = await apiClient.put("/users/change-password", data);
  return response.data;
};

interface UpdateProfile {
  fullName: string;
  gender: string;
  phoneNumber: string;
  dob: Date;
  height: number;
  weight: number;
}

export const updateProfileApi = async (data: UpdateProfile) => {
  const response = await apiClient.put("/users/update-profile", data);
  return response.data;
};

export const forgotPasswordApi = async (email: string) => {
  const response = await apiClient.post("/users/forgot-password", { email });
  return response.data;
};

export const resetPasswordApi = async (token: string, newPassword: string) => {
  const response = await apiClient.put("/users/reset-password", {
    token,
    newPassword,
  });
  return response.data;
};
