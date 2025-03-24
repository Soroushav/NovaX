import { HiDotsHorizontal, HiDotsVertical } from "react-icons/hi";
import { useUser } from "./useUser";
import { useLogout } from "./useLogout";
import {
  HiArrowRightOnRectangle,
  HiKey,
  HiListBullet,
  HiUser,
} from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserAvatar() {
  const { user } = useUser();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();
  const { logout, isLoading } = useLogout();
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center items-center gap-5 mx-5">
      <img
        className="block w-14 aspect-square object-cover rounded-full"
        src={user.user_metadata.avatar || `/default-user.jpg`}
      />
      <div>
        <p className="font-bold">{user.user_metadata.fullName || "user"}</p>
        <p className="text-stone-600">Level 2</p>
      </div>
      <div ref={menuRef}>
        <HiDotsVertical
          className="text-stone-800 cursor-pointer"
          onClick={() => setShowMenu((prev) => !prev)}
        />
        {showMenu && (
          <div className="absolute z-10 top-20 right-24 w-64 bg-indigo-100 rounded-lg">
            <ul className="divide-y-2 text-stone-800 font-medium">
              <li
                className="py-3 px-3 cursor-pointer flex items-center gap-2 hover:bg-indigo-50 transition duration-300"
                onClick={() => navigate("/account")}
              >
                <span>
                  <HiUser />
                </span>
                Change Avatar
              </li>
              <li
                className="py-3 px-3 cursor-pointer flex items-center gap-2 hover:bg-indigo-50 transition duration-300"
                onClick={() => navigate("/password")}
              >
                <span>
                  <HiKey />
                </span>
                Change Password
              </li>
              <li className="py-3 px-3 cursor-pointer flex items-center gap-2 hover:bg-indigo-50 transition duration-300">
                <span>
                  <HiListBullet />
                </span>
                User History
              </li>
              <li
                className="py-3 px-3 cursor-pointer flex items-center gap-2 hover:bg-indigo-50 transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
              >
                <span>
                  <HiArrowRightOnRectangle />
                </span>
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserAvatar;
