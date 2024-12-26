import { useEffect, useState } from "react";
import { useAddressStore } from "../../store/useAddress";
import EditAddressForm from "./EditAddressForm";

interface AddressListProps {
  onChangeAddressId: (aid: number) => void;
}

const AddressList: React.FC<AddressListProps> = ({ onChangeAddressId }) => {
  const { fetchAddress, addresses } = useAddressStore();
  const [editAddressId, setEditAddressId] = useState<number | null>(null);

  useEffect(() => {
    fetchAddress();
  }, []);

  const handleCloseEditForm = () => {
    setEditAddressId(null);
  };

  const handleEditClick = (id: number) => {
    setEditAddressId(id);
  };

  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto overflow-y-auto">
        <div>
          <div className="px-[16px] text-[30px] font-bold mb-8 text-center">
            Sổ địa chỉ
          </div>
          <div>
            {addresses.map((item) => (
              <div className="mb-4" key={item.id}>
                <div
                  onClick={() => onChangeAddressId(item.id)}
                  className="text-[14px] bg-[#2f5acf] border border-[#2f5acf] text-white rounded-[16px] cursor-pointer py-4 px-8 relative transition-all duration-200 z-1"
                >
                  <span className="text-[#f9f86c] block absolute top-[0.5rem] right-[1rem]">
                    ★
                  </span>
                  <div>
                    {item.address}, {item.ward}, {item.district}, {item.city} -
                    zipCode: {item.zipCode}
                  </div>
                  <div>
                    {item.fullName}, {item.phoneNumber}
                  </div>
                  {editAddressId !== item.id && (
                    <span
                      onClick={() => handleEditClick(item.id)}
                      className="rounded-[8px] absolute bottom-[0.5rem] text-white hover:text-black px-[10px] right-[1rem] transition-all duration-200"
                    >
                      Sửa
                    </span>
                  )}
                </div>
                {editAddressId === item.id && (
                  <div className="border border-t-0 rounded-bl-[16px] rounded-br-[16px] p-[16px] relative top-[-16px]">
                    <EditAddressForm
                      onChangeOpenEdit={handleCloseEditForm}
                      address={item} // Truyền thông tin địa chỉ để sửa
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressList;
