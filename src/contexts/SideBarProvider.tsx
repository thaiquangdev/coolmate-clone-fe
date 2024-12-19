import { createContext, ReactNode, useContext, useState } from "react";

// Định nghĩa kiểu dữ liệu cho SidebarContext
interface SidebarContextType {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

// tạo context sidebar cho kiểu dữ liệu mặc định
export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

// sidebar provider bao bọc ứng dụng và cung cấp giá trị
interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // hàm để mở sidebar
  const openSidebar = () => setIsSidebarOpen(true);

  // hàm để đóng sidebar
  const closeSidebar = () => setIsSidebarOpen(false);

  // Hàm toggle sidebar
  const toggleSidebar = () => setIsSidebarOpen((prevState) => !prevState);

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
