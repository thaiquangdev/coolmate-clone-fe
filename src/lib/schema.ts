import { OTPInput } from "input-otp";
import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email không được để trống" })
    .email({ message: "Email không đúng định dạng" }),
  password: z
    .string()
    .nonempty({ message: "Mật khẩu không được để trống" })
    .min(6, { message: "Mật khẩu ít nhất là 6 ký tự" }),
});

export const registerSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email không được để trống" })
    .email({ message: "Email không đúng định dạng" }),
  password: z
    .string()
    .nonempty({ message: "Mật khẩu không được để trống" })
    .min(6, { message: "Mật khẩu ít nhất là 6 ký tự" }),
  fullName: z
    .string()
    .nonempty({ message: "Tên không được để trống" })
    .min(6, { message: "Tên ít nhất là 6 ký tự" }),
  phoneNumber: z
    .string()
    .nonempty({ message: "Số điện thoại không được để trống" })
    .length(10, { message: "Số điện thoại bắt buộc 10 ký tự" }),
  otp: z.string(),
});

export const changePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .nonempty({ message: "Mật khẩu cũ không được để trống" }),
    newPassword: z
      .string()
      .nonempty({ message: "Mật khẩu mới không được để trống" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Nhập lại mật khẩu không được để trống" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Mật khẩu mới và xác nhận mật khẩu không khớp",
    path: ["confirmPassword"], // Gắn lỗi vào trường confirmPassword
  });
