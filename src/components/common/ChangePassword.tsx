import { useForm } from "react-hook-form";
import { z } from "zod";
import { changePasswordSchema } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { useToast } from "../../hooks/use-toast";
import { changePasswordApi } from "../../apis/userService";

const ChangePassword = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof changePasswordSchema>) => {
    console.log(values);
    if (values.newPassword !== values.oldPassword) {
      toast({
        title: "Lỗi",
        description: "Mật khẩu mới và nhập lại mật khẩu không khớp",
      });
    }
    changePasswordApi(values)
      .then((res) => {
        if (res.success) {
          toast({
            title: "Thành công",
            description: "Thay đổi mật khẩu thành công",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h3 className="text-[2.25em] font-medium mb-[1.125rem]">
        Thay đổi mật khẩu
      </h3>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Mật khẩu cũ"
                      {...field}
                      type="password"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Mật khẩu mới"
                      {...field}
                      type="password"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Nhập lại mật khẩu"
                      {...field}
                      type="password"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="uppercase w-full rounded-full font-bold h-[50px]">
              Cập nhật tài khoản
              <FaArrowRightLong />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;
