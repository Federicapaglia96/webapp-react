import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";

function GuestLayout() {
  return (
   <>
   <AppHeader/>
   <Outlet />
   </>
    
  );
}

export default GuestLayout;