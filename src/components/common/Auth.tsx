import { z } from "zod";
import { Button } from "../ui/button";
import { DialogContent } from "../ui/dialog";
import { useForm } from "react-hook-form";
import { loginSchema, registerSchema } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { authImg } from "../../lib/constrant";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import CustomFormField from "./CustomFormField";
import { useState } from "react";
import {
  loginApi,
  loginGoogleApi,
  registerApi,
  verifyOtpApi,
} from "../../apis/authService";
import { useToast } from "../../hooks/use-toast";
import useUserStore from "../../store/useUser";

const Auth = ({ onClose }: { onClose?: () => void }) => {
  const { toast } = useToast();
  const { fetchUser } = useUserStore();
  const [isRegister, setIsRegister] = useState(false);
  const [step, setStep] = useState<"login" | "register" | "otp">("login");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // Sử dụng useNavigate

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(isRegister ? registerSchema : loginSchema),
    defaultValues: {
      email: "",
      password: "",
      phoneNumber: "",
      fullName: "",
      otp: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    console.log(values);
    if (step === "register") {
      console.log("Sending OTP...");

      registerApi(values)
        .then((res) => {
          setStep("otp");
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "Lỗi",
            description: err.response.data.message,
          });
        });
    } else if (step === "otp") {
      console.log("Verifying OTP...");
      const { email, otp } = values;
      verifyOtpApi({ email, otp })
        .then((res) => {
          setStep("login");
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "Lỗi",
            description: err.response.data.message,
          });
        });
    } else {
      console.log("Logging in...");
      loginApi(values)
        .then((res) => {
          console.log(res);
          toast({
            title: "Thành công",
            description: "Đăng nhập thành công!",
          });
          localStorage.setItem("access_token", res.accessToken);
          localStorage.setItem("refresh_token", res.refreshToken);
          // Điều hướng về trang "/"
          navigate("/");
          fetchUser();

          // Tắt dialog (nếu có onClose)
          if (onClose) onClose();
        })
        .catch((err) => {
          toast({
            title: "Lỗi",
            description: err.response.data.message,
          });
        });
    }
  };

  const handleIsRegister = () => {
    setIsRegister((prev) => !prev);
    setStep(isRegister ? "login" : "register");
  };

  const handeLoginGoogle = () => {
    loginGoogleApi()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
    onClose();
  };

  return (
    <DialogContent className="sm:max-w-[560px] max-h-[85vh] p-8 overflow-y-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <img
            src="https://mcdn.coolmate.me/image/March2024/mceclip4_81.jpg"
            alt=""
            className="h-[29px]"
          />
          <div className="mb-4 text-center">
            <div className="font-bold mt-6 mb-3 text-left lg:text-[30px] lg:leading-9 text-[18px] leading-5">
              {step === "otp"
                ? "Vui lòng nhập mã OTP"
                : "Rất nhiều đặc quyền và quyền lợi mua sắm đang chờ bạn"}
            </div>
          </div>
          {step !== "otp" && (
            <>
              <div className="flex items-center justify-center mb-[20px] ml-[-8px] mr-[-8px]">
                {authImg.map((item) => (
                  <div className="px-[8px]" key={item.id}>
                    <img src={item.url} alt="" className="max-w-full h-auto" />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-start">
                <div className="font-bold mr-2 text-primary-color text-[14px]">
                  Đăng nhập bằng:
                </div>
                <Button className="flex h-[50px] justify-center text-center bg-white items-center rounded-[14px] w-[50px] cursor-pointer border border-[#ccc] hover:bg-white px-0 py-0">
                  <span className="inline-block" onClick={handeLoginGoogle}>
                    <img
                      src="https://mcdn.coolmate.me/image/September2023/mceclip1_21.png"
                      alt=""
                      className="h-[30px] object-contain inline-block max-w-full"
                    />
                  </span>
                </Button>
                <Button className=" ml-2 flex h-[50px] justify-center text-center bg-white items-center rounded-[14px] w-[50px] cursor-pointer border border-[#ccc] hover:bg-white px-0 py-0">
                  <span className="inline-block">
                    <img
                      src="https://mcdn.coolmate.me/image/September2023/mceclip0_86.png"
                      alt=""
                      className="h-[30px] object-contain inline-block max-w-full"
                    />
                  </span>
                </Button>
              </div>
            </>
          )}
          {step === "otp" ? (
            <CustomFormField
              name="otp"
              placeholder="Nhập mã OTP"
              control={form.control}
            />
          ) : (
            <>
              {isRegister && (
                <div className="flex items-center mx-[-5px]">
                  <div className="px-[5px] w-full">
                    <CustomFormField
                      name="fullName"
                      placeholder="Tên của bạn"
                      control={form.control}
                    />
                  </div>
                  <div className="px-[5px] w-full">
                    <CustomFormField
                      name="phoneNumber"
                      placeholder="SĐT của bạn"
                      control={form.control}
                    />
                  </div>
                </div>
              )}
              <CustomFormField
                name="email"
                placeholder="Email của bạn"
                control={form.control}
              />
              <CustomFormField
                name="password"
                placeholder="Mật khẩu"
                type="password"
                control={form.control}
              />
            </>
          )}
          <Button
            type="submit"
            className="w-full bg-black border-none rounded-[40px] text-white cursor-pointer mb-[8px] mt-4 py-[5px] px-[20px] text-center"
          >
            {step === "otp"
              ? "XÁC NHẬN OTP"
              : isRegister
              ? "ĐĂNG KÝ"
              : "ĐĂNG NHẬP"}
          </Button>
          {step !== "otp" && (
            <div className="flex justify-between">
              <Link
                to="#"
                className="cursor-pointer text-[#2f5acf] text-[16px] leading-5"
                onClick={handleIsRegister}
              >
                {isRegister ? "Đăng nhập" : "Đăng ký"}
              </Link>
              {isRegister ? (
                ""
              ) : (
                <Link
                  to="#"
                  className="cursor-pointer text-[#2f5acf] text-[16px] leading-5"
                  onClick={handleForgotPassword}
                >
                  Quên mật khẩu
                </Link>
              )}
            </div>
          )}
        </form>
      </Form>
    </DialogContent>
  );
};

export default Auth;
