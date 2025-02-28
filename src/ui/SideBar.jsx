import Logo from "./Logo";
import MainNav from "./MainNav";

function SideBar() {
  return (
    <aside className="row-span-full flex flex-col items-center gap-12 py-14 bg-gray-50 border-r-gray-300 border-x-2">
      <Logo />
      <MainNav/>
    </aside>
  );
}

export default SideBar;
