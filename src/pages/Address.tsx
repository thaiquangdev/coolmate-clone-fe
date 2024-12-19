import { Button } from "../components/ui/button";
import { FaStar } from "react-icons/fa6";

const Address = () => {
  return (
    <div className="bg-white rounded-[0.5rem] flex-[1] py-[58px] px-[62px]">
      <div className="flex items-center justify-between pb-8 border-b border-[#e1e1e1]">
        <h3 className="text-[2.25em] font-medium mb-[1.125rem]">
          Địa chỉ của tôi
        </h3>
        <Button className="uppercase h-[54px] px-[40px] rounded-full text-[16px]">
          Thêm địa chỉ mới
        </Button>
      </div>
      <div className="text-[1.5rem] py-4">Sổ địa chỉ</div>
      <div>
        <div className="border-b border-[#e1e1e1] flex justify-between mb-6 pb-6">
          <div className="flex-[1]">
            <div className="flex items-center text-[16px] mb-2">
              Thái Quang{" "}
              <span className="flex items-center justify-center gap-1 rounded-full ml-2 pt-[4px] px-[10px] pb-[5px] border border-[#e1e1e1] text-[0.75rem]">
                <FaStar />
                Mặc định
              </span>
            </div>
            <div className="text-[16px] text-[#747474]">
              0857176357 <br /> 239 Tố Hữu, Quận Hải Châu, Đà Nẵng
            </div>
          </div>
          <div className="flex gap-4 items-start ">
            <Button>Cập nhật</Button>
            <Button variant={"destructive"}>Xóa</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
