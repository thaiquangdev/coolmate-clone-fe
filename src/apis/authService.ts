import apiClient from "./apiClient";

type registerType = {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
};

export const registerApi = async (data: registerType) => {
  const response = await apiClient.post("/auth/register-with-otp", data);
  return response.data;
};

type otpType = {
  otp: string;
  email: string;
};

export const verifyOtpApi = async (data: otpType) => {
  const response = await apiClient.post("/auth/verify-otp", data);
  return response.data;
};

type loginType = {
  email: string;
  password: string;
};

export const loginApi = async (data: loginType) => {
  const response = await apiClient.post("/auth/login", data);
  return response.data;
};

export const loginGoogleApi = async () => {
  const response = await apiClient.get("/auth/google/login");
  return response.data;
};

export const logoutApi = async () => {
  const response = await apiClient.post("/auth/logout");
  return response.data;
};
