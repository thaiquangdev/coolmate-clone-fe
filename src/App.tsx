import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { SidebarProvider } from "./contexts/SideBarProvider";
import { Toaster } from "./components/ui/toaster";
import { SearchProvider } from "./contexts/SearchProvider";

function App() {
  return (
    <>
      <SearchProvider>
        <SidebarProvider>
          <RouterProvider router={router} />
        </SidebarProvider>
      </SearchProvider>
      <Toaster />
    </>
  );
}

export default App;
