import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

const UpdateInfo = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Tạo danh sách ngày (1-31)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // Tạo danh sách tháng (1-12)
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  // Tạo danh sách năm (1930-2009)
  const years = Array.from({ length: 2009 - 1930 + 1 }, (_, i) => 1930 + i);

  return (
    <div className="">
      <h3 className="text-[2.25em] font-medium mb-[1.125rem]">
        Chỉnh sửa thông tin tài khoản
      </h3>
      <div className="space-y-4">
        {/* Trường họ tên */}
        <div className="mb-4">
          <Label>Họ tên của bạn</Label>
          <Input
            placeholder="Nhập họ và tên"
            className="px-[2rem] py-[1rem] rounded-full"
          />
        </div>

        {/* Trường ngày tháng năm sinh */}
        <div className="mb-4">
          <Label>Ngày tháng năm sinh</Label>
          <div className="flex gap-4">
            {/* Select Ngày */}
            <Select onValueChange={(value) => setDay(value)}>
              <SelectTrigger className="w-full rounded-full">
                <SelectValue placeholder="Chọn ngày" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {days.map((d) => (
                    <SelectItem key={d} value={d.toString()}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Select Tháng */}
            <Select onValueChange={(value) => setMonth(value)}>
              <SelectTrigger className="w-full rounded-full">
                <SelectValue placeholder="Chọn tháng" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {months.map((m) => (
                    <SelectItem key={m} value={m.toString()}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Select Năm */}
            <Select onValueChange={(value) => setYear(value)}>
              <SelectTrigger className="w-full rounded-full">
                <SelectValue placeholder="Chọn năm" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {years.map((y) => (
                    <SelectItem key={y} value={y.toString()}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Giới tính */}
        <div className="mb-4">
          <RadioGroup defaultValue="comfortable" className="flex">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="name" id="name" />
              <Label htmlFor="name">Nam</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nu" id="nu" />
              <Label htmlFor="nu">Nữ</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lgbt" id="lbgt" />
              <Label htmlFor="lgbt">LGBT</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Số điện thoại */}
        <div className="mb-4">
          <Label>Số điện thoại</Label>
          <Input
            placeholder="Nhập số điện thoại"
            className="px-[2rem] py-[1rem] rounded-full"
          />
        </div>

        {/* Chiều cao */}
        <div className="mb-4">
          <div className="flex items-center">
            <div className="w-[25%] flex flex-start">Chiều cao</div>
            <div className="w-[75%] flex items-center">
              <Slider
                defaultValue={[170]}
                max={185}
                min={140}
                step={1}
                className="w-full"
              />
              <span className="text-[#2f5acf] font-semibold ml-4">170cm</span>
            </div>
          </div>
        </div>

        {/* Cân nặng */}
        <div className="mb-4">
          <div className="flex items-center">
            <div className="w-[25%] flex flex-start">Chiều cao</div>
            <div className="w-[75%] flex items-center">
              <Slider
                defaultValue={[60]}
                max={85}
                min={40}
                step={1}
                className="w-full"
              />
              <span className="text-[#2f5acf] font-semibold ml-4">60kg</span>
            </div>
          </div>
        </div>

        {/* Nút lưu */}
        <div className="mt-6">
          <Button className="uppercase w-full rounded-full font-bold h-[50px]">
            Cập nhật tài khoản
            <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;
