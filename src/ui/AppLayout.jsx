import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="h-screen grid grid-cols-[24rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <SideBar />
      <main className="bg-indigo-50 px-20 py-12">
        <div className="relative">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
