import { useEffect, useState } from "react";
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
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import AddressList from "./AddressList";
import { useAddressStore } from "../../store/useAddress";

interface OrderInformationProps {
  changeAddressId: (aid: number) => void;
}

const OrderInformation: React.FC<OrderInformationProps> = ({
  changeAddressId,
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
  const { addNewAddress } = useAddressStore();

  useEffect(() => {
    fetchCities();
  }, []);

  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");

  const [addressId, setAddressId] = useState<number>(0);

  const handleChangeAddressId = (aid: number) => {
    setAddressId(aid);
    changeAddressId(addressId);
  };

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

  const handleAddAddress = () => {
    console.log({
      fullName,
      email,
      phoneNumber,
      city: city.name,
      district: district.name,
      ward: ward.name,
      note,
    });
    const data = {
      fullName,
      email,
      phoneNumber,
      city: city.name,
      district: district.name,
      ward: ward.name,
      note,
      address,
      zipCode,
    };
    addNewAddress(data);
  };

  return (
    <div className="ml-auto">
      {/* TITLE */}
      <div className="flex items-center justify-between my-8">
        <div className="text-[30px] font-bold pr-[16px]">
          Thông tin đặt hàng
        </div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
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
            </DialogTrigger>
            <DialogContent className="max-w-[800px] max-h-[85vh] overflow-scroll">
              <AddressList onChangeAddressId={handleChangeAddressId} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {/* INFO */}
      <div>
        <div className="flex flex-wrap mx-[-9px]">
          <div className="flex-grow-0 basis-2/3 p-[9px]">
            <Label>Họ và tên</Label>
            <div className="pt-2">
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="text-[14px] leading-5 p-[10px] rounded-[1.5rem] flex-1"
                placeholder="Nhạp họ tên của bạn"
              />
            </div>
          </div>
          <div className="flex-grow-0 basis-1/3 p-[9px]">
            <Label>Số điện thoại</Label>
            <div className="pt-2">
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-[14px] leading-5 p-[10px] rounded-[1.5rem] w-full"
                placeholder="Theo dõi đơn hàng sẽ được gửi qua Email và ZNS"
              />
            </div>
          </div>
          <div className="p-[9px] w-full">
            <Label>Địa chỉ</Label>
            <div className="pt-2">
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="text-[14px] leading-5 p-[10px] rounded-[1.5rem] w-full"
                placeholder="Địa chỉ (Ví dụ: 103 Vạn Phúc, Phường Vạn Phúc)"
              />
            </div>
          </div>
          <div className="p-[9px] w-full">
            <Label>Zipcode</Label>
            <div className="pt-2">
              <Input
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="text-[14px] leading-5 p-[10px] rounded-[1.5rem] w-full"
                placeholder="Mã zipcode tỉnh thành"
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
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="text-[14px] leading-5 p-[10px] rounded-[1.5rem] w-full"
              placeholder="Ghi chú thêm (Ví dụ: Giao hàng giờ hành chính)"
            />
          </div>
        </div>
        <div className="">
          <Button
            variant={"ghost"}
            className="flex items-center"
            onClick={handleAddAddress}
          >
            <RiSave2Fill />
            Lưu vào sổ địa chỉ để dùng cho lần mua hàng tiếp theo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
