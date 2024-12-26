import { Link } from "react-router-dom";
import useLocationStore from "../../store/useLocationStore";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

interface EditAddressFormProps {
  onChangeOpenEdit: () => void;
}

const EditAddressForm: React.FC<EditAddressFormProps> = ({
  onChangeOpenEdit,
}) => {
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
  return (
    <div>
      <div className="flex flex-wrap float-none mx-[-9px] relative">
        <div className="w-[50%] p-[9px]">
          <Input
            placeholder="Họ tên"
            className="rounded-[40px] h-[40px] py-[5px] px-[20px] w-full transition-all duration-200"
          />
        </div>
        <div className="w-[50%] p-[9px]">
          <Input
            placeholder="Số điện thoại"
            className="rounded-[40px] h-[40px] py-[5px] px-[20px] w-full transition-all duration-200"
          />
        </div>
      </div>
      <div className="flex flex-wrap float-none mx-[-9px] relative">
        <div className="w-[50%] p-[9px]">
          <Input
            placeholder="Địa chỉ"
            className="rounded-[40px] h-[40px] py-[5px] px-[20px] w-full transition-all duration-200"
          />
        </div>
        <div className="w-[50%] p-[9px]">
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
      </div>
      <div className="flex flex-wrap float-none mx-[-9px] relative">
        <div className="w-[50%] p-[9px]">
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
        <div className="w-[50%] p-[9px]">
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
      <div className="flex flex-wrap float-none mx-[-9px] relative">
        <div className="p-[9px] w-full relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                to="#"
                className="text-red-600 cursor-pointer transition-all duration-200 hover:text-primary-color"
              >
                Xóa đị chỉ
              </Link>
            </div>
            <div>
              <Button
                onClick={onChangeOpenEdit}
                className="text-[12px] h-[31px] bg-[#d9d9d9] text-black px-[30px] rounded-[16px] hover:text-white hover:bg-primary-color transition-all duration-200"
              >
                Hủy
              </Button>
              <Button className="ml-[10px] text-[12px] h-[31px] bg-[#2f5acf] text-white px-[30px] rounded-[16px] hover:text-white hover:bg-primary-color transition-all duration-200">
                <span>Lưu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAddressForm;
