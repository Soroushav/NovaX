import {
  HiMagnifyingGlass,
  HiOutlineArrowRightOnRectangle,
  HiOutlineCalendarDateRange,
  HiOutlineCog6Tooth,
  HiOutlineHeart,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const list = `hover:bg-indigo-50 w-full transition duration-300 rounded-md border-l-8 border-transparent hover:border-indigo-400`;

const link =
  "flex gap-3 items-center text-xl text-stone-600  transition duration-300 hover:text-stone-800 px-11 py-4 group";

const iconStyle =
  "text-stone-500 transition duration-300 group-hover:text-indigo-900 font-extrabold text-2xl";
function MainNav() {
  return (
    <ul className=" w-full py-11 space-y-2">
      <p className="text-stone-400 text-lg py-3 px-14">Menu</p>
      <li className={list}>
        <NavLink className={link}>
          <HiMagnifyingGlass className={iconStyle} />
          Browse
        </NavLink>
      </li>
      <li className={list}>
        <NavLink className={link}>
          <HiOutlineHeart className={iconStyle} />
          Watchlist
        </NavLink>
      </li>
      <li className={list}>
        <NavLink className={link}>
          <HiOutlineCalendarDateRange className={iconStyle} /> Coming soon
        </NavLink>
      </li>

      <p className="text-stone-400 text-lg py-3 px-14">General</p>
      <li className={list}>
        <NavLink className={link}>
          <HiOutlineCog6Tooth className={iconStyle} />
          Settings
        </NavLink>
      </li>
      <li className={list}>
        <NavLink className={link}>
          <HiOutlineArrowRightOnRectangle className={iconStyle} />
          Logout
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
