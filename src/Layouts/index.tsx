import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

const DefaultLayout = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
