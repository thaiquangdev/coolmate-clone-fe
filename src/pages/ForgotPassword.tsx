import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useToast } from "../hooks/use-toast";
import { forgotPasswordApi } from "../apis/userService";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    if (!email) {
      toast({
        title: "Lỗi",
        description: "Bạn phải nhập email",
      });
      return false;
    }
    forgotPasswordApi(email)
      .then((res) => {
        toast({
          title: "Thành công",
          description: "Kiểm tra email của bạn",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-[500px] w-full rounded-md p-3">
        <h2 className="text-[30px] font-bold mb-8 text-center">
          Cấp lại mật khẩu
        </h2>
        <div className="mb-4">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email của bạn"
          />
        </div>
        <Button onClick={handleForgotPassword} className="w-full">
          Kiểm tra
        </Button>
      </div>
    </div>
  );
};

export default ForgotPassword;
