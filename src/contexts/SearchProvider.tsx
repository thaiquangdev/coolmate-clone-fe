import { createContext, ReactNode, useContext, useState } from "react";

interface SearchContextType {
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("uesSearch must be used within a SidebarProvider");
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const openSearch = () => setIsSearchOpen(true);

  const closeSearch = () => setIsSearchOpen(false);

  return (
    <SearchContext.Provider value={{ isSearchOpen, openSearch, closeSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
