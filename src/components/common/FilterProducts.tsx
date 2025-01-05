import { useSearchParams } from "react-router-dom";
import { ChangeEvent } from "react";
import {
  categoryProductFilter,
  colorProductFilter,
  sizeFilter,
} from "../../lib/constrant";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FilterProducts: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Hàm xử lý thay đổi bộ lọc
  const handleFilterChange = (
    type: string,
    value: string,
    isChecked: boolean
  ) => {
    const currentParams = searchParams.get(type)?.split(",") || [];
    let updatedParams: string[];

    if (isChecked) {
      // Thêm giá trị mới
      updatedParams = [...currentParams, value];
    } else {
      // Xóa giá trị khi bỏ chọn
      updatedParams = currentParams.filter((param) => param !== value);
    }

    // Cập nhật URL với tham số đã chỉnh sửa
    if (updatedParams.length > 0) {
      searchParams.set(type, updatedParams.join(","));
    } else {
      searchParams.delete(type); // Xóa tham số nếu không có giá trị nào
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="sticky top-5 transition-all duration-150">
      <form action="">
        <div className="pr-10 max-h-[calc(100vh - 50px)] overflow-y-auto">
          {/* Kích cỡ */}
          <div className="mb-[28px]">
            <h5 className="text-[#a3a3a3] text-[14px] font-semibold mb-[12px]">
              Kích cỡ
            </h5>
            <ul className="grid gap-[8px] grid-cols-4 overflow-hidden transition-all">
              {sizeFilter.map((item) => {
                const isActive =
                  searchParams.get("size")?.split(",").includes(item.title) ??
                  false;
                return (
                  <li
                    key={item.id}
                    className="items-center flex justify-center relative"
                  >
                    <Label
                      htmlFor={item.id}
                      className={`items-center flex flex-1 justify-center py-[8px] px-[12px] ${
                        isActive
                          ? "bg-[#2d9dd6] text-white"
                          : "bg-white border border-[#bebebe]"
                      } rounded-[0.375rem] cursor-pointer`}
                    >
                      <Input
                        type="checkbox"
                        className="hidden"
                        name="size"
                        value={item.title}
                        id={item.id}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleFilterChange(
                            "size",
                            item.title,
                            e.target.checked
                          )
                        }
                      />
                      <span className="text-[14px]">{item.title}</span>
                    </Label>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Màu sắc */}
          <div className="mb-[28px]">
            <h5 className="text-[#a3a3a3] text-[14px] font-semibold mb-[12px]">
              Màu sắc
            </h5>
            <div className="grid gap-[6px] grid-cols-4 overflow-hidden transition-all">
              {colorProductFilter.map((item) => {
                const isActive =
                  searchParams.get("color")?.split(",").includes(item.title) ??
                  false;
                return (
                  <div
                    key={item.id}
                    className="items-center flex flex-wrap justify-start"
                  >
                    <Label
                      className={`flex-1 items-center cursor-pointer flex flex-col justify-center relative whitespace-nowrap ${
                        isActive ? "ring-2 ring-[#2d9dd6]" : ""
                      }`}
                    >
                      <Input
                        type="checkbox"
                        name="color"
                        value={item.title}
                        className="hidden"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleFilterChange(
                            "color",
                            item.title,
                            e.target.checked
                          )
                        }
                      />
                      <div
                        className={`border rounded-full h-[25px] w-[25px] m-[4px] relative ${
                          isActive ? "border-[#2d9dd6]" : "border-[#bebebe]"
                        }`}
                        style={{ backgroundColor: item.code }}
                      ></div>
                      <span className="text-[12px]">{item.title}</span>
                    </Label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Loại sản phẩm */}
          <div className="mb-[28px]">
            <h5 className="text-[#a3a3a3] text-[14px] font-semibold mb-[12px]">
              Loại sản phẩm
            </h5>
            <ul className="overflow-hidden transition-all">
              {categoryProductFilter.map((item) => {
                const isActive =
                  searchParams
                    .get("category")
                    ?.split(",")
                    .includes(item.title) ?? false;
                return (
                  <li
                    key={item.id}
                    className={`cursor-pointer mb-[6px] relative ${
                      isActive ? "text-[#2d9dd6] font-semibold" : ""
                    }`}
                  >
                    <Label className="flex items-center relative cursor-pointer before:border before:border-[#bebebe] before:h-[20px] before:w-[20px] before:absolute before:top-[50%] before:left-0 before:translate-y-[-50%] before:bg-white after:content-[''] after:bg-[#2d9dd6] after:h-[12px] after:w-[12px] after:absolute after:top-[50%] after:left-[4px] after:translate-y-[-50%] after:rounded-[2px] after:scale-0">
                      <Input
                        type="checkbox"
                        className="hidden"
                        name="category"
                        value={item.title}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleFilterChange(
                            "category",
                            item.title,
                            e.target.checked
                          )
                        }
                      />
                      <span className="pl-[30px] flex items-center text-[14px] leading-[24px]">
                        {item.title}
                      </span>
                    </Label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterProducts;
