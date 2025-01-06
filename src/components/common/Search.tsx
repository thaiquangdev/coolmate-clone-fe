import { useState } from "react";
import { useSearch } from "../../contexts/SearchProvider";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import useProductStore from "../../store/useProduct";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const { isSearchOpen, closeSearch } = useSearch();
  const { setFilters, fetchProducts } = useProductStore();
  const [search, setSearch] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    // Cập nhật search params trên URL
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (search) {
        newParams.set("search", search);
      } else {
        newParams.delete("search");
      }
      return newParams;
    });

    // Cập nhật trạng thái tìm kiếm và gọi API
    setFilters({ search });
    fetchProducts();
    closeSearch(); // Đóng modal tìm kiếm
  };

  return (
    <>
      {isSearchOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[10] transition-opacity duration-300 ease-in-out"
            onClick={closeSearch} // Đóng tìm kiếm khi nhấn vào lớp phủ
          ></div>

          {/* Search Box */}
          <div
            className="absolute top-0 left-0 w-full h-[107px] bg-white text-black z-[20] 
            transform transition-transform duration-300 ease-in-out"
          >
            <div className="flex h-full items-center justify-center mx-auto max-w-[532px] px-[16px] relative transition-all duration-0 w-full">
              <div className="flex-1 flex items-center max-w-full relative transition-all duration-300">
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Tìm kiếm sản phẩm"
                  className=" rounded-[33px] rounded-r-none"
                />
                <Button
                  onClick={handleSearch}
                  className=" rounded-[33px] rounded-l-none"
                >
                  Tìm kiếm
                </Button>
              </div>
              <Button
                variant={"outline"}
                onClick={closeSearch}
                className="absolute top-[34px] right-[-100px] "
              >
                X
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Search;
