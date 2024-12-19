import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { SidebarProvider } from "./contexts/SideBarProvider";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
      <Toaster />
    </>
  );
}

export default App;
