import { Control, Controller, Path, FieldValues } from "react-hook-form";
import { FormControl, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

interface CustomFormFieldProps<T extends FieldValues> {
  name: Path<T>; // Đảm bảo name là một đường dẫn hợp lệ của T
  placeholder: string;
  control: Control<T>;
  type?: string;
}

const CustomFormField = <T extends FieldValues>({
  name,
  placeholder,
  control,
  type = "text",
}: CustomFormFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl className="my-0">
            <Input
              placeholder={placeholder}
              {...field}
              type={type}
              className="h-[50px] rounded-[40px] py-[5px] px-[20px] transition-all w-full"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
