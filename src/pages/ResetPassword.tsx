import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useToast } from "../hooks/use-toast";

const ResetPassword = () => {
  const { toast } = useToast();
  const [newPassword, setNewpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = () => {
    if (!newPassword) {
      toast({
        title: "Lỗi",
        description: "Bạn phải nhập mật khẩu mới",
      });
      return false;
    }
    if (!confirmPassword) {
      toast({
        title: "Lỗi",
        description: "Bạn phải nhập lại mật khẩu",
      });
      return false;
    }
    if (newPassword !== confirmPassword) {
      toast({
        title: "Lỗi",
        description: "Mật khẩu mới và nhập lại mật khẩu không khớp",
      });
      return false;
    }
    console.log(newPassword, confirmPassword);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-[500px] w-full rounded-md p-3">
        <h2 className="text-[30px] font-bold mb-8 text-center">
          Cập nhật mật khẩu
        </h2>
        <div className="mb-4">
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewpassword(e.target.value)}
            placeholder="Nhập mật khẩu mới"
          />
        </div>
        <div className="mb-4">
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Nhập lại mật khẩu mới"
          />
        </div>
        <Button onClick={handleResetPassword} className="w-full">
          Cập nhật
        </Button>
      </div>
    </div>
  );
};

export default ResetPassword;
