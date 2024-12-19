import { useEffect } from "react";
import { Button } from "../ui/button";
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
import { RiSave2Fill } from "react-icons/ri";
import useLocationStore from "../../store/useLocationStore";

const OrderInformation = () => {
  const {
    cities,
    districts,
    wards,
    city,
    district,
    ward,
    fetchCities,
    fetchDistricts,
    fetchWards,
    setCity,
    setDistrict,
    setWard,
  } = useLocationStore();

  useEffect(() => {
    fetchCities();
  }, []);

  const handleCityChange = (city: { id: string; name: string }) => {
    setCity(city);
    fetchDistricts(city.id);
  };

  const handleDistrictChange = (district: { id: string; name: string }) => {
    setDistrict(district);
    fetchWards(district.id);
  };

  const handleWardChange = (ward: { id: string; name: string }) => {
    setWard(ward);
  };
  console.log({ city, district, ward });
  return (
    <div className="ml-auto">
      {/* TITLE */}
      <div className="flex items-center justify-between my-8">
        <div className="text-[30px] font-bold pr-[16px]">
          Thông tin đặt hàng
        </div>
        <div>
          <Button
            variant={"outline"}
            className="flex items-center border-none text-[#2f5acf] text-[14px]"
          >
            <img
              src="https://www.coolmate.me/images/address.svg"
              alt="address_book_icon"
            />
            Chọn từ sổ địa chỉ
          </Button>
        </div>
      </div>
      {/* INFO */}
      <div>
        <div className="flex flex-wrap mx-[-9px]">
          <div className="flex-grow-0 basis-2/3 p-[9px]">
            <Label>Họ và tên</Label>
            <div className="pt-2">
              <Input
                className="text-[14px] leading-5 p-[10px] rounded-[1.5rem] flex-1"
                placeholder="Nhạp họ tên của bạn"
              />
            </div>
          </div>
          <div className="flex-grow-0 basis-1/3 p-[9px]">
            <Label>Số điện thoại</Label>
            <div className="pt-2">
              <Input
                placeholder="Nhập số điện thoại của bạn"
                className="text-[14px] leading-5 p-[10px] rounded-[1.5rem] w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-9px]">
          <div className="p-[9px] w-full">
            <Label>Email</Label>
            <div className="pt-2">
              <Input
                className="text-[14px] leading-5 p-[10px] rounded-[1.5rem] w-full"
                placeholder="Theo dõi đơn hàng sẽ được gửi qua Email và ZNS"
              />
            </div>
          </div>
          <div className="p-[9px] w-full">
            <Label>Địa chỉ</Label>
            <div className="pt-2">
              <Input
                className="text-[14px] leading-5 p-[10px] rounded-[1.5rem] w-full"
                placeholder="Địa chỉ (Ví dụ: 103 Vạn Phúc, Phường Vạn Phúc)"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-9px]">
          <div className="w-1/3 p-[9px]">
            <Select
              onValueChange={(value) => {
                const [id, name] = value.split("|"); // Giải mã id và name từ value
                handleCityChange({ id, name }); // Gọi hàm để xử lý lưu trữ
              }}
              value={`${city.id}|${city.name}`}
            >
              <SelectTrigger className="w-full rounded-[40px]">
                <SelectValue placeholder="Chọn Tỉnh/Thành phố" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {cities.map((item) => (
                    <SelectItem key={item.id} value={`${item.id}|${item.name}`}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-1/3 p-[9px]">
            <Select
              onValueChange={(value) => {
                const [id, name] = value.split("|"); // Giải mã id và name từ value
                handleDistrictChange({ id, name }); // Gọi hàm để xử lý lưu trữ
              }}
              value={`${district.id}|${district.name}`}
            >
              <SelectTrigger className="w-full rounded-[40px]">
                <SelectValue placeholder="Chọn Quận/Huyện" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {districts.map((item) => (
                    <SelectItem key={item.id} value={`${item.id}|${item.name}`}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-1/3 p-[9px]">
            <Select
              onValueChange={(value) => {
                const [id, name] = value.split("|"); // Giải mã id và name từ value
                handleWardChange({ id, name }); // Gọi hàm để xử lý lưu trữ
              }}
              value={`${ward.id}|${ward.name}`}
            >
              <SelectTrigger className="w-full rounded-[40px]">
                <SelectValue placeholder="Chọn phường xã" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {wards.map((item) => (
                    <SelectItem key={item.id} value={`${item.id}|${item.name}`}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-9px]">
          <div className="p-[9px] w-full">
            <Input
              className="text-[14px] leading-5 p-[10px] rounded-[1.5rem] w-full"
              placeholder="Ghi chú thêm (Ví dụ: Giao hàng giờ hành chính)"
            />
          </div>
        </div>
        <div className="">
          <Button variant={"ghost"} className="flex items-center">
            <RiSave2Fill />
            Lưu vào sổ địa chỉ để dùng cho lần mua hàng tiếp theo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
