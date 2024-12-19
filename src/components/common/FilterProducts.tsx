import {
  categoryProductFilter,
  colorProductFilter,
  sizeFilter,
} from "../../lib/constrant";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FilterProducts = () => {
  return (
    <div className="sticky top-5 transition-all duration-150">
      <form action="">
        <div className="pr-10 max-h-[calc(100vh - 50px)] overflow-y-auto">
          <div className="mb-[28px]">
            <h5 className="text-[#a3a3a3] text-[14px] font-semibold mb-[12px]">
              Kích cỡ
            </h5>
            <ul className="grid gap-[8px] grid-cols-4 overflow-hidden transition-all">
              {sizeFilter.map((item) => (
                <li
                  key={item.id}
                  className="items-center flex justify-center relative"
                >
                  <Label
                    htmlFor={item.id}
                    className="items-center flex flex-1 justify-center py-[8px] px-[12px] bg-white border border-[#bebebe] rounded-[0.375rem] cursor-pointer"
                  >
                    <Input
                      type="checkbox"
                      className="hidden" // Ẩn checkbox để chỉ dùng Label làm giao diện
                      name="size"
                      value="S"
                      id={item.id}
                    />
                    <span className="text-[#737373] text-[14px]">
                      {item.title}
                    </span>
                  </Label>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-[28px]">
            <h5 className="text-[#a3a3a3] text-[14px] font-semibold mb-[12px]">
              Màu sắc
            </h5>
            <div className="grid gap-[6px] grid-cols-4 overflow-hidden transition-all">
              {colorProductFilter.map((item) => (
                <div
                  key={item.id}
                  className="items-center flex flex-wrap justify-start"
                >
                  <Label className="flex-1 items-center cursor-pointer flex flex-col justify-center relative whitespace-nowrap">
                    <Input
                      type="radio"
                      name="color"
                      value={item.code}
                      className="hidden" // Ẩn input để sử dụng giao diện của Label
                    />
                    <div
                      className={`border border-[#bebebe] rounded-full h-[25px] w-[25px] m-[4px] relative`}
                      style={{ backgroundColor: item.code }} // Sử dụng inline style để hiển thị màu
                    ></div>
                    <span className="text-[12px] text-[#737373]">
                      {item.title}
                    </span>
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-[28px]">
            <h5 className="text-[#a3a3a3] text-[14px] font-semibold mb-[12px]">
              Loại sản phẩm
            </h5>
            <ul className="overflow-hidden transition-all">
              {categoryProductFilter.map((item) => (
                <li key={item.id} className="cursor-pointer mb-[6px] relative">
                  <Label className="flex items-center relative cursor-pointer before:border before:border-[#bebebe] before:h-[20px] before:w-[20px] before:absolute before:top-[50%] before:left-0 before:translate-y-[-50%] before:bg-white after:content-[''] after:bg-[#2d9dd6] after:h-[12px] after:w-[12px] after:absolute after:top-[50%] after:left-[4px] after:translate-y-[-50%] after:rounded-[2px] after:scale-0">
                    <Input
                      type="checkbox"
                      className="hidden"
                      name="category"
                      value="Ao" // Giá trị của input
                      onChange={() => console.log("Checkbox toggled!")} // Hàm xử lý sự kiện
                    />
                    <span className="pl-[30px] flex items-center text-[#737373] cursor-pointer text-[14px] font-normal leading-[24px]">
                      {item.title}
                    </span>
                  </Label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterProducts;
